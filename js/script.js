/*Esconder/Mostrar Header ao rolar pagina=================*/ 
(function t() {

    var doc = document.documentElement;
    var w = window;

    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;

    var header = document.querySelector('#header');
    var toggled;
    var threshold = 100;

    var checkScroll = function () {
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        }
        else {
            //scrolled up
            curDirection = 1;
        }

        if (curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if (toggled) {
            prevDirection = curDirection;
        }
        
    };

    var toggleHeader = function () {
        toggled = true;
        if (curDirection === 2 && curScroll > threshold) {
            header.classList.add('hide');
        }
        else if (curDirection === 1) {
            header.classList.remove('hide');
        }
        else {
            toggled = false;
        }
        return toggled;
    };
    

    window.addEventListener('scroll', checkScroll);

})();

/*Menu Mobile =================================================*/
const hamburguer = document.querySelector('#icon-nav');
const menuMobile = document.querySelector('header nav');

function x() {
    hamburguer.classList.toggle('active');

    if(hamburguer.classList.contains('active')){
      menuMobile.classList.add('open');
      header.classList.add('semhidemobileopen');
      document.body.style.overflow = "hidden";
    }else{
      menuMobile.classList.remove('open');
      header.classList.remove('semhidemobileopen');
      document.body.style.overflow = "visible";
    }
};

hamburguer.addEventListener('click',()=>{
    x();
});

/*Deslizar menu mobile============================================*/

var items = document.querySelectorAll('#menu');


items.forEach(item => {
  item.addEventListener('touchstart', handleTouchStart, false);
  item.addEventListener('touchmove', handleTouchMove, false);
});

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
  elm = firstTouch.target;
};

function handleTouchMove(evt) {
  if ( ! xDown || ! yDown ) {
    return;
  }

  //var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var yDiff = yDown - yUp;

  if ( yDiff > 0 ) {
    menuMobile.classList.remove('open');
    hamburguer.classList.remove('active');
    document.body.style.overflow = "visible";
    

  } else {
    menuMobile.classList.add('open');
    hamburguer.classList.add('active');
    document.body.style.overflow = "hidden";

    

  }

  xDown = null;
  yDown = null;
};