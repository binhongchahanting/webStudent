$(function(){
    touch.on('.two', 'hold tap doubletap', function(ev){
        $(".yes").toggleClass("_hidden");
    });
});
