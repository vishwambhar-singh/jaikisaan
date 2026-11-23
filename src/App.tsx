import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="/city-selector" element={<CitySelectorPage />} />
          <Route path="/city-architecture" element={<CitySelectorPage />} />
          <Route path="/city-spec" element={<CitySelectorPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </CityProvider>
  );
};

export default App;
