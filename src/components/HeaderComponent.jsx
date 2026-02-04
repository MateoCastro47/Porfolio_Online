import "./css/HeaderComponent.css";
import { Link } from "react-router-dom";

function HeaderComponent() {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <div className="logo-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                            <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="logo-text">Mateo Castro</span>
                </Link>
                <nav className="nav">
                    <ul>
                        <li><Link to="/#about">About</Link></li>
                        <li><Link to="/#skills">Skills</Link></li>
                        <li><Link to="/#projects">Project</Link></li>
                    </ul>
                </nav>

                <Link to="/contact" className="btn-contact">
                    Contact
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </header>
    )
}
export default HeaderComponent;