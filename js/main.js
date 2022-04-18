
const filterBtns = document.querySelectorAll(".filter-btn")
const hamburger_menu = document.querySelector(".hamburger-menu")
const navbar = document.querySelector("header nav")
const links = document.querySelectorAll(".links a")

const serviceCardOverlay = document.querySelectorAll(".services-overlay")
const serviceCloseOverlay = document.querySelectorAll(".close-btn-wrapper")
const serviceOpenOverlay = document.querySelectorAll(".btn-read-open")

const topColumn = document.querySelector(".column-top")
const botColumn = document.querySelector(".column-bot")
const cardSection = document.querySelector(".card-section")

const aboutSection = document.querySelector(".about-section")
const aboutHeader = document.querySelector(".about-header")
const aboutEmailShape = document.querySelector(".email-me")
const aboutShape3 = document.querySelector(".ab-sh-3")
const aboutShape2 = document.querySelector(".ab-sh-2")
const aboutShape1 = document.querySelector(".ab-sh-1")

const openPortfolioModal = document.querySelectorAll(".gallery-image")
const closePortfolioModal = document.querySelectorAll(".close-modal")
let modal = document.querySelectorAll(".modal")





// PORTFILIO FILTER MENU

filterBtns.forEach(btn => btn.addEventListener("click", () => {
    filterBtns.forEach(button => button.classList.remove("active"))
    btn.classList.add("active")

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue })
}))

$('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: "0.6s"
});



// PORTFOLIO MODAL
let slidePosition = 0

openPortfolioModal.forEach((grid, index) => grid.addEventListener("click", (e) => {
    e.preventDefault()

    modal[index].classList.add("modal-active")

    modal[index].showModal()
    let slides = modal[index].querySelectorAll(".slide-item")
    console.log(slides)

    let slideNext = modal[index].querySelector(".slide-next")
    slideNext.addEventListener("click", () => moveToNextSlide(slides))



    let slidePrev = modal[index].querySelector(".slide-prev")
    slidePrev.addEventListener("click", () => moveToPrevSlide(slides))

    console.log(slidePrev)
    console.log(slideNext)

    let slideActions = modal[index].querySelector(".slide-actions")

    if (slides.length < 2) {
        slideActions.style.display = "none"
    } else {
        return
    }

}))

closePortfolioModal.forEach((grid, index) => grid.addEventListener("click", (e) => {
    e.preventDefault()


    modal[index].close()
    modal[index].classList.remove("modal-active")



}))









function hideAllSlides(x) {
    for (let slide of x) {
        slide.classList.remove("slide-item-visible")
        // slide.classList.add("slide-item-hidden")
    }
}

function moveToNextSlide(x) {
    hideAllSlides(x)
    let totalSlides = x.length


    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }

    //x[slidePosition].classList.remove("slide-item-hidden")
    x[slidePosition].classList.add("slide-item-visible")
}

function moveToPrevSlide(x) {
    hideAllSlides(x)
    let totalSlides = x.length

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }

    //x[slidePosition].classList.remove("slide-item-hidden")
    x[slidePosition].classList.add("slide-item-visible")
}

// FOOTER TYPED

let typed = new Typed(".auto-type", {
    strings: ["work together", "grab coffee", "collaborate", "talk design"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


// HAMBURGER MENU

function closeMenu() {
    navbar.classList.remove("open")
    document.body.classList.remove("stop-scrolling")
}

hamburger_menu.addEventListener("click", () => {
    if (!navbar.classList.contains("open")) {
        navbar.classList.add("open")
        document.body.classList.add("stop-scrolling")
    } else {
        closeMenu()
    }
})

links.forEach(link => link.addEventListener("click", () => closeMenu()))


// SCROLL FADING

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.nav-bar', { delay: 2600 })
sr.reveal('.header-content', { delay: 3200 })
sr.reveal('.services .section-header')
sr.reveal('.services .mouse-wrapper')
sr.reveal('.cards')
sr.reveal('.portfolio .section-header')
sr.reveal('.portfolio .section-body')
sr.reveal('.about .section-header')
sr.reveal('.about .about-img')
sr.reveal('.about .about-text', { origin: 'bottom' })
sr.reveal('.footer-circle, .social-media-wrap')

// LOADING PAGE


setTimeout(function () {
    $('.loader-wrapper').addClass("slide-out");
}, 2500)

setTimeout(function () {
    $('.preload').removeClass('preload');
}, 2500)


// SERVICES CARDS


serviceOpenOverlay.forEach((openBtn, index) => openBtn.addEventListener("click", (e) => {

    e.preventDefault()

    serviceCardOverlay[index].classList.add("read-open");

}))


serviceCloseOverlay.forEach((closeBtn, index) => closeBtn.addEventListener("click", (e) => {

    e.preventDefault()

    serviceCardOverlay[index].classList.remove("read-open");

}))


// SCROLL

window.addEventListener("scroll", () => {
    scrollCard()
    scrollAbout()
})

function checkScroll(element) {
    let rect = element.getBoundingClientRect();
    if (window.innerHeight >= rect.top + element.offsetHeight) {
        return true
    } else {
        return false
    }
}

function scrollCard() {
    if (!checkScroll(cardSection)) return;

    window.onscroll = function () {
        let Y = window.scrollY

        topColumn.style.transform = `translateY(${Y / 15 + -120}px)`
        botColumn.style.transform = `translateY(-${Y / 15 + -60}px)`
    }
}

function scrollAbout() {
    if (!checkScroll(aboutSection)) return;

    window.onscroll = function () {
        let Y = window.scrollY
        let query = window.matchMedia("(max-width: 800px)")

        aboutEmailShape.style.transform = `translateY(-${Y / 25 + -120}px)`
        aboutShape3.style.transform = `translateY(${Y / 25 + -120}px)`
        aboutShape2.style.transform = `translateY(-${Y / 23 + -120}px)`
        aboutShape1.style.transform = `translateY(${Y / 23 + -120}px)`

        if (query.matches) {
            return
        } else {
            aboutHeader.style.transform = `translateX(-${Y / 25 + - 150}px)`
        }
    }
}







// LOCO SCROLL


//const scroller = new LocomotiveScroll({
//    el: document.querySelector('[data-scroll-container]'),
//    smooth: true
//});
//










