import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    const { language } = useLanguage();

    return (
        <div className="contact-page">
            <div className="container py-16">
                <div className="text-center mb-16">
                    <h1 className="section-title">
                        {language === 'hi' ? 'संपर्क करें' : 'Get in Touch'}
                    </h1>
                    <p className="section-subtitle-text">
                        {language === 'hi'
                            ? 'कोई सवाल है? हमें आपकी मदद करने में खुशी होगी।'
                            : 'Have a question? We\'d love to hear from you.'}
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-cards">
                        <div className="contact-card">
                            <div className="card-icon">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="card-heading">{language === 'hi' ? 'पता' : 'Address'}</h3>
                                <p className="card-text">
                                    Bajrangi Chowk,<br />
                                    Hazaribag, Jharkhand 825301
                                </p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="card-icon">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="card-heading">{language === 'hi' ? 'फ़ोन' : 'Phone'}</h3>
                                <p className="card-text">+91 94313 94626</p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="card-icon">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="card-heading">{language === 'hi' ? 'ईमेल' : 'Email'}</h3>
                                <p className="card-text">satish.hzb@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="card-icon">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="card-heading">{language === 'hi' ? 'काम करने के घंटे' : 'Business Hours'}</h3>
                                <p className="card-text">
                                    Tue - Sun: 09:30 AM - 09:30 PM<br />
                                    Mon: Closed
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="map-container">
                        <iframe
                            src="https://maps.google.com/maps?q=Cee%20Bee%20Enterprises%20Hazaribag&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, position: 'absolute', inset: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Office Location"
                        ></iframe>
                    </div>
                </div>
            </div>

            <style>{`
                .py-16 { padding: 4rem 0; }
                .mb-16 { margin-bottom: 4rem; }

                .section-subtitle-text {
                    font-size: 1.25rem;
                    color: var(--text-medium);
                    max-width: 600px;
                    margin: 0 auto;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                }

                @media (min-width: 768px) {
                    .contact-grid {
                        grid-template-columns: 1fr 1fr;
                        align-items: start;
                    }
                }

                .contact-cards {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .contact-card {
                    background: white;
                    padding: 2rem;
                    border-radius: var(--radius-md);
                    box-shadow: var(--shadow-sm);
                    border: 1px solid var(--border-light);
                    display: flex;
                    align-items: flex-start;
                    gap: 1.5rem;
                    transition: var(--transition);
                }

                .contact-card:hover {
                    box-shadow: var(--shadow-md);
                    transform: translateY(-2px);
                    border-color: var(--secondary-color);
                }

                .card-icon {
                    padding: 12px;
                    background-color: #eff6ff; /* blue-50 */
                    color: var(--primary-color);
                    border-radius: 50%;
                }

                .card-heading {
                    font-weight: 700;
                    font-size: 1.1rem;
                    margin-bottom: 0.5rem;
                    color: var(--primary-color);
                }

                .card-text {
                    color: var(--text-medium);
                    line-height: 1.6;
                }

                .map-container {
                    background-color: var(--bg-body);
                    border-radius: var(--radius-md);
                    overflow: hidden;
                    min-height: 500px;
                    position: relative;
                    border: 1px solid var(--border-color);
                }
            `}</style>
        </div>
    );
};

export default Contact;
