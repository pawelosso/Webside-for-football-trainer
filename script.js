const onLoadSide = () => {
    document.querySelector('header').classList.add('active');
}

window.addEventListener('DOMContentLoaded', onLoadSide)


const showElements = () => {
    
    const scrollY = window.scrollY + window.innerHeight
    const elements = document.querySelectorAll('main section')
    
    elements.forEach(element => {
        const offset = element.offsetTop + ((10/100) * window.innerHeight)
        if(scrollY >= offset) {
           element.classList.add('active')
        }
    })
}

window.addEventListener('scroll', showElements)


const showMenuPhone = () =>{
    document.querySelector('.menu-phone').classList.toggle('active')
    document.querySelector('nav').classList.toggle('active')
    document.querySelector('.nav-bar').classList.toggle('active')
    document.querySelector('body').classList.toggle('active')
}

document.querySelector('.nav-bar').addEventListener('click', showMenuPhone)


const slider = () => {
    const activeSlide = document.querySelector('.slide.active')
    const activeButton = document.querySelector('.buttons span.active')
    const nextSlide = activeSlide.nextElementSibling
    const slides = [...document.querySelectorAll('.slide')]
    const buttons = document.querySelectorAll('.buttons span')
    
    activeSlide.classList.remove('active')
    activeButton.classList.remove('active')
    
    if(nextSlide){
        nextSlide.classList.add('active')
        buttons[slides.indexOf(nextSlide)].classList.add('active')
    } else {
        document.querySelector('.slide').classList.add('active')
        document.querySelector('.buttons span').classList.add('active')
    }
}

let interavalSlider = setInterval(slider, 4000)


const handleChangeSlide = e => {
    clearInterval(interavalSlider)
    const buttons = [...document.querySelectorAll('.buttons span')]
    const index = buttons.indexOf(e.target)
    const slides = document.querySelectorAll('.slide')
    const activeButton = document.querySelector('.buttons span.active')
    const activeSlide = document.querySelector('.slide.active')
    
    activeButton.classList.remove('active')
    activeSlide.classList.remove('active')
    
    slides[index].classList.add('active')
    e.target.classList.add('active')
    interavalSlider = setInterval(slider, 4000)
}

document.querySelectorAll('.buttons span').forEach(element => element.addEventListener('click', handleChangeSlide))


const showOffer = e => {
    e.target.closest('.training').classList.toggle('active')
}

document.querySelectorAll('.showOffer').forEach(element => element.addEventListener('click', showOffer))
document.querySelectorAll('.training-text div').forEach(element => element.addEventListener('click', showOffer))


const menuScroll = scroll => {
    window.scrollTo({
        top: scroll.offsetTop - (document.querySelector('nav').clientHeight + 20),
        left:0,
        behavior:"smooth",
    })

    document.querySelector('body').classList.remove('active')
    document.querySelector('.menu-phone').classList.remove('active')
    document.querySelector('nav').classList.remove('active')
    document.querySelector('.nav-bar').classList.remove('active')
} 

document.querySelectorAll('.about').forEach(element => 
    element.addEventListener('click', () => 
    menuScroll(document.querySelector('.welcomeText'))))

document.querySelectorAll('.arrow-button').forEach(element => 
    element.addEventListener('click', () => 
    menuScroll(document.querySelector('.welcomeText'))))

document.querySelectorAll('.offer').forEach(element => 
    element.addEventListener('click', () => 
    menuScroll(document.querySelector('.training-container'))))

document.querySelectorAll('.contact').forEach(element => 
    element.addEventListener('click', () => 
    menuScroll(document.querySelector('.contactInfo'))))

document.querySelectorAll('nav img').forEach(element => 
    element.addEventListener('click', () => 
    menuScroll(0)))











