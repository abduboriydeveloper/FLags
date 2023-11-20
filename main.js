let theme = false

let body = document.querySelector("body")
let button = document.querySelector("button")
let nav = document.querySelector('nav')


button.addEventListener("click", function () {
    if (theme === false) {
        theme = true
    } else {
        theme = false
    }

    if (theme === false) {
        body.style.background = "white"
        body.style.color = "black"
    } else {
        body.style.background = "black"
        body.style.color = "white"
    }
})

let cards = document.querySelectorAll('.flags-card')

console.log(cards)

cards[0].addEventListener('click' , function () {
    window.location.href = "http://127.0.0.1:5500/germany.html"
})

cards[1].addEventListener('click' , function () {
    window.location.href = "http://127.0.0.1:5500/usa.html"
})

cards[2].addEventListener('click' , function () {
    window.location.href = "http://127.0.0.1:5500/brazil.html"
})

cards[3].addEventListener('click' , function () {
    window.location.href = "http://127.0.0.1:5500/iceland.html"
})

cards[4].addEventListener('click' , function () {
    window.location.href = "http://127.0.0.1:5500/afghanistan.html"
})

cards[5].addEventListener('click' , function () {
    window.location.href = "http://127.0.0.1:5500/alands-islands.html"
})

cards[6].addEventListener('click' , function () {
    window.location.href = "http://127.0.0.1:5500/albania.html"
})

cards[7].addEventListener('click' , function () {
    window.location.href = "http://127.0.0.1:5500/algeria.html"
})