import React, { useState, useMemo } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const projects = [
    {
      title: 'Meteory Platform',
      description: 'End-to-end data platform processing 200 GB/day with automated pipelines, dataset versioning, and high-performance APIs. Built scalable architecture from ingestion to user-facing experiences.',
      technologies: ['Python', 'AWS', 'Kubernetes', 'PostgreSQL', 'FastAPI', 'Docker'],
      categories: ['SaaS', 'B2B', 'Professional', 'Geospatial'],
      metrics: [
        '200 GB/day throughput',
        'Sub-200ms API responses',
        'Public sector integration',
        '16 production deployments'
      ],
      link: 'https://meteory.eu/en',
      github: null,
      status: 'Active'
    },
    {
      title: 'MapHub Platform',
      description: 'Geospatial data platform with vector and raster access APIs. Optimized for large dataset delivery with advanced caching and compression strategies.',
      technologies: ['Python', 'TypeScript', 'AWS S3', 'PostGIS', 'React', 'CI/CD'],
      categories: ['SaaS', 'B2C', 'Professional', 'Geospatial'],
      metrics: [
        '99.9% availability',
        'Real-time data access',
        '40% cost reduction',
        'Multi-tenant architecture'
      ],
      link: 'https://www.maphub.co/',
      github: null,
      status: 'Active'
    },
    {
      title: 'ECB Cloud Data Services',
      description: 'Cloud-based data services on AWS for internal stakeholders. Standardized deployment patterns with Kubernetes and CI/CD automation.',
      technologies: ['AWS', 'Kubernetes', 'Python', 'Terraform', 'GitLab CI'],
      categories: ['Professional', 'Internal Development'],
      metrics: [
        '10x deployment frequency',
        '3,000 min/week saved',
        '18% incident reduction',
        'Standardized patterns'
      ],
      link: null,
      github: null,
      status: 'Completed'
    },
    {
      title: 'Production Planning Tools',
      description: 'VBA-based simulation tools for production planning and scenario analysis. Automated monitoring and quality indicators for operations teams.',
      technologies: ['VBA', 'Excel', 'Process Modeling'],
      categories: ['Professional', 'Internal Development'],
      metrics: [
        '20% time reduction',
        '50% cycle time improvement',
        'Automated reporting',
        'Quality indicators'
      ],
      link: null,
      github: null,
      status: 'Completed'
    },
    {
      title: 'Technology Learning Curves',
      description: 'An interactive playground for exploring data animation and visualization capabilities. Experimenting with both React and Python to create engaging visual representations of data patterns and learning curves.',
      technologies: ['TypeScript', 'React', 'Python', 'D3.js', 'Data Visualization'],
      categories: ['Personal Project', 'Data Visualization', 'Data Analytics'],
      metrics: [
        'Interactive animations',
        'React & Python dual approach',
        'Visual data exploration',
        'Open source'
      ],
      link: 'https://main.d3tjcshtnuwcpf.amplifyapp.com/',
      github: 'https://github.com/pierreeurope/technology-learning-curves',
      status: 'Active'
    },
    {
      title: 'GeoGridTrainer',
      description: 'A geography learning assistant designed to help users master the GeoGrid game and learn about countries worldwide. Features training modes, statistics tracking, and progressive difficulty to improve geographic knowledge.',
      technologies: ['TypeScript', 'React', 'Geography API', 'Local Storage'],
      categories: ['Personal Project', 'Game', 'Geography'],
      metrics: [
        'Country learning modes',
        'Progress tracking',
        'Interactive quizzes',
        'Open source'
      ],
      link: 'https://main.di9rzwkm5kwbm.amplifyapp.com/',
      github: 'https://github.com/pierreeurope/GeoGridTrainer',
      status: 'Active'
    },
    {
      title: 'EncloseHorseBreaker',
      description: 'An automatic solver for the enclose.horse puzzle game. Exploring different algorithmic approaches including brute force, heuristics, and optimization techniques to find efficient solutions to this addictive strategy game.',
      technologies: ['Python', 'Algorithms', 'Game Theory', 'Optimization'],
      categories: ['Personal Project', 'Game', 'Algorithm'],
      metrics: [
        'Multiple solving strategies',
        'Algorithm comparison',
        'Performance benchmarks',
        'Open source'
      ],
      link: 'https://enclose.horse/',
      github: 'https://github.com/pierreeurope/EncloseHorseBreaker',
      status: 'Active'
    }
  ];

  // Get all unique categories
  const allCategories = useMemo(() => {
    const cats = new Set();
    projects.forEach(p => p.categories.forEach(c => cats.add(c)));
    return Array.from(cats).sort();
  }, []);

  // Filter projects based on selected categories
  const filteredProjects = useMemo(() => {
    if (selectedCategories.length === 0) return projects;
    return projects.filter(project => 
      selectedCategories.some(cat => project.categories.includes(cat))
    );
  }, [selectedCategories, projects]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <h1 className="section-title">Portfolio Projects</h1>
        <p className="section-intro">
          A selection of projects showcasing my work in data platforms, cloud infrastructure,
          and engineering leadership. Also some fun side projects because I love to code and am very curious.
        </p>
      </section>

      <section className="projects-filters">
        <div className="filters-header">
          <h3 className="filters-title">Filter by Category</h3>
          {selectedCategories.length > 0 && (
            <button className="clear-filters" onClick={clearFilters}>
              Clear all
            </button>
          )}
        </div>
        <div className="category-tags">
          {allCategories.map(category => (
            <button
              key={category}
              className={`category-tag ${selectedCategories.includes(category) ? 'active' : ''}`}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {selectedCategories.length > 0 && (
          <p className="filter-count">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        )}
      </section>

      <section className="projects-content">
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-title-row">
                  <h2 className="project-title">{project.title}</h2>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <div className="project-categories">
                  {project.categories.map((cat, idx) => (
                    <span key={idx} className="project-category-tag">{cat}</span>
                  ))}
                </div>
                <p className="project-description">
                  {project.title === 'Meteory Platform' && (
                    <>End-to-end data platform processing <span className="highlight-accent">200 GB/day</span> with <span className="highlight">automated pipelines</span>, <span className="highlight">dataset versioning</span>, and <span className="highlight-accent">high-performance APIs</span>. Built <span className="highlight">scalable architecture</span> from ingestion to user-facing experiences.</>
                  )}
                  {project.title === 'MapHub Platform' && (
                    <>Geospatial data platform with <span className="highlight">vector and raster access APIs</span>. Optimized for <span className="highlight-accent">large dataset delivery</span> with <span className="highlight">advanced caching</span> and compression strategies.</>
                  )}
                  {project.title === 'ECB Cloud Data Services' && (
                    <>Cloud-based data services on <span className="highlight-accent">AWS</span> for internal stakeholders. Standardized deployment patterns with <span className="highlight">Kubernetes</span> and <span className="highlight">CI/CD automation</span>.</>
                  )}
                  {project.title === 'Production Planning Tools' && (
                    <>VBA-based simulation tools for <span className="highlight">production planning</span> and <span className="highlight">scenario analysis</span>. Automated monitoring and quality indicators for operations teams.</>
                  )}
                  {project.title === 'Technology Learning Curves' && (
                    <>An interactive playground for exploring <span className="highlight">data animation</span> and <span className="highlight-accent">visualization capabilities</span>. Experimenting with both <span className="highlight">React</span> and <span className="highlight">Python</span> to create engaging visual representations.</>
                  )}
                  {project.title === 'GeoGridTrainer' && (
                    <>A <span className="highlight">geography learning assistant</span> designed to help users master the GeoGrid game. Features <span className="highlight-accent">training modes</span>, statistics tracking, and progressive difficulty to improve <span className="highlight">geographic knowledge</span>.</>
                  )}
                  {project.title === 'EncloseHorseBreaker' && (
                    <>An <span className="highlight-accent">automatic solver</span> for the enclose.horse puzzle game. Exploring different <span className="highlight">algorithmic approaches</span> including brute force, heuristics, and <span className="highlight">optimization techniques</span>.</>
                  )}
                </p>
              </div>

              <div className="project-metrics">
                <h3 className="metrics-title">Key Metrics</h3>
                <ul className="metrics-list">
                  {project.metrics.map((metric, idx) => (
                    <li key={idx} className="metric-item">
                      <span className="metric-bullet"></span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                <h3 className="technologies-title">Technologies</h3>
                <div className="technologies-list">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                {project.link && (
                  <a 
                    href={project.link} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <span className="link-arrow">→</span>
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    className="project-link github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                    <span className="link-arrow">→</span>
                  </a>
                )}
                {!project.link && !project.github && (
                  <span className="project-link-disabled">
                    Internal Project
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
