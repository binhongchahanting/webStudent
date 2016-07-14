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
