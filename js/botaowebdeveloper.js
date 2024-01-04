
const controls = document.querySelectorAll('.control');
const card = document.querySelectorAll('.card');

let currentItem = 0;

const sliderDeveloper = document.getElementsByName('sliderDeveloper');
const sliderDesign = document.getElementsByName('sliderDesign');

const maxSliderDeveloper = sliderDeveloper.length;
const maxSliderDesign = sliderDesign.length;

controls.forEach(control => {

    control.addEventListener('click', () => {
        const isLeftDeveloper = control.classList.contains('btnDeveloperEs');
        const isLeftDesign = control.classList.contains('btnDesignEs');

        if (isLeftDeveloper|| isLeftDesign) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxSliderDeveloper & maxSliderDesign) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxSliderDeveloper & maxSliderDesign - 1;
        }

        sliderDeveloper.forEach(sliderDeveloper => sliderDeveloper.removeAttribute('checked'));
        sliderDesign.forEach(sliderDesign => sliderDesign.removeAttribute('checked'));
        

        sliderDeveloper[currentItem].setAttribute('checked', 'checked');
        sliderDesign[currentItem].setAttribute('checked', 'checked');

    });


});