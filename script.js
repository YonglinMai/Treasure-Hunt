$(".hi").click(function(){
    $(".hi").text("Now Double Click The Next Picture");
    $(".steptwo").slideDown();
});
$(".steptwo").dblclick(function(){
    $(".steptwo").hide();
    $("button").show();
});
$(".stepthree").mouseleave(function(){
    $(".stepthree").text("Click");
});
$(".stepthree").click(function(){
    $("p").show();
    $("button").hide();
    $(".final").css("color","red");
});
$(".final").dblclick(function(){
    $(".whole").fadeOut();
    $("body").css("background-color","gold");
    $(".treat").fadeIn();
    $(".treattwo").fadeIn();
});
