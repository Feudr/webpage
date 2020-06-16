// // 图片懒加载
// var imgs = document.querySelectorAll('.floor-img');

// function isIn(el) {
//     var bound = el.getBoundingClientRect(); //
//     var clientHeight = window.innerHeight;
//     return bound.top <= clientHeight;
// }
// function check() {
//     Array.from(imgs).forEach(function(el) {
//         if(isIn(el)) {
//             loadImg(el);
//         }
//     })
// }
// function loadImg(el) {
//     if(!el.src) {
//         var source = el.dataset.src
//         el.src = source;
//     }
// }
// window.onload = window.onscroll = function() {
//     this.check()
// }

function imgonload() {
    let img = document.querySelectorAll(".floor-img");
    /*console.log(img);*/
    for(let i=0; i<img.length; i++) {
      if(img[i].getBoundingClientRect().top < window.innerHeight) {
        //图片一旦有src就会加载出来，所以图片的路径不会放在src中，而是一个自定义的属性data-src中
        img[i].src = img[i].dataset.src;
      }
    }
  }

  function scollImg(fn) {
    let timer = null;
    let context = this;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context);
      }, 500)
    }
  }
  window.onload = imgonload;
  window.onscroll = scollImg(imgonload);
