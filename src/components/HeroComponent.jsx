import "./css/HeroComponent.css"
import heroImage from "../assets/foto-hero.png"

function HeroComponent() {
    return (
        <main className="hero">
            <section className="hero-container">
                <article className="hero-content">
                    <div className="badge-work">
                        <span className="badge-dot"></span>
                        OPEN TO WORK
                    </div>

                    <h1 className="hero-title">
                        Junior Web Developer<br />
                        <span className="hero-title-accent">in training.</span>
                    </h1>

                    <p className="hero-description">
                        I am a second-year Web Application Development student,
                        currently looking for a company where I can complete my professional internship.
                        I am passionate about programming and web development, and I enjoy building functional, well-structured,
                        and user-focused solutions.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary">View Projects</button>
                        <button className="btn btn-secondary">Contact for Internship</button>
                    </div>

                    <div className="hero-tech">
                        <span className="hero-tech-label">Currently learning:</span>
                        <div className="hero-tech-tags">
                            <span className="tech-tag"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="logo javascript" /></span>
                            <span className="tech-tag"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="logo typescript" /></span>
                            <span className="tech-tag"><img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" alt="logo spring" /></span>
                            <span className="tech-tag tech-tag-react"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="logo react" /></span>
                        </div>
                    </div>
                </article>
                <article className="hero-visual">
                    <div className="hero-card-wrapper">
                        {/* Main Image Card */}
                        <div className="hero-card">
                            <img
                                alt="Modern laptop displaying code in a clean workspace"
                                className="hero-image"
                                src={heroImage}
                            />

                            {/* Glass Overlay at bottom */}
                            <div className="hero-card-overlay">
                                <div className="hero-card-badge-inline">
                                    <div className="badge-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div className="badge-text">
                                        <div className="badge-title">Clean Code</div>
                                        <div className="badge-subtitle">Optimized & Scalable</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Back Card */}
                        <div className="hero-card-decoration"></div>
                    </div>
                </article>
            </section>
        </main>
    )
}
export default HeroComponent;