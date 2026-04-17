import profileImg from './img_profile.jpeg';

export default function About() {
  return (
    <section id="about" className="about glass-section">
      <div className="container">
        <h2 className="section-title gradient-text text-center">About Me</h2>
        <div className="about-content">
          <div className="about-text glass-panel" style={{ padding: '40px' }}>

            <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.9' }}>
              Hi, I'm <strong style={{ color: 'white' }}>Dhivya Shanmugavel</strong> — a passionate Full-Stack Developer who believes that great software isn't just written, it's crafted. I love turning complex problems into clean, elegant, and user-friendly web experiences.
            </p>

            <p className="text-muted" style={{ marginTop: '18px', lineHeight: '1.9' }}>
              I bring a strong foundation in both frontend and backend development — from building responsive, pixel-perfect interfaces to designing robust server-side logic and RESTful APIs. I don't just write code that works; I write code that is <strong style={{ color: 'white' }}>readable, scalable, and maintainable</strong>.
            </p>

            <p className="text-muted" style={{ marginTop: '18px', lineHeight: '1.9' }}>
              I hold certifications in <strong style={{ color: 'var(--neon-cyan)' }}>Cloud Computing</strong> and <strong style={{ color: 'var(--neon-cyan)' }}>Social Networks</strong>, and I am always growing — whether that means picking up a new framework, diving into system design, or refining my problem-solving skills. Learning is not something I do when I have to; <strong style={{ color: 'white' }}>it's something I genuinely enjoy</strong>.
            </p>

            <p className="text-muted" style={{ marginTop: '18px', lineHeight: '1.9' }}>
              What sets me apart is my attitude — I take ownership, communicate proactively, and deliver with care. I'm the kind of developer who asks <em style={{ color: 'rgba(255,255,255,0.8)' }}>"why"</em> before writing a single line, because the best solutions start with the right questions. I'm ready to bring that energy, focus, and dedication to a team that values quality and impact.
            </p>

            <div className="about-stats" style={{ marginTop: '35px' }}>
              <div className="stat glass-panel">
                <h3>15+</h3>
                <p className="small-text text-muted">Projects Built</p>
              </div>
              <div className="stat glass-panel">
                <h3>2</h3>
                <p className="small-text text-muted">Certifications</p>
              </div>
              <div className="stat glass-panel">
                <h3>∞</h3>
                <p className="small-text text-muted">Curiosity & Drive</p>
              </div>
            </div>
          </div>
          <div className="about-image glass-panel" style={{ padding: '10px' }}>
            <img src={profileImg} alt="Dhivya Shanmugavel" className="profile-img jevelin-profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

