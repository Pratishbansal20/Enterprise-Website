import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';


export default function Header() {
    const { t, toggleLanguage, language } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="site-header">
            <div className="container header-container">
                {/* Logo */}
                <Link to="/" className="logo-area" onClick={closeMenu}>
                    <img src="/logo.png" alt="Ceebee Logo" className="logo-img" />
                    <div className="logo-text">
                        <span>Ceebee</span>
                        <span className="sub">Enterprises</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <Link to="/" className="nav-link">{t('nav.home')}</Link>
                    <Link to="/catalogue" className="nav-link">{t('nav.catalogue')}</Link>
                    <Link to="/contact" className="nav-link">{t('nav.contact')}</Link>

                    <div className="nav-divider"></div>

                    <button onClick={toggleLanguage} className="lang-toggle">
                        <span className={language === 'en' ? 'active' : ''}>EN</span>
                        <span className="sep">/</span>
                        <span className={language === 'hi' ? 'active' : ''}>HI</span>
                    </button>

                    <a
                        href="https://wa.me/919431394626"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                    >
                        <Phone size={16} />
                        <span>Chat</span>
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Drawer */}
            <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
            <div className={`mobile-nav-drawer ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-content">
                    <Link to="/" onClick={closeMenu} className="mobile-nav-link">{t('nav.home')}</Link>
                    <Link to="/catalogue" onClick={closeMenu} className="mobile-nav-link">{t('nav.catalogue')}</Link>
                    <Link to="/contact" onClick={closeMenu} className="mobile-nav-link">{t('nav.contact')}</Link>

                    <hr className="mobile-nav-divider" />

                    <button onClick={() => { toggleLanguage(); closeMenu(); }} className="mobile-lang-btn">
                        Switch to {language === 'en' ? 'Hindi' : 'English'}
                    </button>

                    <a
                        href="https://wa.me/919431394626"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary w-full justify-center"
                    >
                        <Phone size={18} />
                        Start Chat
                    </a>
                </div>
            </div>

            <style>{`
            .site-header {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(12px);
                position: sticky;
                top: 0;
                z-index: 100;
                border-bottom: 1px solid var(--border-color);
                height: var(--header-height);
            }

            .header-container {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .logo-area {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .logo-img {
                height: 40px;
                width: auto;
            }

            .logo-text {
                font-family: var(--font-serif);
                font-size: 1.4rem;
                font-weight: 700;
                color: var(--primary-color);
                letter-spacing: -0.5px;
                display: flex;
                flex-direction: column;
                line-height: 1;
            }

            .logo-text .sub {
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: var(--secondary-color);
                font-family: var(--font-sans);
                font-weight: 600;
            }

            @media (min-width: 1024px) {
                .logo-text { font-size: 1.8rem; }
            }

            .desktop-nav {
                display: flex;
                align-items: center;
                gap: 2rem;
            }
            @media (max-width: 768px) {
                .desktop-nav { display: none; }
                .mobile-nav-drawer { display: block; }
            }
            @media (min-width: 769px) {
                .mobile-nav-drawer { display: none !important; }
                .mobile-menu-btn { display: none; }
            }

            .desktop-nav {
                display: flex;
                align-items: center;
                gap: 2rem;
            }

            .nav-link {
                font-weight: 500;
                color: var(--primary-color);
                font-size: 0.95rem;
                position: relative;
            }

            .nav-link:hover {
                color: var(--secondary-color);
            }

            .nav-link::after {
                content: '';
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 0;
                height: 2px;
                background: var(--secondary-color);
                transition: width 0.3s ease;
            }

            .nav-link:hover::after {
                width: 100%;
            }

            .nav-divider {
                width: 1px;
                height: 24px;
                background-color: var(--border-color);
            }

            .lang-toggle {
                background: none;
                border: none;
                font-weight: 600;
                color: var(--primary-color);
                cursor: pointer;
                display: flex;
                gap: 4px;
                font-size: 0.9rem;
            }

            .lang-toggle span {
                opacity: 0.5;
                transition: opacity 0.2s;
            }

            .lang-toggle span.active {
                opacity: 1;
                color: var(--secondary-color);
            }

            .mobile-menu-btn {
                display: none;
                background: none;
                border: none;
                color: var(--primary-color);
                cursor: pointer;
                padding: 4px;
            }

            /* Mobile Menu Styles */
            .mobile-nav-overlay {
                position: fixed;
                inset: 0;
                background: rgba(15, 23, 42, 0.4);
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s;
                z-index: 98;
                top: var(--header-height);
            }
            .mobile-nav-overlay.open {
                opacity: 1;
                pointer-events: auto;
            }

            .mobile-nav-drawer {
                position: fixed;
                top: var(--header-height);
                left: 0;
                right: 0;
                background: white;
                padding: 2rem;
                transform: translateY(-100%);
                transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: 99;
                border-bottom: 1px solid var(--border-color);
                box-shadow: var(--shadow-lg);
            }
            .mobile-nav-drawer.open {
                transform: translateY(0);
            }

            .mobile-nav-content {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            .mobile-nav-link {
                font-size: 1.25rem;
                font-weight: 600;
                color: var(--primary-color);
                padding: 0.5rem 0;
            }

            .mobile-nav-divider {
                border: 0;
                border-top: 1px solid var(--border-light);
            }

            @media (max-width: 768px) {
                .desktop-nav { display: none; }
                .mobile-menu-btn { display: block; }
            }
            `}</style>
        </header>
    );
}
