$('.owl-carousel').owlCarousel({
    loop:true,
    margin:12,
    autoplay:true,
    autoplayTimeout:6000,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1,
            stagePadding: 30
        },
        600:{
            items:2
        },
        1000:{
            items:2,
            stagePadding: 100
        }
    }
})