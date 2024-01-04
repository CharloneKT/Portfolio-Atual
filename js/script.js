/*Esconder/Mostrar Header ao rolar pagina*/ 
(function () {

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
    }else{
        menuMobile.classList.remove('open');
    }
};

hamburguer.addEventListener('click',()=>{
    x();
});