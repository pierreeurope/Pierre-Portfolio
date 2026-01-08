import React, { useEffect, useRef, useState } from 'react';
import './Timeline.css';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((part, index) => {
        if (typeof part === 'object' && part.type) {
          if (part.type === 'link') {
            return (
              <a key={index} href={part.href} target="_blank" rel="noopener noreferrer" className="timeline-link">
                {part.text}
              </a>
            );
          }
          return (
            <span key={index} className={part.type === 'highlight' ? 'highlight' : 'highlight-accent'}>
              {part.text}
            </span>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      });
    }
    return description;
  };

  const timelineItems = [
    {
      year: '2016',
      age: '16',
      title: 'Engineering School',
      role: 'Aeronautics Student',
      location: 'ESTACA, France',
      description: [
        'I joined engineering school with dreams of building airplanes and working in aerospace. The curriculum was very rigorous, especially in math and physics, but also included systems engineering, simulation work. But somewhere along the way, I discovered something unexpected: I fell completely in love with ',
        { type: 'accent', text: 'programming' },
        '. Writing code to solve complex problems felt like a superpower, and I knew this was just the beginning of a different kind of journey.'
      ],
      icon: '✈️',
      image: null,
    },
    {
      year: '2019-2020',
      age: '19',
      title: 'Gap Year at European Central Bank',
      role: 'Data Scientist',
      location: 'Frankfurt, Germany',
      description: [
        'This is where everything clicked. Working at the ECB, I delivered ',
        { type: 'accent', text: 'cloud-based data services on AWS' },
        ' and discovered the magic of automation. I containerized workflows with ',
        { type: 'accent', text: 'Kubernetes' },
        ', built ',
        { type: 'accent', text: 'CI/CD pipelines' },
        ', and watched deployment frequency increase dramatically. For the first time, I truly understood what it means to be a ',
        { type: 'accent', text: 'software engineer' },
        ', so not just writing code, but building systems that scale, automate, and deliver real value. I loved every minute of it.'
      ],
      icon: '🏦',
      image: null,
    },
    {
      year: '2021-2022',
      age: '21',
      title: 'Double Degree',
      role: 'Master\'s Student',
      location: 'University of Amsterdam, Netherlands',
      description: [
        'Back from Germany, I knew exactly what I wanted: to go deeper into ',
        { type: 'accent', text: 'data science' },
        ' and ',
        { type: 'accent', text: 'machine learning' },
        '. I pursued a double degree at the University of Amsterdam, graduating as both an ',
        { type: 'accent', text: 'engineer' },
        ' (from the french school) and a ',
        { type: 'accent', text: 'Master of Data Science' },
        '. I built end-to-end ML pipelines for time series and computer vision, learning the full lifecycle from data preparation to deployment. This was the foundation I needed for what came next.'
      ],
      icon: '🎓',
      image: null,
    },
    {
      year: '2022-2025',
      age: '21',
      title: 'Founded Meteory',
      role: 'Co-Founder & CTO',
      location: 'Amsterdam',
      description: [
        'While still finishing my degree, I co-founded Meteory. As CTO, I defined the ',
        { type: 'accent', text: 'technical vision and architecture' },
        ' from the ground up. I designed and built ',
        { type: 'accent', text: 'data pipelines' },
        ' that process massive amounts of data daily, created ',
        { type: 'accent', text: 'high-performance APIs' },
        ' with lightning-fast response times, and implemented the monitoring and reliability systems that keep everything running smoothly. We raised funding (~€1M), partnered with public sector stakeholders, and delivered production systems to real users. Building a company from scratch taught me more than any classroom ever could.'
      ],
      icon: '🚀',
      image: null,
      website: { label: 'Visit Meteory', url: 'https://meteory.eu/en' },
    },
    {
      year: '2024-2025',
      age: '22',
      title: 'Founded MapHub',
      role: 'Co-Founder & CTO',
      location: 'Amsterdam',
      description: [
        'Building on our user base from Meteory, we launched MapHub, a ',
        { type: 'accent', text: 'geospatial data platform' },
        ' with vector and raster APIs. I architected the system for ',
        { type: 'accent', text: 'large dataset delivery' },
        ', implementing advanced caching and compression strategies. We deployed across multiple production environments with public sector partners, building ',
        { type: 'accent', text: 'multi-tenant architecture' },
        ' that serves diverse stakeholders. I am incredibly proud of what we have built and the impact we have had but the growth was not fast enough to justify more funding.'
      ],
      icon: '🗺️',
      image: null,
      website: { label: 'Visit MapHub', url: 'https://www.maphub.co/' },
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="timeline-container" ref={timelineRef}>
      <div className="timeline-line">
        <div className="timeline-line-glow"></div>
      </div>
      {timelineItems.map((item, index) => (
        <div
          key={index}
          className={`timeline-item ${visibleItems.includes(index) ? 'visible' : ''}`}
          data-index={index}
          style={{ '--item-index': index }}
        >
          <div className="timeline-marker">
            <div className="marker-dot"></div>
          </div>
          <div className="timeline-content">
            <div className="content-ornament top-left"></div>
            <div className="content-ornament top-right"></div>
            <div className="content-ornament bottom-left"></div>
            <div className="content-ornament bottom-right"></div>
            <div className="timeline-header">
              <div className="timeline-year">{item.year}</div>
              <div className="year-decoration"></div>
            </div>
            <div className="timeline-age">Age {item.age}</div>
            <h3 className="timeline-title">{item.title}</h3>
            {item.role && <div className="timeline-role">{item.role}</div>}
            <div className="timeline-location">{item.location}</div>
            <p className="timeline-description">{renderDescription(item.description)}</p>
            {item.website && (
              <a 
                href={item.website.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="timeline-website-btn"
              >
                {item.website.label} →
              </a>
            )}
            {item.image && (
              <div className="timeline-image-placeholder">
                <span>📷</span>
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="timeline-end">
        <div className="end-ornament">
          <span className="end-line"></span>
          <span className="end-text">To be continued</span>
          <span className="end-line"></span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;