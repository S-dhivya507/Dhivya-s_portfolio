export default function Skills() {
  return (
    <section id="skills" className="skills glass-section">
      <div className="container">
        <h2 className="section-title gradient-text text-center">Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-card glass-panel">
            <div className="skill-icon jevelin-icon">
              <i className="fab fa-html5"></i>
            </div>
            <h3>Frontend</h3>
            <p className="text-muted small-text">HTML5, CSS3, JavaScript, React, TailwindCSS</p>
          </div>
          <div className="skill-card glass-panel">
            <div className="skill-icon jevelin-icon">
              <i className="fab fa-node-js"></i>
            </div>
            <h3>Backend</h3>
            <p className="text-muted small-text">Node.js, Express.js, REST APIs</p>
          </div>
          <div className="skill-card glass-panel">
            <div className="skill-icon jevelin-icon">
              <i className="fas fa-database"></i>
            </div>
            <h3>Database</h3>
            <p className="text-muted small-text">MongoDB, MySQL, PostgreSQL</p>
          </div>
          <div className="skill-card glass-panel">
            <div className="skill-icon jevelin-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Tools & Version Control</h3>
            <p className="text-muted small-text">Git, GitHub, VS Code, Postman</p>
          </div>
        </div>
      </div>
    </section>
  );
}
