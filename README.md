# CeeBee Enterprises - Premium Retail Website

A modern, responsive, and visually striking retail website built for CeeBee Enterprises. The platform features a premium aesthetic, a dynamic product catalog, multi-language support (English & Hindi), and direct WhatsApp integration for seamless customer inquiries.

## ✨ Features

- **Premium UI/UX:** Built with a custom, semantic Vanilla CSS design system emphasizing luxury (deep slates, rich golds, modern typography, and glassmorphism).
- **Dynamic Catalogue:** Interactive product listing with real-time search, category filtering, and advanced attribute filtering (e.g., thickness, finish).
- **Multi-Language Support:** Seamlessly toggle between English and Hindi content using React Context.
- **WhatsApp Integration:** Direct floating action buttons and product-specific inquiry buttons linking straight to the business WhatsApp.
- **Responsive Layout:** fully optimized for mobile, tablet, and desktop viewing.

## 🛠️ Technology Stack

- **Framework:** React.js (via Vite)
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Styling:** Custom semantic CSS variables (No external frameworks like Tailwind/Bootstrap)

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-github-repo-url>
   ```

2. Navigate into the project directory:
   ```bash
   cd ceebee-enterprises
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application should now be running locally at `http://localhost:5173/` (or another port specified in your terminal).

## 📂 Project Structure

- `/src/components`: Reusable UI components (Header, Footer, ProductCard, Layout).
- `/src/pages`: Main application views (Home, Catalogue, ProductDetail, Contact).
- `/src/context`: React Context providers (e.g., LanguageContext).
- `/src/data`: JSON files acting as the mock database for products.
- `/src/index.css`: Global design system and semantic classes.
- `/src/translations.js`: Dictionary for English and Hindi text.

## 📄 License
This project is proprietary and built specifically for CeeBee Enterprises.
