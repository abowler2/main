import Swiper from 'swiper';

let mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
});


function Drag() {
  return(
    <Drag className="grid-container">
      <div className="column-24 leader-3">
        <div className="column-4 pre-2">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
            <div class="swiper-slide">Slide 10</div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        </div>        
      </div>  
    </Drag>
  );
};

export default Drag;
