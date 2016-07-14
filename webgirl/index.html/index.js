/**
 * Created by Administrator on 2016/7/3.
 */
$(document).ready(function(){
    var index=true;
    $(".nav2 li:first-child a").click(function(){
        if(index){
            $(this).addClass("icon-x");
            $(".nav3").css({
                height:"100%"
            });
            index=false;
        }else{
            $(this).removeClass("icon-x");
            $(".nav3").css({
                height:0
            });
            index=true;
        }
    });
    $("section:nth-of-type(2)").hover(function(){
        $(this).children(".left").css({"opacity":1});
        $(this).children(".right").css({"opacity":1});
    },function(){
        $(this).children(".left").css({"opacity":0});
        $(this).children(".right").css({"opacity":0});
    });
    /*$(".banner").animate({"left":"-100%"},1000);*/
    var step=0;
    $(".btn").children("span").eq(0).addClass("span");
    $(".left").click(function(){
        step+=1;
        if(step==4){
            step=0;
        }
        $(".banner").animate({"left":"-"+100*step+"%"},1000);
        $(".btn").children("span").eq(step).addClass("span");
        $(".btn").children("span").eq(step).siblings("span").removeClass("span");
    });
    $(".right").click(function(){
        step-=1;
        if(step==-1){
            step=3;
        }
        $(".banner").animate({"left":"-"+100*step+"%"},1000);
        $(".btn").children("span").eq(step).addClass("span");
        $(".btn").children("span").eq(step).hover(function(){
            $(this).css("background","#fff");
        },function(){
            $(this).css("background","#aaa");
        });
        $(".btn").children("span").eq(step).siblings("span").removeClass("span");
    });
    var footerIndex=true;
    $(".jia").each(function(i){
        $(this).click(function(){
            $(this).parent("h3").siblings("ul").slideToggle(300);
        });
    })
});

$(document).ready(function(){
    //aside slidedown

    $("aside").slideDown(500);
    var mArr=localStorage.message==null?[]:JSON.parse(localStorage.message);//
    $(mArr).each(function(i){
        var tem=$(".tem").eq(0).clone().css("display","block").appendTo("section");
        tem.find("h3").html(mArr[i].a);
        tem.find("h5").html(mArr[i].b);
        tem.find("p").html(mArr[i].c);
    });
    //添加记录
    $("input[type=submit]").click(function(){
        var data={};
        data.a=$("input").eq(0).val();
        data.b=$("input").eq(1).val();
        data.c=$("textarea").val();
        $(".tem").eq(0).children("h3").html(data.a);
        $(".tem").eq(0).children("h5").html(data.b);
        $(".tem").eq(0).children("p").html(data.c);
        $(".tem").eq(0).clone().appendTo("section").removeClass("hidden");
        mArr.push(data);
        localStorage.message=JSON.stringify(mArr);//转换成字符串
        return false;
    });
    //删除全部
    $("aside input[type=button]").click(function(){
        $("section").children(".tem").each(function(i){
            if(i!=0){
                $(this).remove();
            }
        });
        localStorage.removeItem("message");
    });
    //删除自己
    $("section").delegate(".tem input[type=button]","click",function(){
        $(this).parent("div").remove();
        var index=$(this).parent("div").index();
        mArr.splice(index,1);
        localStorage.message=JSON.stringify(mArr);//转换成字符串
    });
});
