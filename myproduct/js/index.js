//导航栏hover
$(function(){
    //闪屏页进入首页
    $("#_go")[0].addEventListener("touchstart",function(){
        $("._start").remove();
    });
    //首页内容区域的高度
    var _height=$(window).height()-150;
    $("._content").css({
        height:_height,
    });
    //首页轮播swiper 和 iscroll
    //banner的获取
        var str='';
        $.ajax({
            url:"http://datainfo.duapp.com/shopdata/getBanner.php",
            type:"post",
            dataType:"jsonp",
            success:function(data){
                var reg=/http.+\.jpg/g;
                var child=$("._banner .swiper-wrapper").children("div");
               /* alert(child.length);*/
                for(var i=0;i<data.length;i++){
                    var _data= window.eval("("+data[i]["goodsBenUrl"]+")");
                    str="<img src=\""+_data[0]+"\"/>";
                    child.each(function(j){
                        if(j==0&&i==3){
                            $(this).html(str);
                        }
                        if(j==5&&i==0){
                            $(this).html(str);
                        }
                        if(j==i+1){
                            $(this).html(str);
                        }
                    });
                }
            }
        });
    var _banner = new Swiper('._banner', {
        autoplay: 5000,//可选选项，自动滑动
        loop:true,
        autoplayDisableOnInteraction : false,
        pagination : '._banner1',
        prevButton:'._banner2',
        nextButton:'._banner3'
    });
    var _startMain = new Swiper('._stratMain', {
        pagination : '.start1',
    });
    $.ajax({
        url:"http://datainfo.duapp.com/shopdata/getGoods.php",
        type:"post",
        async:"fasle",
        dataType:"jsonp",
        success:function(data){
            var img;
            for(var i=0;i<data.length;i++){
                img=data[i]["goodsListImg"];
                $("._context:nth-child(1) .row ._left").children("a").attr("href","http://localhost:63342/webStudent/myproduct/xingqing.html?n="+data[i]["classID"]+"&"+data[i]["goodsID"]);
                $("._context:nth-child(1) .row ._left a").children("img").attr("src",img);  console.log(data);
                $("._context:nth-child(1) .text .describe").html(data[i]["2"]);
                $("._context:nth-child(1) .thing .pric .price").html("￥"+data[i]["price"]);
                $("._context:nth-child(1) .thing .pric ._pre").html("￥"+(Number(data[i]["price"])/(Number(data[i]["discount"]==0?10:Number(data[i]["discount"]))*0.1)).toFixed(2));
                $("._context:nth-child(1) .thing .pric .discount").html(data[i]["discount"]+"折");
                $("._context").eq(0).clone().removeClass("_hidden").appendTo(".total");
            }
            $("._content").delegate(".icon","tap",function(){
                var _href=$(this).parent(".thing").parent(".text").siblings("._left").find("a").attr("href");
                var _index=_href.match(/&.+/g)[0].replace("&","");
                if(sessionStorage.getItem("state")){
                    $.ajax({
                        url:"http://datainfo.duapp.com/shopdata/updatecar.php",
                        "data":{"userID":sessionStorage.getItem("state"),"goodsID":_index,"number":1},
                        success:function(data){
                            if(data){
                                console.log("成功");
                            }
                        }
                    });
                }
            });
            setTimeout(function(){
                var myScroll;
                myScroll = new iScroll('wrapper');
                document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
            },1000);
        }
    });
});
