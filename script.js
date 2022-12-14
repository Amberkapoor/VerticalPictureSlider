const sliderContainer = document.querySelector('.slider-container')
const rightSlide = document.querySelector('.right-slide')
const leftSlide = document.querySelector('.left-slide')
const ButtonUp = document.querySelector('.up-button')
const ButtonDown = document.querySelector('.down-button')
const slidesLength = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

ButtonUp.addEventListener('click', () => changeSlide('up'))
ButtonDown.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}