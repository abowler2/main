import Swiper from 'swiper';
import '../../node_modules/swiper/dist/css/swiper.min.css';

let swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  slidesPerColumn: 2,
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
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/0</div>
          </div>
          <div>
            <div className="swiper-button-next"><span className="swiper-button-prev-sm">&gt;</span> <span className="swiper-button-prev-lg">&gt;</span></div>
          <div className="circle">Drag</div>
          <div className="swiper-button-prev"><span className="swiper-button-next-lg">&lt;</span> <span className="swiper-button-next-sm">&lt;</span> </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Drag;
