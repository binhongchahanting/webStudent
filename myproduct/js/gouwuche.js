$(function(){

if(sessionStorage.getItem("state")){
    var username=sessionStorage.getItem("state");
    $.ajax({
        url:"http://datainfo.duapp.com/shopdata/getCar.php",
        data:{"userID":username},
        dataType:"jsonp",
        success:function(data){
            console.log(data);
            if(data==0){
                $("._replace").removeClass("_none");
                $(".allmian").addClass("_none");
            }else{
                $("._replace").addClass("_none");
                $(".allmian").removeClass("_none");
               /*都比   购物车的样式在改变*/
                var allPrice=0;
                var num=0;
              for(var i=0;i<data.length;i++){
                  allPrice+=parseFloat(data[i]["price"])*parseFloat(data[i]["number"]);
                  num+=parseInt(data[i]["number"]);
                  $(".main:nth-child(2) .pic a img").attr("src",data[i]["goodsListImg"]);
                  $(".main:nth-child(2) .pic a").attr("href","http://localhost:63342/webStudent/myproduct/xingqing.html?n="+data[i]["classID"]+"&"+data[i]["goodsID"]);
                  $(".main:nth-child(2) .detial .p1 .desc").html(data[i]["goodsName"]);
                  $(".main:nth-child(2) .p2").html(data[i]["className"]);
                  $(".main:nth-child(2) .p3 .singlePrice").html(data[i]["price"]);
                  $(".main:nth-child(2) .p4 ._numb").html(data[i]["number"]);
                  $(".main:nth-child(2)").clone().removeClass("_none").appendTo(".allmian");
              }
                $(".title .allgood .num").html(num);
                $(".title ._mony .money").html(allPrice);
                $("#_number").html(num);
                /*减点击-------------------*/
                $(".allmian").delegate(".reduce","tap",function(){
                    var number=$(this).siblings("._numb").html();
                    number-=1;
                    if(number<=0){
                        number=1;
                    }
                    $(this).siblings("._numb").html(number);
                    checkall();
                    var _href=$(this).parent(".p4").parent(".detial").siblings(".pic").find("a").attr("href");
                    var _index=_href.match(/&.+/g)[0].replace("&","");
                    $.ajax({
                        url:"http://datainfo.duapp.com/shopdata/updatecar.php",
                        "data":{"userID":sessionStorage.getItem("state"),"goodsID":_index,"number":number},
                        success:function(data){
                        }
                    });
                });
                /*加点击--------------------*/
                $(".allmian").delegate(".add","tap",function(){
                    var number=$(this).siblings("._numb").html();
                    number++;
                    $(this).siblings("._numb").html(number);
                    checkall();
                    var _href=$(this).parent(".p4").parent(".detial").siblings(".pic").find("a").attr("href");
                    var _index=_href.match(/&.+/g)[0].replace("&","");
                    $.ajax({
                        url:"http://datainfo.duapp.com/shopdata/updatecar.php",
                        "data":{"userID":sessionStorage.getItem("state"),"goodsID":_index,"number":number},
                        success:function(data){
                        }
                    });
                });
            }
            /*删除点击事件*/
            $(".allmian").delegate("._remove","tap",function(){
               var _href=$(this).parents(".p1").parents(".detial").siblings(".pic").children("a").attr("href");
                var _index=_href.match(/&.+/g)[0].replace("&","");
                $.ajax({
                    url:"http://datainfo.duapp.com/shopdata/updatecar.php",
                    "data":{"userID":sessionStorage.getItem("state"),"goodsID":_index,"number":0},
                    success:function(data){
                        if(data){
                            console.log("成功");
                        }
                    }
                });
                console.log($(this));
                $(this).parents(".main").remove();
                checkall();
            })
        }
    });
}else{
   //如果没有登陆成功 购物车就显示空白页
    $(".allmian").addClass("_none");
    $("._replace").removeClass("_none");
}
   touch.on("#shopping","tap",function(){
        $(this).attr("href","http://localhost:63342/webStudent/myproduct/index.html")
    });
    $(".gogo").on("tap",function(){
        window.history.back();
    })
});
/*处理数据函数*/
function checkall(){
    var numb=$(".main").length;
    var allMoney=0;
    var allnum=0;
    for(var i=1;i<numb;i++){
        var obj=$(".main").eq(i);
        allMoney+=parseFloat(obj.find(".singlePrice").html())*parseFloat(obj.find("._numb").html());
        allnum+=parseInt(obj.find("._numb").html());
    }
    $("#_number").html(allnum);
    $(".num").html(allnum);
    $(".money").html(allMoney);
}
