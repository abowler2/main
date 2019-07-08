import Swiper from 'swiper';
import '../../node_modules/swiper/dist/css/swiper.min.css';
import React, { useEffect } from 'react';
let swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// function myFunction() {
//   document.getElementById("myCirlce").style.display = "none";
// }
// const cir = document.document.getElementById('myCirlce');

function Community() {
  // const [x, y] = useState(null);
  // function myFunction() {
  //   const x = document.getElementById("myCirlce");
  //   if (x.style.display === "block") {
  //     x.style.display = "none";
  //   }
  //   console.log("hi");
  // }

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   const x = document.getElementById("myCirlce");
  //   x.addEventListener('click', event => {
  //     myFunction()
  //   }); 
  // });
  return (
    <div className="grid-container  ">
      <div className="column-24 " onClick="myFunction()" >
        <div id="iesdBg" className="swiper-container leader-1 trailer-1" >
          <div className="swiper-wrapper" >
            <div className="swiper-slide"><img id="communitypic" src="../../static/images/community/community_1.jpg" alt="community img"></img></div>
            <div className="swiper-slide"><img id="communitypic" src="../../static/images/community/community_2.jpg" alt="community img"></img></div>
            <div className="swiper-slide"><img id="communitypic" src="../../static/images/community/community_3.jpg" alt="community img"></img></div>
            <div className="swiper-slide"><img id="communitypic" src="../../static/images/community/community_4.jpg" alt="community img"></img></div>
            <div className="swiper-slide"><img id="communitypic" src="../../static/images/community/community_5.jpg" alt="community img"></img></div>
            <div className="swiper-slide"><img id="communitypic" src="../../static/images/community/community_6.jpg" alt="community img"></img></div>
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
        {/* <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div> */}
      </div>
    </div>
  );
};


export default Community;