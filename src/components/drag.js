import Swiper from 'swiper';

let mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
});


function Drag() {
  return(
    <div className="swiper-container">
      <div className="swiper-wrapper">

        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>

      </div>

      <div className="swiper-pagination"></div>


      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>


      <div className="swiper-scrollbar"></div>
    </div>
  );
};

export default Drag;
