import './Banner.style.css';

const Banner = () => {
  return (
    <section class='banner'>
      <div class='banner-header'>
        <div class='logo'>
          <a href='home'>Logo _</a>
        </div>
        <div class='nav-menu'>
          <span class></span>
          <span class></span>
          <span class></span>
          <div class='tooltiptext'>menu</div>
        </div>
      </div>
      <div class='banner-main'>
        <div class='main-heading'>
          <div class='line'>
            <span>Creating unique Web is</span>
          </div>
          <div class='line'>
            <span>what i do.</span>
          </div>
        </div>
        <div class='main-link'>
          <a href='about'>Read more about me</a>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            class='feather feather-arrow-right'
          >
            <line x1='5' y1='12' x2='19' y2='12'></line>
            <polyline points='12 5 19 12 12 19'></polyline>
          </svg>
        </div>
      </div>
      <div class='banner-footer'>
        <div class='card'>
          <div class='overlay'></div>
          <div class='card-title'>
            A custom formula for your skin’s unique needs
          </div>
          <div class='card-subtitle'>Curology</div>
        </div>
        <div class='card2'>
          <div class='overlay'></div>
          <div class='card-title'>
            Open space floor plans for you next venture
          </div>
          <div class='card-subtitle'>Yourspace</div>
        </div>
        <div class='card3'>
          <div class='overlay'></div>
          <div class='card-title'>For your best look ever</div>
          <div class='card-subtitle'>Lumen</div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
