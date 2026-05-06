import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
    const { language } = useLanguage();

    const message = `Hi, I am interested in ${product.name} (Code: ${product.code}). Please share price and availability.`;
    const whatsappUrl = `https://wa.me/919431394626?text=${encodeURIComponent(message)}`;

    return (
        <div className="product-card group">
            <Link to={`/product/${product.id}`} className="card-link">
                <div className="card-content">
                    <h3 className="card-title">
                        {product.name}
                    </h3>
                    <div className="card-meta">
                        <span className="meta-category">{product.category}</span>
                        <span className="meta-dot">•</span>
                        <span className="meta-size">{product.size || 'Std'}</span>
                    </div>
                </div>
            </Link>

            <div className="card-actions">
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Get Price on WhatsApp"
                    className="action-btn whatsapp"
                >
                    <MessageCircle size={16} />
                </a>

                <Link
                    to={`/product/${product.id}`}
                    className="action-btn details"
                >
                    <ArrowRight size={16} />
                </Link>
            </div>

            <style>{`
            .product-card {
                background-color: var(--bg-card);
                border-radius: var(--radius-sm);
                border: 1px solid var(--border-light);
                padding: 0.75rem 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                transition: var(--transition);
                box-shadow: var(--shadow-sm);
                position: relative;
                overflow: hidden;
            }

            .product-card:hover {
                border-color: var(--text-light);
                background-color: var(--bg-body);
                transform: translateY(-2px);
                box-shadow: var(--shadow-md);
            }

            .card-link {
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: 2px;
                text-decoration: none;
            }

            .card-content {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .card-title {
                font-size: 0.95rem;
                font-family: var(--font-sans);
                font-weight: 600;
                color: var(--primary-light);
                margin: 0;
                line-height: 1.2;
                transition: var(--transition);
            }

            .product-card:hover .card-title {
                color: var(--secondary-color);
            }

            .card-meta {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 0.75rem;
                color: var(--text-light);
            }

            .meta-category {
                font-weight: 500;
                color: var(--secondary-color);
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .meta-dot {
                opacity: 0.5;
            }

            .card-actions {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .action-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                transition: var(--transition);
            }

            .action-btn.whatsapp {
                background-color: #dcfce7;
                color: #166534;
            }

            .action-btn.whatsapp:hover {
                background-color: #25D366;
                color: white;
                transform: scale(1.1);
            }

            .action-btn.details {
                background-color: var(--border-light);
                color: var(--text-light);
            }

            .action-btn.details:hover {
                background-color: var(--primary-light);
                color: white;
            }
            `}</style>
        </div>
    );
}
