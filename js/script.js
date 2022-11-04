$(function(){
    $.scrollUp({
        scrollDistance: 20,
        scrollSpeed:2000,
        scrollText: ' '
     
    });

    $('.owl-carousel').owlCarousel({
        
        loop:true,
        margin:10,
        nav:true,
        lazyLoad:true,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        
    
      
         responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            800:{
                items:3
            },
            1000:{
                items:5
            }
        }
})


})


    
