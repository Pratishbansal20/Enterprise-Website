import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal, PackageX, Filter, X } from 'lucide-react';

const Catalogue = () => {
    const { language } = useLanguage();
    const [searchParams, setSearchParams] = useSearchParams();
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // -- State --
    // We'll read everything from URL, but keep local state for search input to avoid lag
    const [localSearch, setLocalSearch] = useState(searchParams.get('q') || '');

    // -- Derived Data & Extraction --
    const { filters, filteredProducts, availableAttributes } = useMemo(() => {
        // 1. Parse URL Params
        const currentCategory = searchParams.get('category') || 'All';
        const currentThickness = searchParams.getAll('thickness');
        const currentFinish = searchParams.getAll('finish');
        const searchQuery = (searchParams.get('q') || '').toLowerCase();

        // 2. Attribute Extraction Helper
        const extractAttributes = (name) => {
            const attrs = { thickness: null, finish: null };

            // Extract Thickness (e.g. 0.8MM, 1MM)
            const thickMatch = name.match(/(\d+(\.\d+)?)MM/i);
            if (thickMatch) attrs.thickness = thickMatch[0].toUpperCase();

            // Extract Finish
            const n = name.toUpperCase();
            if (n.includes('GLOSS') || n.includes('GL')) attrs.finish = 'Gloss';
            else if (n.includes('MATT') || n.includes('MT')) attrs.finish = 'Matt';
            else if (n.includes('SUEDE') || n.includes('SF')) attrs.finish = 'Suede';
            else if (n.includes('TEXTURE') || n.includes('TXT')) attrs.finish = 'Texture';
            else if (n.includes('WOODGRAIN')) attrs.finish = 'Woodgrain';

            return attrs;
        };

        const enrichedProducts = products.map(p => ({
            ...p,
            ...extractAttributes(p.name)
        }));

        // 3. Filter Logic
        const filtered = enrichedProducts.filter(p => {
            // Search
            const prodName = p.name ? p.name.toString().toLowerCase() : '';
            if (searchQuery && !prodName.includes(searchQuery) && !p.code?.toLowerCase().includes(searchQuery)) return false;

            // Category
            if (currentCategory !== 'All' && p.category !== currentCategory) return false;

            // Thickness (OR logic within group)
            if (currentThickness.length > 0 && !currentThickness.includes(p.thickness)) return false;

            // Finish (OR logic within group)
            if (currentFinish.length > 0 && !currentFinish.includes(p.finish)) return false;

            return true;
        });

        // 4. Calculate Available Options for Sidebar
        // We want to show options that exist in the *current category* (ignoring other filters for options listing to avoid disappearing menus)
        const catProducts = currentCategory === 'All' ? enrichedProducts : enrichedProducts.filter(p => p.category === currentCategory);

        const options = {
            categories: ['All', ...new Set(products.map(p => p.category))],
            thicknesses: [...new Set(catProducts.map(p => p.thickness).filter(Boolean))].sort((a, b) => parseFloat(a) - parseFloat(b)),
            finishes: [...new Set(catProducts.map(p => p.finish).filter(Boolean))].sort()
        };

        return {
            filters: {
                category: currentCategory,
                thickness: currentThickness,
                finish: currentFinish,
                search: searchQuery
            },
            filteredProducts: filtered,
            availableAttributes: options
        };
    }, [searchParams, products]);

    // -- Handlers --
    const updateFilter = (type, value) => {
        const newParams = new URLSearchParams(searchParams);

        if (type === 'search') {
            if (value) newParams.set('q', value);
            else newParams.delete('q');
            setLocalSearch(value); // Update local input immediately
        }
        else if (type === 'category') {
            if (value === 'All') newParams.delete('category');
            else newParams.set('category', value);
            // Reset other filters on category change usually makes sense, prevents stuck empty states
            newParams.delete('thickness');
            newParams.delete('finish');
        }
        else {
            // Multi-select for thickness/finish
            const current = newParams.getAll(type);
            if (current.includes(value)) {
                newParams.delete(type);
                current.filter(c => c !== value).forEach(c => newParams.append(type, c));
            } else {
                newParams.append(type, value);
            }
        }

        setSearchParams(newParams);
    };

    const clearFilters = () => {
        setSearchParams({});
        setLocalSearch('');
    };

    return (
        <div className="catalogue-page">
            {/* Header Section */}
            <div className="catalogue-header">
                <div className="header-overlay"></div>
                <div className="container relative">
                    <div className="header-content">
                        <div className="header-text">
                            <span className="subtitle">Our Collection</span>
                            <h1 className="title">
                                {language === 'hi' ? 'कैटलॉग' : 'Product Catalogue'}
                            </h1>
                        </div>

                        {/* Search Bar */}
                        <div className="search-container">
                            <div className="search-icon">
                                <Search size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder={language === 'hi' ? 'खोजें...' : 'Search items...'}
                                className="search-input"
                                value={localSearch}
                                onChange={(e) => updateFilter('search', e.target.value)}
                            />
                        </div>

                        {/* Mobile Filter Toggle */}
                        <button
                            className="mobile-filter-btn"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            <Filter size={20} />
                            <span>Filters</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container py-8 catalogue-layout">
                {/* Sidebar Filters */}
                <aside className={`filter-sidebar ${isFilterOpen ? 'open' : ''}`}>
                    <div className="sidebar-header">
                        <h3 className="sidebar-title">Filters</h3>
                        <button className="close-filters" onClick={() => setIsFilterOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    <div className="filter-group">
                        <h4 className="filter-group-title">Category</h4>
                        <div className="filter-options">
                            {availableAttributes.categories.map(cat => (
                                <label key={cat} className="filter-option">
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={filters.category === cat}
                                        onChange={() => { updateFilter('category', cat); setIsFilterOpen(false); }}
                                    />
                                    <span className="radio-custom"></span>
                                    <span className="option-label">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {availableAttributes.thicknesses.length > 0 && (
                        <div className="filter-group">
                            <h4 className="filter-group-title">Thickness</h4>
                            <div className="filter-options">
                                {availableAttributes.thicknesses.map(t => (
                                    <label key={t} className="filter-option">
                                        <input
                                            type="checkbox"
                                            checked={filters.thickness.includes(t)}
                                            onChange={() => updateFilter('thickness', t)}
                                        />
                                        <span className="checkbox-custom"></span>
                                        <span className="option-label">{t}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {availableAttributes.finishes.length > 0 && (
                        <div className="filter-group">
                            <h4 className="filter-group-title">Finish</h4>
                            <div className="filter-options">
                                {availableAttributes.finishes.map(f => (
                                    <label key={f} className="filter-option">
                                        <input
                                            type="checkbox"
                                            checked={filters.finish.includes(f)}
                                            onChange={() => updateFilter('finish', f)}
                                        />
                                        <span className="checkbox-custom"></span>
                                        <span className="option-label">{f}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    <button onClick={clearFilters} className="clear-filters-btn">
                        Clear All Filters
                    </button>
                </aside>

                {/* Overlay for mobile */}
                {isFilterOpen && <div className="sidebar-overlay" onClick={() => setIsFilterOpen(false)}></div>}

                {/* Main Content */}
                <div className="catalogue-main">
                    <div className="results-header">
                        <p className="results-count">
                            {filteredProducts.length} Items Found
                        </p>
                        <div className="active-tags">
                            {filters.category !== 'All' && <span className="tag">{filters.category}</span>}
                            {filters.thickness.map(t => <span key={t} className="tag">{t}</span>)}
                            {filters.finish.map(f => <span key={f} className="tag">{f}</span>)}
                        </div>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="products-grid">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <div className="icon-box">
                                <PackageX size={48} />
                            </div>
                            <h3 className="no-results-title">No items found</h3>
                            <button
                                onClick={clearFilters}
                                className="btn btn-outline"
                            >
                                Reset Search
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                .catalogue-page {
                    min-height: 100vh;
                    background-color: var(--bg-body);
                    padding-bottom: 5rem;
                }

                .catalogue-header {
                    background-color: var(--bg-dark);
                    position: sticky;
                    top: var(--header-height);
                    z-index: 30;
                    padding: 1.5rem 0;
                    border-bottom: 1px solid #1e293b;
                }

                .header-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                @media (min-width: 768px) {
                    .header-content {
                        flex-direction: row;
                        align-items: flex-end;
                        justify-content: space-between;
                    }
                }

                .header-text .subtitle {
                    color: var(--secondary-color);
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 0.75rem;
                    display: block;
                    margin-bottom: 0.5rem;
                }

                .header-text .title {
                    font-family: var(--font-serif);
                    font-size: 2.5rem;
                    color: white;
                    margin: 0;
                    line-height: 1.1;
                }

                .search-container {
                    position: relative;
                    width: 100%;
                    max-width: 400px;
                }

                .search-icon {
                    position: absolute;
                    left: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--text-light);
                    pointer-events: none;
                }

                .search-input {
                    width: 100%;
                    padding: 0.75rem 1rem 0.75rem 3rem;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 12px;
                    color: white;
                    font-family: var(--font-sans);
                    font-size: 0.95rem;
                    transition: var(--transition);
                }

                .search-input:focus {
                    outline: none;
                    border-color: var(--secondary-color);
                    background: rgba(255, 255, 255, 0.15);
                }

                /* Mobile Filter Btn */
                .mobile-filter-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    width: 100%;
                    padding: 12px;
                    background: var(--bg-white);
                    border: 1px solid var(--border-color);
                    border-radius: var(--radius-sm);
                    font-weight: 600;
                    color: var(--primary-color);
                    margin-top: 1rem;
                }

                @media (min-width: 1024px) {
                    .mobile-filter-btn { display: none; }
                }

                /* Layout */
                .catalogue-layout {
                    display: flex;
                    gap: 2rem;
                    align-items: flex-start;
                    position: relative;
                }

                /* Sidebar */
                .filter-sidebar {
                    width: 280px;
                    flex-shrink: 0;
                    background: white;
                    padding: 1.5rem;
                    border-radius: var(--radius-md);
                    border: 1px solid var(--border-light);
                    position: sticky;
                    top: calc(var(--header-height) + 120px);
                    max-height: calc(100vh - 140px);
                    overflow-y: auto;
                }

                .sidebar-header {
                    display: none; /* Hidden on desktop */
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 1.5rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid var(--border-light);
                }

                .sidebar-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--primary-color);
                }

                .close-filters {
                    background: none;
                    border: none;
                    color: var(--text-medium);
                }

                @media (max-width: 1023px) {
                    .filter-sidebar {
                        position: fixed;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        z-index: 100;
                        width: 300px;
                        border-radius: 0;
                        transform: translateX(-100%);
                        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    
                    .filter-sidebar.open {
                        transform: translateX(0);
                    }

                    .sidebar-header {
                        display: flex;
                    }

                    .sidebar-overlay {
                        position: fixed;
                        inset: 0;
                        background: rgba(15, 23, 42, 0.5);
                        backdrop-filter: blur(4px);
                        z-index: 99;
                    }
                }

                .filter-group {
                    margin-bottom: 2rem;
                }

                .filter-group-title {
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--text-light);
                    font-weight: 700;
                    margin-bottom: 1rem;
                }

                .filter-options {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .filter-option {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                    font-size: 0.95rem;
                    color: var(--text-dark);
                    user-select: none;
                }

                .filter-option input {
                    display: none;
                }

                /* Custom Checkbox/Radio */
                .checkbox-custom, .radio-custom {
                    width: 18px;
                    height: 18px;
                    border: 2px solid var(--border-color);
                    border-radius: 4px;
                    position: relative;
                    transition: var(--transition);
                }

                .radio-custom { border-radius: 50%; }

                .filter-option input:checked + .checkbox-custom,
                .filter-option input:checked + .radio-custom {
                    background-color: var(--secondary-color);
                    border-color: var(--secondary-color);
                }

                .filter-option input:checked + .checkbox-custom::after {
                    content: '';
                    position: absolute;
                    top: 45%;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(45deg);
                    width: 4px;
                    height: 8px;
                    border-right: 2px solid white;
                    border-bottom: 2px solid white;
                }

                .filter-option input:checked + .radio-custom::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 8px;
                    height: 8px;
                    background-color: white;
                    border-radius: 50%;
                }

                .clear-filters-btn {
                    width: 100%;
                    padding: 10px;
                    background: var(--bg-body);
                    border: 1px dashed var(--border-color);
                    color: var(--text-medium);
                    font-weight: 600;
                    border-radius: var(--radius-sm);
                    cursor: pointer;
                    transition: var(--transition);
                }

                .clear-filters-btn:hover {
                    background: #fefce8;
                    color: var(--secondary-dark);
                    border-color: var(--secondary-color);
                }

                /* Main Content */
                .catalogue-main {
                    flex: 1;
                    width: 100%;
                }

                .results-header {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid var(--border-color);
                }

                @media (min-width: 768px) {
                    .results-header {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                    }
                }

                .results-count {
                    font-weight: 600;
                    color: var(--text-dark);
                }

                .active-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .tag {
                    font-size: 0.75rem;
                    background: var(--bg-white);
                    border: 1px solid var(--border-color);
                    padding: 4px 10px;
                    border-radius: 20px;
                    color: var(--text-medium);
                    font-weight: 500;
                }

                .products-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1.5rem;
                }

                .no-results {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 4rem 0;
                    text-align: center;
                    background: white;
                    border-radius: var(--radius-md);
                    border: 1px dashed var(--border-color);
                }

                .btn-outline {
                    border: 2px solid var(--border-color);
                    background: transparent;
                    color: var(--primary-color);
                    font-weight: 600;
                    padding: 8px 20px;
                    border-radius: var(--radius-full);
                }
            `}</style>
        </div>
    );
};

export default Catalogue;
