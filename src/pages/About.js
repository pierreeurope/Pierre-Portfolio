import React from 'react';
import './About.css';

const About = () => {
  const experiences = [
    {
      title: 'Co-Founder and CTO',
      company: 'Meteory and MapHub',
      location: 'Amsterdam',
      period: '2021 to Present',
      achievements: [
        'Defined technical vision and roadmap, aligning architecture with product strategy across two products',
        'Designed end-to-end platform architecture from ingestion and storage to APIs and user-facing experiences',
        'Automated data pipelines processing 200 GB/day, reducing manual operations by 40%',
        'Built dataset versioning and lineage for reproducibility and traceability',
        'Developed high-performance APIs achieving sub-200ms responses and reduced payload costs by 40%',
        'Implemented monitoring and alerting, sustaining 99.9% service availability over 24 months',
        'Reduced cloud spend by 15% while maintaining throughput targets',
        'Managed partner delivery, supporting 16 production deployments with public sector stakeholders',
        'Co-founded and helped raise €1M, linking delivery milestones to fundraising and execution plans'
      ]
    },
    {
      title: 'IT Infrastructure Specialist',
      company: 'European Central Bank',
      location: 'Frankfurt, Germany',
      period: '2019 to 2020',
      achievements: [
        'Delivered cloud-based data services on AWS for internal stakeholders',
        'Automated deployments with Kubernetes and CI/CD, saving 3,000 minutes/week of manual effort',
        'Increased deployment frequency 10x by containerizing workflows',
        'Supported production operations, reducing recurring incidents by 18%'
      ]
    },
    {
      title: 'Engineering Intern, Operations and Tooling',
      company: 'Safran Aircraft Engines',
      location: 'Villaroche, France',
      period: '2018',
      achievements: [
        'Built VBA tooling to automate monitoring and quality indicators, reducing manual reporting time by 20%',
        'Partnered with operations teams to clarify requirements and roll out improvements',
        'Modeled process flows to identify bottlenecks, contributing to cycle time improvements of 50%'
      ]
    },
    {
      title: 'Engineering Intern, Industrial Simulation',
      company: 'Thales',
      location: 'Elancourt, France',
      period: '2017',
      achievements: [
        'Developed VBA simulation tools for production planning and scenario analysis',
        'Improved macros and workflows, reducing planning time and lowering errors',
        'Documented assumptions and usage guidelines to improve maintainability'
      ]
    }
  ];

  const education = [
    {
      institution: 'University of Amsterdam',
      location: 'Netherlands',
      degree: 'Master of Science, Data Science',
      period: '2021 to 2022',
      description: 'Built end-to-end ML pipelines for time series and computer vision coursework, covering data preparation, model training, evaluation, and deployment-style packaging'
    },
    {
      institution: 'ESTACA Engineering School',
      location: 'France',
      degree: 'Engineering Degree, Aeronautics',
      period: '2016 to 2021',
      description: 'Simulation and systems engineering work applying numerical methods and software tooling to analyze complex systems and operational constraints'
    },
    {
      institution: 'Linköping University',
      location: 'Sweden',
      degree: 'Erasmus semester, Automation and Business Strategy',
      period: '2021',
      description: 'Coursework combining industrial automation concepts with product and strategy frameworks'
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1 className="section-title">My Journey</h1>
        <p className="section-intro">
          From engineering internships to co-founding a company and leading technical strategy,
          my career has been shaped by a passion for building scalable systems and solving complex problems.
        </p>
      </section>

      <section className="summary-section">
        <h2 className="subsection-title">Summary</h2>
        <div className="summary-content">
          <p>
            Engineering leader and former founder specializing in Python, data platforms, and cloud infrastructure.
            Built and scaled production systems to <strong>200 GB/day</strong> throughput, <strong>sub-200ms</strong> API performance,
            and <strong>99.9%</strong> availability, while driving <strong>40%</strong> payload cost reduction and
            <strong>16</strong> production deployments with partners.
          </p>
        </div>
      </section>

      <section className="experience-section">
        <h2 className="subsection-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-meta">
                    <span className="company">{exp.company}</span>
                    <span className="location">{exp.location}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section">
        <h2 className="subsection-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="education-institution">{edu.institution}</h3>
              <div className="education-meta">
                <span className="education-location">{edu.location}</span>
                <span className="education-period">{edu.period}</span>
              </div>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="languages-section">
        <h2 className="subsection-title">Languages</h2>
        <div className="languages-list">
          <div className="language-item">
            <span className="language-name">French</span>
            <span className="language-level">Native</span>
          </div>
          <div className="language-item">
            <span className="language-name">English</span>
            <span className="language-level">Fluent</span>
          </div>
          <div className="language-item">
            <span className="language-name">German</span>
            <span className="language-level">B2 to C1</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
