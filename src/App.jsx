import { useEffect } from 'react';
import gsap from 'gsap';

import Banner from './components/Banner/Banner';
import BannerOverlay from './components/BannerOverlay/BannerOverlay';

function App() {
  useEffect(() => {
    gsap.to('body', { dutation: 0, css: { visibility: 'visible' } });
    const tl = gsap.timeline();

    tl.from('.line span', {
      duration: 1.8,
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
      .to('.overlay-top', {
        duration: 1.6,
        height: 0,
        ease: 'expo.inOut',
        stagger: 0.4,
      })
      .to('.overlay-bottom', {
        duration: 1.6,
        width: 0,
        ease: 'power4.out',
        delay: 0.4,
        stagger: {
          amount: 0.5,
        },
      })
      .to('.intro-overlay', {
        duration: 0,

        css: {
          display: 'none',
        },
      })
      .from('.case-image img', {
        duration: 1.5,
        scale: 1.4,
        ease: 'expo.inOut',
        delay: -1.5,
        stagger: {
          amount: 0.4,
        },
      });
  }, []);
  return (
    <>
      <BannerOverlay />
      <Banner />
    </>
  );
}

export default App;
