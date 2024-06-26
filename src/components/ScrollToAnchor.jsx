import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef(null);

  useEffect(() => {
    if(location.hash){
      lastHash.current = location.hash.split('#').pop(); 
        setTimeout(() => {
      if (lastHash.current && document.getElementById(lastHash.current)) {
          document
            .getElementById(lastHash.current)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          lastHash.current = '';
        } 
        }, 100);      
      } else {
        window.scrollTo(0, 0);
      }
    
  }, [location]);

  return null;
}