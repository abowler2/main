
import Swiper from 'swiper';
import '../../node_modules/swiper/dist/css/swiper.min.css';


let swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // here are the breakpoints you can alter how many sides are seen and and the margin.
  breakpoints: {
    1840: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});


const placeholder = [
  {key: 1, image: '../../static/images/placeholder/place1.jpg',
    alt: 'dragger pic'},
  {key: 2, image: '../../static/images/placeholder/place1.jpg',
    alt: 'dragger pic'},
  {key: 3, image: '../../static/images/placeholder/place1.jpg',
    alt: 'dragger pic'},
  {key: 4, image: '../../static/images/placeholder/place1.jpg',
    alt: 'dragger pic'},
  {key: 5, image: '../../static/images/placeholder/place1.jpg',
    alt: 'dragger pic'},
  {key: 6, image: '../../static/images/placeholder/place1.jpg',
    alt: 'dragger pic'},
];

function Drag() {
  return (
    <div className="grid-container">
      <div className="column-24 " >
        <div id="iesdBg" className="swiper-container leader-1 trailer-1" >
          <div className="swiper-wrapper" >
            { placeholder.map(({key, image, alt}) => <div className="swiper-slide">
              <img id="draggerpic" key={key} src={image} alt={alt} /> </div>)}
          </div>
          <div id="iesdBg" className="swiper-container leader-1 trailer-1" >
            <div className="swiper-wrapper" >
              { placeholder.map(({key, image, alt}) => <div className="swiper-slide">
                <img id="draggerpic" key={key} src={image} alt={alt} /> </div>)}
            </div>
          </div>
          <div className="swiper-button-prev">
            <span className="swiper-button-prev-lg">&lt;</span>
            <span className="swiper-button-prev-sm">&lt;</span>
          </div>
          <div className="circle_container">
            <div id="myCirlce" className="circle">Drag</div>
          </div>
          <div className="swiper-button-next">
            <span className="swiper-button-next-sm">&gt;</span>
            <span className="swiper-button-next-lg">&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drag;
