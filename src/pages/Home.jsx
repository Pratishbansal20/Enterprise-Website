import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Star, ShieldCheck, Award, Layers, Box, PenTool, Layout, Droplet, Hammer, Grid } from 'lucide-react';

export default function Home() {
    const { t, language } = useLanguage();

    const categories = [
        { name: 'Laminates', icon: Layers, path_suffix: 'Laminates', desc: 'Premium decorative finishes' },
        { name: 'Plywood', icon: Box, path_suffix: 'Plywood', desc: 'Structural strength' },
        { name: 'PVC Boards', icon: Droplet, path_suffix: 'PVC Boards', desc: 'Waterproof solutions' },
        { name: 'Hardware', icon: Hammer, path_suffix: 'Hardware', desc: 'Fittings & accessories' },
        { name: 'Adhesives', icon: PenTool, path_suffix: 'Adhesives', desc: 'Bonding solutions' },
        { name: 'Acrylic', icon: Layout, path_suffix: 'Acrylic', desc: 'High-gloss surfaces' },
        { name: 'Miscellaneous', icon: Grid, path_suffix: 'Miscellaneous', desc: 'Essentials & more' }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-glow"></div>

                <div className="container hero-content text-center">
                    <div className="hero-badge">
                        <span className="badge-text">SINCE 2001</span>
                    </div>
                    <h1 className="hero-title">
                        {language === 'hi' ? 'सपनों का निर्माण' : 'Building Dreams with'} <br />
                        <span className="text-highlight">
                            {language === 'hi' ? 'गुणवत्तापूर्ण सामग्री' : 'Quality Materials'}
                        </span>
                    </h1>
                    <p className="hero-description">
                        {language === 'hi'
                            ? 'हम आपके घर के लिए बेहतरीन प्लाईवुड, लैमिनेट्स और हार्डवेयर प्रदान करते हैं।'
                            : 'Your one-stop destination for premium plywood, laminates, and architectural hardware. Elevate your interiors with Ceebee.'}
                    </p>
                    <div className="hero-buttons">
                        <Link to="/catalogue" className="btn btn-primary">
                            {language === 'hi' ? 'कैटलॉग देखें' : 'View Catalogue'} <ArrowRight size={20} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline">
                            {language === 'hi' ? 'संपर्क करें' : 'Contact Us'}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Strip */}
            <div className="features-section">
                <div className="container features-grid">
                    <div className="feature-item">
                        <div className="feature-icon bg-yellow">
                            <Award size={24} />
                        </div>
                        <div>
                            <h3 className="feature-title">{t('features.quality')}</h3>
                            <p className="feature-desc">Premium grade materials.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon bg-blue">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h3 className="feature-title">{t('features.range')}</h3>
                            <p className="feature-desc">Extensive collection.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon bg-green">
                            <Star size={24} />
                        </div>
                        <div>
                            <h3 className="feature-title">{t('features.trust')}</h3>
                            <p className="feature-desc">Integrity since 2001.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="section categories-section">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">
                            Our Collections
                        </h2>
                    </div>

                    <div className="categories-grid">
                        {categories.map((cat, index) => (
                            <Link
                                key={index}
                                to={`/catalogue?category=${cat.name}`}
                                className="category-card group"
                            >
                                <div className="category-icon-wrapper">
                                    <cat.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="category-name">
                                    {cat.name}
                                </h3>
                                <p className="category-desc">
                                    {cat.desc}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section">
                <div className="container text-center">
                    <h2 className="section-title mb-8">
                        Ready to Build?
                    </h2>
                    <Link to="/catalogue" className="cta-link">
                        Browse Full Catalogue <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

            <style>{`
            .home-page {
                font-family: var(--font-sans);
            }

            /* HERO */
            .hero-section {
                background-color: var(--bg-dark);
                position: relative;
                padding: 6rem 0;
                overflow: hidden;
                color: white;
            }

            .hero-overlay {
                position: absolute;
                inset: 0;
                background: linear-gradient(135deg, var(--bg-dark) 0%, #1e293b 100%);
            }

            .hero-glow {
                position: absolute;
                top: 0;
                right: 0;
                width: 400px;
                height: 400px;
                background: rgba(202, 138, 4, 0.1);
                border-radius: 50%;
                filter: blur(80px);
            }

            .hero-content {
                position: relative;
                z-index: 10;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .hero-badge {
                display: inline-block;
                padding: 4px 16px;
                background: rgba(30, 41, 59, 0.8);
                border: 1px solid rgba(255, 255, 255, 0.1);
                color: var(--secondary-color);
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-size: 0.75rem;
                border-radius: 20px;
                margin-bottom: 2rem;
            }

            .hero-title {
                font-size: 3.5rem;
                font-family: var(--font-serif);
                font-weight: 700;
                margin-bottom: 1.5rem;
                line-height: 1.1;
                color: white;
            }

            .text-highlight {
                color: var(--secondary-color);
            }

            .hero-description {
                font-size: 1.125rem;
                color: var(--text-light);
                max-width: 600px;
                margin-bottom: 2.5rem;
                line-height: 1.6;
            }

            .hero-buttons {
                display: flex;
                gap: 1rem;
            }

            /* FEATURES */
            .features-section {
                border-bottom: 1px solid var(--border-color);
                background-color: white;
            }

            .features-grid {
                padding: 3rem 0;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 2rem;
            }

            .feature-item {
                display: flex;
                align-items: flex-start;
                gap: 1rem;
            }

            .feature-icon {
                padding: 12px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .feature-icon.bg-yellow { background-color: #fefce8; color: #ca8a04; }
            .feature-icon.bg-blue { background-color: #eff6ff; color: #1e40af; }
            .feature-icon.bg-green { background-color: #f0fdf4; color: #15803d; }

            .feature-title {
                font-weight: 700;
                font-size: 1.1rem;
                margin-bottom: 0.25rem;
                color: var(--text-dark);
            }

            .feature-desc {
                color: var(--text-light);
                font-size: 0.9rem;
            }

            /* CATEGORIES */
            .section {
                padding: 5rem 0;
            }

            .categories-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 1.5rem;
            }

            .category-card {
                background: white;
                padding: 2rem 1.5rem;
                border-radius: var(--radius-md);
                border: 1px solid var(--border-light);
                text-align: center;
                transition: var(--transition);
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .category-card:hover {
                border-color: var(--secondary-color);
                transform: translateY(-5px);
                box-shadow: var(--shadow-md);
            }

            .category-icon-wrapper {
                width: 64px;
                height: 64px;
                border-radius: 50%;
                background-color: var(--bg-body);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--text-medium);
                margin-bottom: 1rem;
                transition: var(--transition);
            }

            .category-card:hover .category-icon-wrapper {
                background-color: #fefce8; /* amber-50 */
                color: var(--secondary-color);
            }

            .category-name {
                font-size: 1.1rem;
                font-weight: 700;
                color: var(--text-dark);
                margin-bottom: 0.5rem;
                transition: var(--transition);
            }

            .category-card:hover .category-name {
                color: var(--secondary-dark);
            }

            .category-desc {
                font-size: 0.85rem;
                color: var(--text-light);
            }

            /* CTA */
            .cta-section {
                background-color: var(--bg-body);
                padding: 5rem 0;
                border-top: 1px solid var(--border-color);
            }

            .cta-link {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                color: var(--secondary-dark);
                font-weight: 700;
                font-size: 1.1rem;
                transition: var(--transition);
            }

            .cta-link:hover {
                gap: 1rem;
                color: var(--secondary-color);
            }

            @media (max-width: 900px) {
                .categories-grid { grid-template-columns: repeat(2, 1fr); }
            }

            @media (max-width: 768px) {
                .hero-title { font-size: 2.5rem; }
                .features-grid { grid-template-columns: 1fr; }
                .hero-buttons { flex-direction: column; width: 100%; }
                .btn { width: 100%; }
            }
            `}</style>
        </div>
    );
}
