/**
 * Created by Administrator on 2016/7/6.
 */
$(document).ready(function(){
    $("._menu").click(function(){
        var navIndex=$("._nav li").css("opacity");
        var navflag=parseInt(navIndex);
        var cont=$("._nav").children("li").length;
        if(!navflag){
            $("._nav").children("li").each(function(i){
                $(this).css({
                    opacity:0,
                    animation:"_show 0.5s ease "+(0.2*(cont-1-i))+"s forwards"
                });
            });
        }else{
            $("._nav").children("li").each(function(i){
                $(this).css({
                    opacity:1,
                    animation:"_hidden 0.5s ease "+(0.2*i)+"s forwards"
                });
            });
        }
    });
});