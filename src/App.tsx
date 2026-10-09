/**
 * Number 10 Real Estate & Management
 * Main Application Component
 */

import React, { useEffect } from 'react';
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { BRAND } from './data/brand';
import { CurrencyProvider } from './context/CurrencyContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

// Layout wrapper with Header, Footer, and Mobile Bottom Bar
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F1830] font-sans">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#E6C770] text-[#0C1B3F] font-bold rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* Persistent Header */}
      <Header forceSolid={!isHomePage} />

      {/* Main Content Landmark with 200ms fade transition feel */}
      <main id="main-content" className="flex-1 transition-opacity duration-200">
        {children}
      </main>

      {/* Mobile Floating Action Bar */}
      <MobileBottomBar />

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  const RouterComponent = BRAND.routerMode === 'hash' ? HashRouter : BrowserRouter;

  return (
    <CurrencyProvider>
      <RouterComponent>
        <ScrollToTop />
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/properties/:slug" element={<PropertyDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppLayout>
      </RouterComponent>
    </CurrencyProvider>
  );
}
