export default function Footer() {
  return (
    <footer className="footer light-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Dhivya Shanmugavel. All rights reserved.</p>
        <div className="social-links-footer">
          <a href="https://github.com/S-dhivya507" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://in.linkedin.com/in/dhivya07" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}
