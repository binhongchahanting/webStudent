$(function(){
    //登录保存
    if(localStorage.length){
       $(".user").val(localStorage.key(0));
        $(".mima").val(localStorage.getItem(localStorage.key(0)));
    }
    var user;
    var password;
    $("#btn").click(function(){
        if($("#check")[0].checked){
            user=$(".user").val();
            password=$(".mima").val();
            if(user&&password){
                localStorage.setItem(user,password);
            }
        }else{
            localStorage.clear();
        }
    });
  //swiper轮播
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        loop:true,
        pagination : '.swiper-pagination',
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        paginationClickable :true,
    })
    //音乐播放器
    $( ".audio").attr("src","1.mp3");
    var index=1;
    $(".start").click(function(){
        if($(".audio")[0].paused){
            $(".audio")[0].play();
            $(this).html("暂停");
        }else{
            $(".audio")[0].pause();
            $(this).html("开始");
        }
    });
    $(".before").click(function(){
        index-=1;
        if(index<=0){
            index=3;
        }
        $(".audio").attr("src",index+".mp3");
        $(".audio")[0].play();
    });
    $(".after").click(function(){
        index+=1;
        if(index>=4){
            index=1;
        }
        $(".audio").attr("src",index+".mp3");
        $(".audio")[0].play();
    });
});
