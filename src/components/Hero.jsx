export default function Hero() {
  return (
    <section id="home" className="hero glass-hero">
      <div className="container">
        <div className="hero-content text-center">
          <div className="glass-panel main-hero-panel">
            <div className="hero-icon-glow">
              <i className="fas fa-terminal"></i>
            </div>
            
            <h2 className="greeting-text">Hello, I'm</h2>
            <h1 className="title-gradient">Dhivya Shanmugavel</h1>
            <h3 className="subtitle">Full Stack Developer</h3>
            
            <p className="description text-muted">
              I focus on building beautiful, highly-performant web experiences. 
              Eager to learn, create, and engineer impactful solutions.
            </p>
            
            <div className="hero-actions">
              <a href="#projects" className="btn-glow primary">View My Work</a>
              <a href="#contact" className="btn-glow secondary">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
