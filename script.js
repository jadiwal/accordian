$(document).ready(function(){
    $('.answer1, .answer2, .answer3').hide();

    $(".accordian1").click(function(){
        $(".answer1").slideToggle();
        $('.answer2, .answer3').hide(500)
    });
    
    $(".accordian2").click(function(){
        $(".answer2").slideToggle();
        $('.answer1, .answer3').hide(500)
    });

    $(".accordian3").click(function(){
        $(".answer3").slideToggle();
        $('.answer1, .answer2').hide(500)
    });
});