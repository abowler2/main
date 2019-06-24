import Swiper from 'swiper';
import '../../node_modules/swiper/dist/css/swiper.min.css';

let swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function Drag() {
  return (
    <div className="grid-container">
      <div className="column-24">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">Slide 1</div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
            <div className="swiper-slide">Slide 4</div>
            <div className="swiper-slide">Slide 5</div>
            <div className="swiper-slide">Slide 6</div>
            <div className="swiper-slide">Slide 7</div>
            <div className="swiper-slide">Slide 8</div>
            <div className="swiper-slide">Slide 9</div>
            <div className="swiper-slide">Slide 10</div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>         
        </div>
      </div>
    </div>
  );
};

export default Drag;
