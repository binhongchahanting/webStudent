/**
 * Created by Administrator on 2016/7/3 0003.
 */
$(function(){
    var data=[
        {
            src:"1.mp3",img:"1.jpg",name:"第一首歌"
        },
        {
            src:"2.mp3",img:"2.jpg",name:"第二首歌"
        }
        ,{
            src:"3.mp3",img:"3.jpg",name:"第三首歌"
        }
    ]
    var num=0;
    function init(){
        var str='';
        $(data).each(function(i){
            str+="<li>"+this.name+"</li>"
        })
        $("section ul").html(str)
        $("audio").attr("src",data[num].src);
        $("section li").eq(0).addClass("on");
        $("#pro").val(0);
        $("#voil").val(5);
    }
    init();
    $("#play").click(function(){
        if($("audio")[0].paused){
            $("audio")[0].play();
            $(this).html("暂停");
        }else{
            $("audio")[0].pause();
            $(this).html("播放");
        }
    })

    $("#before").click(function(){
            if (num == 0) {
                num=2;
            } else {
                num--;
            }
            $("audio").attr("src",data[num].src);
            $("footer img").attr("src",data[num].img);
            $("section li").removeClass("on");
            $("section li").eq(num).addClass("on");
            $("audio")[0].play();
            $("#play").html("暂停");
            $("#pro").val(0);
            $("#voil").val(5);

    })
    $("#after").click(function(){
        if (num == 2) {
            num=0;
        } else {
            num++;
        }
        $("audio").attr("src",data[num].src);
        $("footer img").attr("src",data[num].img);
        $("section li").removeClass("on");
        $("section li").eq(num).addClass("on");
        $("audio")[0].play();
        $("#play").html("暂停");


    })


        $(audio).on('timeupdate',function(){
            if (!isNaN(audio.duration)) {
                $("#pro").attr({
                    min:"0",max:audio.duration,step:"1"
                })
                $("#pro").val(audio.currentTime)
            };
            if(audio.ended){
                if (num == 2) {
                    num=0;
                } else {
                    num++;
                }
                $("audio").attr("src",data[num].src);
                $("footer img").attr("src",data[num].img);
                $("section li").removeClass("on");
                $("section li").eq(num).addClass("on");
                $("audio")[0].play();
                $("#pro").val(0);
                $("#play").html("暂停");
            }
        });

    $("#pro").change(function(){
        audio.currentTime=this.value;
        audio.play();
    })
    audio.volume=0.5;
    $("#voil").change(function(){
        audio.volume=this.value/10;
    })

});