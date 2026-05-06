import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import productsData from '../data/products.json';
import { ArrowLeft, MessageCircle, Check, Tag, ShieldCheck } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const { language, t } = useLanguage();

    // Find product by ID
    const product = productsData.find(p => p.id === id);

    if (!product) {
        return <Navigate to="/catalogue" replace />;
    }

    const description = product.description || product.name;
    const whatsappMessage = `Hi, I am interested in ${product.name} (Code: ${product.code || 'N/A'}). Can you please provide more details?`;
    const whatsappUrl = `https://wa.me/919431394626?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="product-detail-page">
            {/* Header / Nav */}
            <div className="detail-nav">
                <div className="container py-6">
                    <Link to="/catalogue" className="back-link">
                        <ArrowLeft size={18} />
                        {language === 'hi' ? 'वापस कैटलॉग में' : 'Back to Catalogue'}
                    </Link>
                </div>
            </div>

            <div className="container py-12">
                <div className="detail-layout">

                    {/* Left: Main Info */}
                    <div className="detail-main">
                        <div className="mb-6">
                            <span className="brand-badge">
                                <Tag size={12} />
                                {product.brand || 'Premium Brand'}
                            </span>
                            <h1 className="product-title">
                                {product.name}
                            </h1>
                            <div className="product-tags">
                                <span className="tag-category">
                                    {product.category}
                                </span>
                                {product.code && product.code !== 'N/A' && (
                                    <span className="tag-code">
                                        Code: {product.code}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="product-description">
                            <p>{description}</p>
                            <p>
                                Experience top-tier quality with our {product.category.toLowerCase()} collection.
                                Designed for durability and aesthetics, perfectly suited for modern interiors.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="detail-actions">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-btn-large"
                            >
                                <MessageCircle size={24} />
                                <span>
                                    {language === 'hi' ? 'व्हाट्सएप पर पूछताछ करें' : 'Get Best Price on WhatsApp'}
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Specs Box */}
                    <div className="specs-sidebar">
                        <div className="specs-box">
                            <h3 className="specs-title">
                                <ShieldCheck size={20} className="text-secondary" />
                                Specifications
                            </h3>

                            <div className="specs-list">
                                <div className="spec-item">
                                    <span className="spec-label">Stock Status</span>
                                    <span className="spec-value stock-in">
                                        <Check size={16} /> In Stock
                                    </span>
                                </div>

                                <div className="spec-divider"></div>

                                <div className="spec-item">
                                    <span className="spec-label">Unit</span>
                                    <span className="spec-value">{product.unit || 'Standard'}</span>
                                </div>

                                <div className="spec-divider"></div>

                                <div className="spec-item">
                                    <span className="spec-label">Size / Dimensions</span>
                                    <span className="spec-value">{product.size || 'Standard'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .product-detail-page {
                    background-color: white;
                    min-height: 100vh;
                }

                .detail-nav {
                    border-bottom: 1px solid var(--border-light);
                }

                .py-6 { padding: 1.5rem 0; }
                .py-12 { padding: 3rem 0; }

                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--text-medium);
                    font-weight: 500;
                    transition: var(--transition);
                }

                .back-link:hover {
                    color: var(--primary-color);
                    transform: translateX(-4px);
                }

                .detail-layout {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                }

                @media (min-width: 768px) {
                    .detail-layout {
                        flex-direction: row;
                        align-items: flex-start;
                        gap: 4rem;
                    }
                }

                .detail-main {
                    flex: 1;
                }

                .brand-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 4px 12px;
                    background-color: #fefce8;
                    color: #b45309;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    border-radius: 6px;
                    margin-bottom: 1rem;
                    border: 1px solid #fef3c7;
                }

                .product-title {
                    font-size: 2.5rem;
                    font-family: var(--font-serif);
                    font-weight: 700;
                    color: var(--primary-color);
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                }

                .product-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                    margin-bottom: 2rem;
                }

                .tag-category {
                    padding: 4px 12px;
                    background-color: var(--bg-body);
                    color: var(--text-medium);
                    border-radius: 20px;
                    font-size: 0.85rem;
                    font-weight: 500;
                }

                .tag-code {
                    padding: 4px 12px;
                    background-color: var(--bg-body);
                    color: var(--text-light);
                    border-radius: 20px;
                    font-size: 0.85rem;
                    font-family: monospace;
                }

                .product-description {
                    font-size: 1.1rem;
                    color: var(--text-medium);
                    line-height: 1.7;
                    margin-bottom: 2.5rem;
                }

                .product-description p {
                    margin-bottom: 1rem;
                }

                .whatsapp-btn-large {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    background-color: #25D366;
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: var(--radius-full);
                    font-weight: 600;
                    font-size: 1.1rem;
                    transition: var(--transition);
                    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
                }

                .whatsapp-btn-large:hover {
                    box-shadow: 0 8px 16px rgba(37, 211, 102, 0.4);
                    transform: translateY(-2px);
                }

                .specs-sidebar {
                    width: 100%;
                }

                @media (min-width: 768px) {
                    .specs-sidebar { width: 320px; position: sticky; top: 100px; }
                }

                .specs-box {
                    background-color: var(--bg-body);
                    padding: 2rem;
                    border-radius: var(--radius-md);
                    border: 1px solid var(--border-light);
                }

                .specs-title {
                    font-weight: 700;
                    color: var(--primary-color);
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 1.1rem;
                }

                .text-secondary { color: var(--secondary-color); }

                .specs-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .spec-item {
                    display: block;
                }

                .spec-label {
                    display: block;
                    font-size: 0.75rem;
                    color: var(--text-light);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-weight: 600;
                    margin-bottom: 4px;
                }

                .spec-value {
                    display: block;
                    font-size: 1.1rem;
                    font-weight: 500;
                    color: var(--primary-color);
                }

                .stock-in {
                    color: #166534;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    background-color: #dcfce7;
                    padding: 6px 12px;
                    border-radius: 8px;
                    border: 1px solid #bbf7d0;
                    width: fit-content;
                    font-size: 0.95rem;
                }

                .spec-divider {
                    height: 1px;
                    background-color: var(--border-color);
                }
            `}</style>
        </div>
    );
};

export default ProductDetail;
