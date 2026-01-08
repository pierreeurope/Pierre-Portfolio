import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'CTO and Engineering Management',
      description: 'Technical strategy, architecture, roadmap, hiring, mentoring, delivery process',
      skills: [
        'Technical Strategy',
        'System Architecture',
        'Roadmap Planning',
        'Team Leadership',
        'Hiring & Mentoring',
        'Delivery Process',
        'Stakeholder Management'
      ]
    },
    {
      title: 'Data Platforms',
      description: 'Pipelines, data modeling, APIs, versioning and lineage, reliability and observability',
      skills: [
        'Data Pipelines',
        'Data Modeling',
        'REST APIs',
        'Dataset Versioning',
        'Data Lineage',
        'Reliability Engineering',
        'Observability',
        'Performance Optimization'
      ]
    },
    {
      title: 'Cloud Infrastructure',
      description: 'AWS, Kubernetes, CI/CD, containerized workloads, distributed systems, cost optimization',
      skills: [
        'AWS Services',
        'Kubernetes',
        'CI/CD Pipelines',
        'Docker & Containers',
        'Distributed Systems',
        'Cost Optimization',
        'Infrastructure as Code',
        'Monitoring & Alerting'
      ]
    },
    {
      title: 'Programming Languages',
      description: 'Proficient in multiple languages for backend, frontend, and systems programming',
      skills: [
        'Python',
        'SQL',
        'TypeScript',
        'JavaScript',
        'C/C++',
        'VBA'
      ]
    }
  ];

  return (
    <div className="skills-page">
      <section className="skills-hero">
        <h1 className="section-title">Skills & Expertise</h1>
        <p className="section-intro">
          A comprehensive overview of my technical capabilities, from high-level strategy
          to hands-on implementation across data platforms, cloud infrastructure, and software engineering.
        </p>
      </section>

      <section className="skills-content">
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <h2 className="category-title">{category.title}</h2>
                <p className="category-description">{category.description}</p>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="highlights-section">
        <h2 className="subsection-title">Key Achievements</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-icon">📊</div>
            <h3 className="highlight-title">Data Processing</h3>
            <p className="highlight-text">Scaled systems to process <span className="highlight-accent">200 GB/day</span> with <span className="highlight">automated pipelines</span> and quality checks</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">⚡</div>
            <h3 className="highlight-title">Performance</h3>
            <p className="highlight-text">Achieved <span className="highlight-accent">sub-200ms</span> API responses and <span className="highlight">40% payload cost reduction</span></p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🛡️</div>
            <h3 className="highlight-title">Reliability</h3>
            <p className="highlight-text">Maintained <span className="highlight-accent">99.9%</span> service availability over <span className="highlight">24 months</span> with comprehensive monitoring</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">💰</div>
            <h3 className="highlight-title">Cost Optimization</h3>
            <p className="highlight-text">Reduced cloud spend by <span className="highlight-accent">15%</span> while maintaining <span className="highlight">throughput targets</span></p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🚀</div>
            <h3 className="highlight-title">Automation</h3>
            <p className="highlight-text">Increased deployment frequency <span className="highlight-accent">10x</span> and saved <span className="highlight">3,000 minutes/week</span> through automation</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🤝</div>
            <h3 className="highlight-title">Partnerships</h3>
            <p className="highlight-text">Managed <span className="highlight-accent">16 production deployments</span> with <span className="highlight">public sector stakeholders</span></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
