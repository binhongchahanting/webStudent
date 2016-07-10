//导航栏hover
$(function(){
    $("#_go")[0].addEventListener("touchstart",function(){
        $("._start").css("display","none");
    });
    var _height=$(window).height()-150;
    $("._content").css({
        height:_height,
    });

});
