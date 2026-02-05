import "./css/ContactComponent.css";
import curriculumPDF from "../assets/Curriculum.pdf";

function ContactComponent() {
    return (
        <section className="contact-section-modern">
            {/* Hero Header Section */}
            <div className="contact-hero">
                <div className="contact-hero-content">
                    <div className="availability-badge">
                        <span className="badge-dot-pulse"></span>
                        AVAILABLE FOR INTERNSHIP
                    </div>
                    <h1 className="contact-hero-title">
                        Looking for a dedicated<br />
                        Junior Developer for<br />
                        your team?
                    </h1>
                    <p className="contact-hero-description">
                        Available for 6-month internships starting soon. Ready to contribute
                        clean code, enthusiasm, and rapid learning from day one.
                    </p>
                </div>
                <div className="contact-hero-action">
                    <a href={curriculumPDF} className="btn-download-cv" download="Curriculum.pdf">
                        Download CV
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Main Contact Section */}
            <div className="contact-main-wrapper">
                <div className="contact-container-modern">
                    <div className="contact-header-modern">
                        <h2>Let's Connect</h2>
                        <p>Have a question or want to discuss an opportunity? I'm just a message away.</p>
                    </div>

                    <div className="contact-content-grid">
                        {/* Quick Links Sidebar */}
                        <aside className="contact-sidebar">
                            <h3>Quick Links</h3>
                            <div className="quick-links">
                                <a href="https://www.linkedin.com/in/mateo-castro-7596b832a/" target="_blank" rel="noopener noreferrer" className="quick-link-item">
                                    <div className="quick-link-icon linkedin">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                    <div className="quick-link-text">
                                        <strong>LinkedIn</strong>
                                        <span>Connect professionally</span>
                                    </div>
                                    <svg className="quick-link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </a>

                                <a href="https://github.com/MateoCastro47" target="_blank" rel="noopener noreferrer" className="quick-link-item">
                                    <div className="quick-link-icon github">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </div>
                                    <div className="quick-link-text">
                                        <strong>GitHub</strong>
                                        <span>Check my repositories</span>
                                    </div>
                                    <svg className="quick-link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </a>

                                <a href="mailto:castrosoutomateo@gmail.com" className="quick-link-item">
                                    <div className="quick-link-icon email">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div className="quick-link-text">
                                        <strong>Email</strong>
                                        <span>castrosoutomateo@gmail.com</span>
                                    </div>
                                </a>
                            </div>

                        </aside>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <form className="contact-form-modern">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <div className="input-wrapper">
                                            <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                            <input type="text" id="name" placeholder="Mateo Castro" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <div className="input-wrapper">
                                            <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <polyline points="22,6 12,13 2,6" />
                                            </svg>
                                            <input type="email" id="email" placeholder="Email@example.com" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="6"
                                        placeholder="Hi, I'm interested in your profile..."
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-footer">
                                    <p className="form-note">Typically replies within 24 hours</p>
                                    <button type="submit" className="btn-submit">
                                        Send Message
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="22" y1="2" x2="11" y2="13" />
                                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="contact-footer">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="2" />
                                <path d="M7 12l3 3 7-7" />
                            </svg>
                            <span>Mateo Castro</span>
                        </div>
                    </div>
                    <div className="footer-right">
                        <p>Junior Web Developer · In training · © 2024</p>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default ContactComponent;
