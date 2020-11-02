import { ReactComponent as RightArrow } from '../../assets/arrow-right.svg';
import Card from '../Card/Card';

import './Banner.style.css';

import img1 from '../../assets/curology-min.png';
import img2 from '../../assets/yourspace-min.png';
import img3 from '../../assets/lumin-min.png';

const caseStudies = [
  {
    id: 1,
    subtitle: 'Curology',
    title: 'A custom formula for your skin’s unique needs',
    img: img1,
  },
  {
    id: 2,
    subtitle: 'Yourspace',
    title: 'Open space floor plans for you next venture',
    img: img2,
  },
  {
    id: 3,
    subtitle: 'Lumin',
    title: 'For your best look ever',
    img: img3,
  },
];

const Banner = () => {
  return (
    <section className='banner'>
      <div className='banner-header'>
        <div className='logo'>
          <a href='home'>Logo _</a>
        </div>
        <div className='nav-menu'>
          <span></span>
          <span></span>
          <span></span>
          <div className='tooltiptext'>menu</div>
        </div>
      </div>
      <div className='banner-main'>
        <div className='main-heading'>
          <div className='line'>
            <span>Creating unique Web is</span>
          </div>
          <div className='line'>
            <span>what i do.</span>
          </div>
        </div>
        <div className='main-link'>
          <a href='about'>Read more about me</a>
          <RightArrow />
        </div>
      </div>
      <div className='banner-footer'>
        {caseStudies.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
