import './Card.style.css';

const Card = (props) => {
  return (
    <div className='card' style={{ backgroundImage: `url(${props.img})` }}>
      <div className='overlay'></div>
      <div className='card-title'>{props.title}</div>
      <div className='card-subtitle'>{props.subtitle}</div>
    </div>
  );
};

export default Card;
