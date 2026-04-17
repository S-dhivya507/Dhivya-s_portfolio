export default function Contact() {
  return (
    <section id="contact" className="contact glass-section">
      <div className="container">
        <h2 className="section-title gradient-text text-center">Let's Connect</h2>
        <p className="contact-subtitle text-muted text-center" style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
          I'm open to internship opportunities, entry-level positions, and collaboration! 
          Let's create something amazing together.
        </p>
        <div className="contact-content glass-panel" style={{ padding: '40px' }}>
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-envelope jevelin-icon-sm"></i>
              <div>
                <h4 className="text-main">Email</h4>
                <p className="text-muted small-text">dhivyashanmugavel26@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone jevelin-icon-sm"></i>
              <div>
                <h4 className="text-main">Phone</h4>
                <p className="text-muted small-text">+91 9080365735</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt jevelin-icon-sm"></i>
              <div>
                <h4 className="text-main">Location</h4>
                <p className="text-muted small-text">Vellore, India</p>
              </div>
            </div>
          </div>
          <form className="contact-form light-form" action="mailto:dhivyashanmugavel26@gmail.com" method="post" encType="text/plain">
            <input type="text" name="Name" placeholder="Your Name" required />
            <input type="email" name="Email" placeholder="Your Email" required />
            <textarea name="Message" placeholder="Your Message" rows="5" required></textarea>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '10px' }}>
              <button type="submit" className="jevelin-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
