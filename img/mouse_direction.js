function mousejc(e,obj){
        var w=obj.offsetWidth;
        var h=obj.offsetHeight;
        var x=(e.clientX - obj.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
        var y=(e.clientY - obj.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;

        var form=0;
        var result=[];
        if(e.type == 'mouseover' || e.type == 'mouseenter'){
            result.push(direction);
            result.push(0);
        }else{
            result.push(direction);
            result.push(1);
        }
        return result;
        
        //第一个元素的值为0是上方，为1是右方，为2是下方，为3是左方；
        //第二个元素的值为0是入，为1是出
    }
    $("#wrap").mouseover(function(e){
        var aa=mousejc(e,this);
        console.log(aa)
    })
    $("#wrap").mouseout(function(e){
        var aa=mousejc(e,this);
        console.log(aa)
    })