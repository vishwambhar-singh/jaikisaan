import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CityProvider } from './context/CityContext';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Projects from './pages/Projects';
import CaseStudy from './pages/CaseStudy';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import CitySelectorPage from './pages/CitySelectorPage';

const App: React.FC = () => {
  return (
    <CityProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Home />} />
          <Route path="/feasibility" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="/city-selector" element={<CitySelectorPage />} />
          <Route path="/city-architecture" element={<CitySelectorPage />} />
          <Route path="/city-spec" element={<CitySelectorPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

          {/* Legacy & Alternative URL Aliases to prevent 404s */}
          <Route path="/services" element={<Navigate to="/solutions" replace />} />
          <Route path="/services/*" element={<Navigate to="/solutions" replace />} />
          <Route path="/faqs" element={<Navigate to="/solutions" replace />} />
          <Route path="/faq" element={<Navigate to="/solutions" replace />} />
          <Route path="/careers" element={<Navigate to="/about" replace />} />
          <Route path="/career" element={<Navigate to="/about" replace />} />
          <Route path="/founders" element={<Navigate to="/about" replace />} />
          <Route path="/founder" element={<Navigate to="/about" replace />} />
          <Route path="/rooftop" element={<Navigate to="/solutions" replace />} />
          <Route path="/utility" element={<Navigate to="/solutions" replace />} />
          <Route path="/transmission" element={<Navigate to="/solutions" replace />} />
          <Route path="/ev-charging" element={<Navigate to="/solutions" replace />} />
          <Route path="/street-lights" element={<Navigate to="/solutions" replace />} />
          <Route path="/case-study" element={<Navigate to="/projects/vikas-cold-storage" replace />} />
          <Route path="/portfolio" element={<Navigate to="/projects" replace />} />

          {/* Catch-all: gracefully redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </CityProvider>
  );
};

export default App;
