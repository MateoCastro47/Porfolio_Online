import "./css/AboutComponent.css"
import aboutImage from "../assets/foto-about.jpg";
function AboutComponent() {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-image-wrapper">
                    <div className="about-image-offset"></div>
                    <img src={aboutImage} alt="Profile" className="about-profile-img" />
                </div>

                <div className="about-content">
                    <div className="section-header">
                        <span className="section-line"></span>
                        <span className="section-subtitle">WHO I AM</span>
                    </div>
                    <h2 className="about-title">
                        Hello, I'm a 2nd Year <br />
                        <span className="highlight-green">DAW student</span>
                    </h2>
                    <p className="about-description">
                        I am a second-year Web Application Development (DAW) student with a strong interest in creating clean, accessible, and user-focused web experiences. I enjoy working across both frontend and backend, continuously improving my skills through hands-on projects and practical challenges.
                        <br /><br />
                        I am currently seeking an internship where I can apply my knowledge, learn from experienced professionals, and contribute to real-world projects. I consider myself a motivated, responsible, and proactive person with a strong desire to grow as a web developer.
                    </p>
                    <div className="about-cards-grid">
                        <div className="info-card">
                            <div className="icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                            </div>
                            <h3>Education</h3>
                            <p>Mastering full-stack fundamentals</p>
                        </div>
                        <div className="info-card">
                            <div className="icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                            </div>
                            <h3>Attitude</h3>
                            <p>Proactive problem solver</p>
                        </div>
                        <div className="info-card">
                            <div className="icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                            </div>
                            <h3>Goals</h3>
                            <p>Eager to learn from mentors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutComponent;