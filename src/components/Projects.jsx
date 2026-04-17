import { useState, useEffect } from 'react';
import projectData from '../data.json';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [availableTags, setAvailableTags] = useState(['All']);
  const [projects, setProjects] = useState(projectData);
  const [deleteConfirm, setDeleteConfirm] = useState(null); // id of project pending confirm

  // Dynamic Tags Generation
  useEffect(() => {
    const tagsSet = new Set();
    projects.forEach(project => {
      if (project.tags) {
        project.tags.forEach(tag => tagsSet.add(tag));
      }
    });
    setAvailableTags(['All', ...Array.from(tagsSet)]);
  }, [projects]);

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    return project.tags && project.tags.includes(activeFilter);
  });

  const handleDelete = (id) => {
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    setDeleteConfirm(null);

    // Download updated data.json
    const jsonString = JSON.stringify(updated, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="projects" className="projects glass-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="text-muted">Explore my latest work and technical implementations.</p>
        </div>

        {/* Dynamically Generated Filter Buttons */}
        <div className="portfolio-filters glass-filters">
          {availableTags.map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid dynamic-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div 
                className="project-card glass-panel" 
                key={project.id || index}
                style={{ animationDelay: `${index * 0.15}s`, position: 'relative' }}
              >
                {/* Delete Button */}
                {deleteConfirm === project.id ? (
                  <div style={{
                    position: 'absolute', top: '12px', right: '12px', zIndex: 10,
                    display: 'flex', gap: '8px', alignItems: 'center',
                    background: 'rgba(255,50,50,0.15)', padding: '6px 10px',
                    borderRadius: '20px', border: '1px solid rgba(255,80,80,0.4)'
                  }}>
                    <span style={{ fontSize: '0.75rem', color: 'white' }}>Remove?</span>
                    <button onClick={() => handleDelete(project.id)} style={{
                      background: '#ff4444', border: 'none', color: 'white',
                      borderRadius: '10px', padding: '3px 10px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600
                    }}>Yes</button>
                    <button onClick={() => setDeleteConfirm(null)} style={{
                      background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white',
                      borderRadius: '10px', padding: '3px 10px', cursor: 'pointer', fontSize: '0.75rem'
                    }}>No</button>
                  </div>
                ) : (
                  <button
                    onClick={() => setDeleteConfirm(project.id)}
                    title="Remove project"
                    style={{
                      position: 'absolute', top: '12px', right: '12px', zIndex: 10,
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(255,100,100,0.7)', borderRadius: '50%',
                      width: '30px', height: '30px', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.8rem', transition: '0.3s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#ff4444'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,100,100,0.7)'}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                )}

                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-img" />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="text-muted small-text">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="glass-tag">{tag}</span>
                    ))}
                  </div>

                  <a href={project.liveLink} className="glass-btn-link" target="_blank" rel="noopener noreferrer">
                    View Live <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))
          ) : (
             <p className="text-muted text-center" style={{ gridColumn: '1 / -1' }}>
                No projects found.
             </p>
          )}
        </div>
      </div>
    </section>
  );
}
