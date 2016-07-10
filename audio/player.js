//后台获取到的歌曲数据 src就是歌曲的链接，img就是缩略图的地址
var data=[
    {
        "src":"1.mp3","img":"1.jpg"
    },
    {
        "src":"2.mp3","img":"2.jpg"
    },
    {
        "src":"3.mp3","img":"3.jpg"
    }
]

//控制播放第几个的变量
var musicNum=0;


//初始化函数
function init(){
    audio.volume=0.5;
    audio.src=data[0].src;
    $("#pro").val(0);
    $("#voice").val(0.5);
}
init();


//播放暂停按钮的方法
function playorpaused(){
    if(audio.paused){
        audio.play();
        $(this).val("暂停");
    }else{
        audio.pause();
        $(this).val("播放");
    }
}
$("#play").on("click",function(){
    playorpaused();
})

function add(){
    musicNum++;
    if(musicNum==data.length){
        musicNum=0;
    }
    $("section li").removeClass("on");
    $("section li").eq(musicNum).addClass("on");
    $("footer img").attr("src",data[musicNum].img);
    audio.src=data[musicNum].src;
    pro.value=0;
    audio.play();
}
function reduce(){
    musicNum--;
    if(musicNum<0){
        musicNum=data.length-1;
    }
    $("section li").removeClass("on");
    $("section li").eq(musicNum).addClass("on");
    $("footer img").attr("src",data[musicNum].img);
    audio.src=data[musicNum].src;
    audio.play();
}
$("#after").click(function(){
    add();
})
$("#before").click(function(){
    reduce();
})

$(audio).on("timeupdate",function(){
    //this.duration
    $("#pro").attr("max",this.duration);
    $("#pro").prop("value",this.currentTime);
    if(audio.ended){
        add();
    }

})

$("#pro").on("change",function(){
    var val=$(this).val();
    audio.currentTime=val;
    audio.play();
})

$("#voice").on("change",function(){
    var val=$(this).val();
    audio.volume=val;
})






