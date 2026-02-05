import { useState } from "react";
import "./css/HeaderComponent.css";
import { Link } from "react-router-dom";

function HeaderComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <div className="logo-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                            <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="logo-text">Mateo Castro</span>
                </Link>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        ) : (
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        )}
                    </svg>
                </button>

                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/#about" onClick={closeMenu}>About</Link></li>
                        <li><Link to="/#skills" onClick={closeMenu}>Skills</Link></li>
                        <li><Link to="/#projects" onClick={closeMenu}>Project</Link></li>
                        <li>
                            <Link to="/contact" className="btn-contact-mobile" onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Link to="/contact" className="btn-contact desktop-only">
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