$(function(){
    var _height=$(window).height();
    var _he=_height-110;
    $(".big").css({height:_he+60});
    $("._banner").css({height:_he});
    var myScroll;
    setTimeout(function(){
        myScroll = new iScroll('wrapper');
    },300);
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    var _banner = new Swiper('.smallOne',{
        autoplay:5000,//可选选项，自动滑动
        pagination:'._banner1',
        nested:true,
    });
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
            url: "http://datainfo.duapp.com/shopdata/selectGoodes.php",
            dataType:"jsonp",
            data:{classID:"1",goodsID:"2"},
            success: function(num){
               console.log(num);
            }
        });
    }
});
