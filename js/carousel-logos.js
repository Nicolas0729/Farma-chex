$('.carousel-logos').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout:2000,
    margin: 40,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        300:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        900:{
            items: 3,
            nav: false
        },
        1140:{
            items: 5.5,
            nav: false
        },
        1340:{
            items: 5.5,
            nav: false
        }
    }    
})