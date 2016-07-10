//初始化的时候 audio的链接是第一首歌 img的图片是第一张 进度条在0位 声音在0.5处
function init() {
    $("#two").css({left: "50%"});
    $("#audio").attr("volume", 0.5);
}
$("document").ready(function () {
    init();
    var index = 0;
    $(".reduce").click(function () {
        index++;
        if (index >= $(".song").length) {
            index = 0;
        }
        //audio的链接变 图片的地址变 上面的class变
        $(".song").removeClass("on");
        $(".song").eq(index).addClass("on");
        $("._img").attr("src", "audio/" + (index + 1) + ".jpg");
        $("#audio").attr("src", "audio/" + (index + 1) + ".mp3");
        $("#audio")[0].play();
        $(".start").html("暂停");
        $("#one").css({left: 0});
    });
    $(".add").click(function () {
        index--;
        if (index <= -1) {
            index = $(".song").length - 1;
        }
        $(".song").removeClass("on");
        $(".song").eq(index).addClass("on");
        $("._img").attr("src", "audio/" + (index + 1) + ".jpg");
        $("#audio").attr("src", "audio/" + (index + 1) + ".mp3");
        $("#audio")[0].play();
        $(".start").html("暂停");
        $("#one").css({left: 0});
    });
    $(".start").click(function () {
        if ($("#audio")[0].paused) {
            $("#audio")[0].play();
            $(this).html("暂停");
        } else {
            $("#audio")[0].pause();
            $(this).html("播放");
        }
    });
    //播放事件 timeupdate; 当前播放位置发生改变的时候发生的事件
    $("#audio")[0].ontimeupdate = function () {
        /*console.log($(this)[0].currentTime);*/
        /* console.log($(this)[0].duration);*///154.488163
        var step = ($(this)[0].currentTime / $(this)[0].duration).toFixed(2) * 1 / 1.0;
        $("#one").css({
            left: step * 100 + "%"
        });
    };
    $("#two").bind("mousedown", function () {
        $(document).bind("mousemove", function (e) {
            var e = e || event;
            var _left = e.pageX;
            var x = $("._volume")[0].offsetLeft;
            var xx = 0;
            xx = _left - x;
            if (_left - x <= 0) {
                xx = 0;
            }
            if (_left - x >= $("._volume")[0].offsetWidth) {
                xx = $("._volume")[0].offsetWidth
            }
            $("#two").css({left: xx});
            $("#audio").prop("volume", xx / $("._volume")[0].offsetWidth);
            console.log($("#audio").attr("volume"));
            $(document).mouseup(function () {
                $(this).unbind("mousemove");
            });
        });
    });
        $("#one").bind("mousedown", function () {
            $(document).bind("mousemove",function (e) {
                var e = e || event;
                var _left = e.pageX;
                var x = $(".pro")[0].offsetLeft;
                var xx = 0;
                xx = _left - x;
                if (_left - x <= 0) {
                    xx = 0;
                }
                if (_left - x >= $(".pro")[0].offsetWidth) {
                    xx = $(".pro")[0].offsetWidth
                }
                $("#one").css({left: xx});
                $("#audio").prop("currentTime",(xx/$(".pro")[0].offsetWidth)*$("#audio")[0].duration);
            });
            $(document).mouseup(function () {
                $(this).unbind("mousemove");
                $("#audio")[0].ontimeupdate = function () {
                    /*console.log($(this)[0].currentTime);*/
                    /* console.log($(this)[0].duration);*///154.488163
                    var step = ($(this)[0].currentTime / $(this)[0].duration).toFixed(2) * 1 / 1.0;
                    $("#one").css({
                        left: step * 100 + "%"
                    });
                };
            });
            $("#audio")[0].ontimeupdate=null;
        });

});
