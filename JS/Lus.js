$(document).ready(function(){
    ClickEven();

    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true
        });
});

function ClickEven(){
    $(".mobile-menu").click(function(){
        if($('header aside nav').hasClass('active')){

            $("header aside nav").removeClass('active');    
        }else{
            $("header aside nav").addClass('active');
        }
    });
}

