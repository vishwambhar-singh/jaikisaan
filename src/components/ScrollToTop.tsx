import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (pathname === '/calculator') {
      setTimeout(() => {
        document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return;
    }
    if (pathname === '/feasibility') {
      setTimeout(() => {
        document.getElementById('feasibility')?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return;
    }
    // Immediate scroll to top on page change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;

