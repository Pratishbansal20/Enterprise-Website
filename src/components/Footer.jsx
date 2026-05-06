import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Phone, MapPin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t, language } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-glow"></div>

            <div className="container py-20 relative z-10">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <h3 className="brand-title">
                            Ceebee Enterprises
                        </h3>
                        <div className="brand-line"></div>
                        <p className="brand-desc">
                            {language === 'hi'
                                ? '2001 से विलासिता और गुणवत्ता। हजारीबाग में उच्च गुणवत्ता वाली निर्माण सामग्री के लिए आपका प्रमुख भागीदार।'
                                : 'Elevating spaces since 2001. Your premier partner for high-quality building materials and architectural finishes in Hazaribag.'}
                        </p>
                        <div className="social-links">
                            <a href="https://www.facebook.com/satish.bansal.3572/" target="_blank" rel="noopener noreferrer" className="social-btn group">
                                <Facebook size={20} className="icon" />
                            </a>
                            <a href="https://www.instagram.com/satish.bansal24/" target="_blank" rel="noopener noreferrer" className="social-btn group">
                                <Instagram size={20} className="icon" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="footer-nav">
                        <h4 className="footer-heading">Explore</h4>
                        <ul className="footer-links">
                            {['Home', 'Catalogue', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="footer-link">
                                        <ArrowRight size={14} className="link-icon" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-contact">
                        <h4 className="footer-heading">Get in Touch</h4>
                        <ul className="contact-list">
                            <li className="contact-item">
                                <div className="contact-icon">
                                    <MapPin size={18} />
                                </div>
                                <span className="contact-text">
                                    Bajrangi Chowk,<br />
                                    Hazaribag, Jharkhand 825301
                                </span>
                            </li>
                            <li className="contact-item">
                                <div className="contact-icon">
                                    <Phone size={18} />
                                </div>
                                <a href="tel:+919431394626" className="contact-link">
                                    +91 94313 94626
                                </a>
                            </li>
                            <li className="contact-item">
                                <div className="contact-icon">
                                    <Mail size={18} />
                                </div>
                                <a href="mailto:satish.hzb@gmail.com" className="contact-link">
                                    satish.hzb@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container bottom-bar-content">
                    <p>© {year} Ceebee Enterprises. Quality Building Materials.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <span>|</span>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
            </div>

            <style>{`
            .site-footer {
                background-color: var(--bg-dark);
                color: var(--text-light);
                border-top: 1px solid #1e293b;
                position: relative;
                overflow: hidden;
            }

            .footer-glow {
                position: absolute;
                top: -100px;
                left: 50%;
                transform: translateX(-50%);
                width: 600px;
                height: 300px;
                background: radial-gradient(circle, rgba(202, 138, 4, 0.15) 0%, transparent 70%);
                pointer-events: none;
            }

            .py-20 { padding: 5rem 0; }

            .footer-grid {
                display: grid;
                grid-template-columns: 2fr 1fr 1.5fr;
                gap: 4rem;
            }

            .brand-title {
                font-family: var(--font-serif);
                font-size: 1.75rem;
                font-weight: 700;
                color: white;
                margin-bottom: 1rem;
            }

            .brand-line {
                width: 48px;
                height: 4px;
                background-color: var(--secondary-color);
                border-radius: 2px;
                margin-bottom: 1.5rem;
            }

            .brand-desc {
                line-height: 1.7;
                margin-bottom: 2rem;
                max-width: 400px;
            }

            .social-links {
                display: flex;
                gap: 1rem;
            }

            .social-btn {
                width: 48px;
                height: 48px;
                border-radius: 12px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--text-light);
                transition: var(--transition);
            }

            .social-btn:hover {
                background: var(--bg-dark);
                border-color: var(--secondary-color);
                color: white;
                transform: translateY(-3px);
            }

            /* Navigation */
            .footer-heading {
                color: white;
                font-size: 0.85rem;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: 700;
                margin-bottom: 2rem;
                padding-bottom: 0.75rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                display: inline-block;
            }

            .footer-links {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .footer-link {
                display: flex;
                align-items: center;
                gap: 8px;
                transition: var(--transition);
                font-weight: 500;
            }

            .link-icon {
                opacity: 0;
                transform: translateX(-10px);
                transition: var(--transition);
                color: var(--secondary-color);
            }

            .footer-link:hover {
                color: var(--secondary-color);
                padding-left: 4px;
            }

            .footer-link:hover .link-icon {
                opacity: 1;
                transform: translateX(0);
            }

            /* Contact */
            .contact-list {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            .contact-item {
                display: flex;
                align-items: flex-start;
                gap: 1rem;
            }

            .contact-icon {
                width: 40px;
                height: 40px;
                border-radius: 10px;
                background: rgba(255, 255, 255, 0.05);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--secondary-color);
                flex-shrink: 0;
            }

            .contact-text, .contact-link {
                font-size: 0.95rem;
                line-height: 1.5;
                margin-top: 4px;
            }

            .contact-link:hover {
                color: white;
            }

            /* Bottom Bar */
            .footer-bottom {
                background: rgba(0, 0, 0, 0.2);
                border-top: 1px solid rgba(255, 255, 255, 0.05);
                padding: 1.5rem 0;
                font-size: 0.85rem;
            }

            .bottom-bar-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 1rem;
            }

            .footer-legal {
                display: flex;
                gap: 1.5rem;
                align-items: center;
            }

            .footer-legal a:hover {
                color: white;
            }

            @media (max-width: 900px) {
                .footer-grid {
                    grid-template-columns: 1fr;
                    gap: 3rem;
                }
                
                .footer-brand {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .bottom-bar-content {
                    flex-direction: column;
                    text-align: center;
                }
            }
            `}</style>
        </footer>
    );
};

export default Footer;
