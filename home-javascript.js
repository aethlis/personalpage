const bigname = document.querySelector('.bigname')
const pagetwo = document.querySelector('.pagetwo')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            bigname.classList.add('opacity-ani');
            return;
        }
        bigname.classList.remove('opacity-ani');
        pagetwo.classList.remove('opacity-ani');
    })
})

// obervers
observer.observe(document.querySelector('.bigname-wrapper'))


// function fadeOutOnScroll(element) {
//     if (!element) {
//         return;
//     }

//     var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top
//     var elementHeight = bigname.offsetHeight
//     var scrollTop = document.documentElement.scrollTop

//     var opacity = 1

//     if (scrollTop > distanceToTop) {
//         opacity = 1 - (scrollTop - distanceToTop) / elementHeight
//     }

//     if (opacity >= 0) {
//         element.style.opacity = opacity
//     }
// }

// function scrollHandler() {
//     fadeOutOnScroll(bigname)
//     fadeOutOnScroll(pagetwo)
// }

// window.addEventListener('scroll', scrollHandler)