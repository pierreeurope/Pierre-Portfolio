import React, { useEffect, useRef, useCallback } from 'react';
import './MouseTrail.css';

const MouseTrail = ({ enabled }) => {
  const canvasRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  const numbersRef = useRef([]);
  const isErasing = useRef(false);
  const ctxRef = useRef(null);
  const canvasHeight = useRef(0);

  // Generate prime numbers
  const generatePrimes = useCallback((count) => {
    const primes = [];
    let num = 2;
    while (primes.length < count) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(num);
      num++;
    }
    return primes;
  }, []);

  const primesCache = useRef(generatePrimes(5000));

  useEffect(() => {
    if (!enabled) {
      if (canvasRef.current && ctxRef.current) {
        ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        numbersRef.current = [];
      }
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    const getDocHeight = () => {
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
    };

    // Get prime based on speed
    const getPrimeFromSpeed = (speed) => {
      const maxSpeed = 80;
      const normalizedSpeed = Math.min(speed / maxSpeed, 1);
      const maxIndex = primesCache.current.length - 1;
      const index = Math.floor(normalizedSpeed * maxIndex);
      return primesCache.current[index];
    };

    // Smaller font sizes
    const getFontSize = (speed) => {
      const minSize = 10;
      const maxSize = 28;
      const maxSpeed = 80;
      const normalizedSpeed = Math.min(speed / maxSpeed, 1);
      return minSize + (maxSize - minSize) * normalizedSpeed;
    };

    const getOpacity = (speed) => {
      const minOpacity = 0.25;
      const maxOpacity = 0.7;
      const maxSpeed = 80;
      const normalizedSpeed = Math.min(speed / maxSpeed, 1);
      return minOpacity + (maxOpacity - minOpacity) * normalizedSpeed;
    };

    // Draw chalk-style number - defined before redrawNumbers to avoid TDZ error
    const drawChalkNumber = (x, y, prime, fontSize, opacity, rotation, save = true) => {
      const text = prime.toString();
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.font = `600 ${fontSize}px 'Caveat', cursive`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Draw chalk texture effect
      for (let i = 0; i < 3; i++) {
        const offsetX = (Math.random() - 0.5) * 1;
        const offsetY = (Math.random() - 0.5) * 1;
        ctx.fillStyle = `rgba(20, 20, 20, ${opacity * (0.3 + Math.random() * 0.2)})`;
        ctx.fillText(text, offsetX, offsetY);
      }
      
      ctx.fillStyle = `rgba(15, 15, 15, ${opacity})`;
      ctx.fillText(text, 0, 0);
      
      ctx.restore();

      if (save) {
        numbersRef.current.push({ x, y, prime, fontSize, opacity, rotation });
      }
    };

    const redrawNumbers = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      numbersRef.current.forEach(num => {
        drawChalkNumber(num.x, num.y, num.prime, num.fontSize, num.opacity, num.rotation, false);
      });
    };
    
    const resizeCanvas = () => {
      const docHeight = getDocHeight();
      const needsResize = canvas.width !== window.innerWidth || docHeight > canvasHeight.current;
      
      if (needsResize) {
        canvas.width = window.innerWidth;
        canvas.height = docHeight;
        canvasHeight.current = docHeight;
        redrawNumbers();
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Check for height changes
    const heightCheck = setInterval(() => {
      const docHeight = getDocHeight();
      if (docHeight > canvasHeight.current) {
        canvas.height = docHeight;
        canvasHeight.current = docHeight;
        redrawNumbers();
      }
    }, 300);

    // Fade out erase animation
    const eraseAnimation = () => {
      if (!isErasing.current) return;
      
      let opacity = 1;
      const fadeSpeed = 0.04;
      
      const animate = () => {
        if (!isErasing.current || opacity <= 0) {
          isErasing.current = false;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          numbersRef.current = [];
          return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        numbersRef.current.forEach(num => {
          const text = num.prime.toString();
          ctx.save();
          ctx.translate(num.x, num.y);
          ctx.rotate(num.rotation);
          ctx.font = `600 ${num.fontSize}px 'Caveat', cursive`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = `rgba(15, 15, 15, ${num.opacity * opacity})`;
          ctx.fillText(text, 0, 0);
          ctx.restore();
        });

        opacity -= fadeSpeed;
        requestAnimationFrame(animate);
      };

      animate();
    };

    let lastDrawTime = 0;
    const minDrawInterval = 15;

    const handleMouseMove = (e) => {
      if (isErasing.current) return;
      
      const currentTime = Date.now();
      const timeDelta = currentTime - lastTime.current;
      
      // Get canvas position relative to the page
      const canvasRect = canvas.getBoundingClientRect();
      
      // Calculate position relative to document, accounting for canvas position
      const x = e.clientX;
      const y = e.pageY; // Use pageY instead of clientY + scrollY for accuracy
      
      if (timeDelta > 0) {
        const dx = x - lastPos.current.x;
        const dy = y - lastPos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const speed = distance / timeDelta * 10;
        
        if (currentTime - lastDrawTime > minDrawInterval && distance > 2) {
          const prime = getPrimeFromSpeed(speed);
          const fontSize = getFontSize(speed);
          const opacity = getOpacity(speed);
          const rotation = (Math.random() - 0.5) * 0.5;
          
          drawChalkNumber(x, y, prime, fontSize, opacity, rotation, true);
          lastDrawTime = currentTime;
        }
      }
      
      lastPos.current = { x, y };
      lastTime.current = currentTime;
    };

    const handleClick = (e) => {
      if (e.button === 0 && !isErasing.current) {
        isErasing.current = true;
        eraseAnimation();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(heightCheck);
    };
  }, [enabled, generatePrimes]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="mouse-trail-canvas"
    />
  );
};

export default MouseTrail;