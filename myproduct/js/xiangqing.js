$(function(){
    var _height=$(window).height();
    var _he=_height-110;
    $(".big").css({height:_he+60});
    $("._banner").css({height:_he});

    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    var arr=["介绍","详情","实拍"];
    var _big=new Swiper(".big",{
        pagination:'.bigPagination',
        paginationClickable :true,
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + (arr[index]) + '</span>';
        }
    });
    var _address=window.location.href;
    var classId=_address.match(/n=.+/g)//http://localhost:63342/webStudent/myproduct/xingqing.html?n=1&3
    if(classId){
        var _class=classId[0].replace("n=","").split("&");
        $.ajax({
            url: "http://datainfo.duapp.com/shopdata/getGoods.php",
            dataType:"jsonp",
            data:{goodsID:_class[1]},
            success: function(num){
                console.log(num);
                console.log(num[0]["goodsListImg"]);
                $(".swiperOne .dec .main .a1").children("img").attr("src",num[0]["goodsListImg"]);
                $(".swiperOne .dec .main .des span:nth-child(1)").html("￥"+num[0]["price"]);
                $(".swiperOne .dec .main .des span:nth-child(2)").html(num[0]["2"]);
                $(".swiperOne .dec .main .da .price").html("￥"+(Number(num[0]["price"])/(Number(num[0]["discount"]==0?10:Number(num[0]["discount"]))*0.1)).toFixed(2));
                $(".swiperOne .dec .main .da .discount").html(num[0]["discount"]+"折");
                $(".swiperOne .dec .main .da .people").html(num[0]["buynumber"]+"<span>人购买</span>");
                var str="";
                var str1="";
                console.log(num[0]["imgsUrl"]);
                var url=window.eval(num[0]["imgsUrl"]);
                for(var i=0;i<url.length;i++){
                    str+="<img src=\""+url[i]+"\">";
                    str1+="<div class=\"swiper-slide\"><img src=\""+url[i]+"\"></div>"
                }
                str+=" <div class=\"_r\"></div>";
                $(".two #scroller").append(str);
                $(".smallOne .swiper-wrapper").append(str1);
                var myScroll;
                setTimeout(function(){
                    myScroll = new iScroll('wrapper');
                },600);
                var _banner = new Swiper('.smallOne',{
                    autoplay:5000,//可选选项，自动滑动
                    pagination:'._banner1',
                    nested:true
                });
            }
        });
        touch.on(".gogo","tap",function(){
            window.history.go(-1);
        })
    }
});
