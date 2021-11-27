$(document).ready(function(){
    ClickEven();
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

