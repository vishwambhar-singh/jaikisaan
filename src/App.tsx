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
import Founder from './pages/Founder';
import Partners from './pages/Partners';
import Investors from './pages/Investors';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

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
          <Route path="/founder" element={<Founder />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Legacy & Alternative URL Aliases to prevent 404s */}
          <Route path="/services" element={<Navigate to="/solutions" replace />} />
          <Route path="/services/*" element={<Navigate to="/solutions" replace />} />
          <Route path="/faqs" element={<Navigate to="/solutions" replace />} />
          <Route path="/faq" element={<Navigate to="/solutions" replace />} />
          <Route path="/career" element={<Navigate to="/careers" replace />} />
          <Route path="/founders" element={<Navigate to="/founder" replace />} />
          <Route path="/founders-message" element={<Navigate to="/founder" replace />} />
          <Route path="/impact" element={<Navigate to="/projects" replace />} />
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
