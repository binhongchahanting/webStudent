$(function(){
    /*checkbox的点击事件*/
    touch.on('.two', 'hold tap doubletap', function(ev){
        $(".yes").toggleClass("_hidden");
    });
    var a=false;
    var b=false;
    /*登录判断*/
    var _name = /[\w\*\.%&]{2}/g;
    var password =/^[a-zA-Z](\w|[\.\_\*]){4,19}$/g;
    $("#_title").blur(function(){
      var _tilVal=$(this).val();
      if(!_name.test(_tilVal)){
         alert("用户名格式不正确");
          a=false;
      }else{
          a=true;
      }
    });
    $("#_password").blur(function(){
        var _passVal=$(this).val();
        if(!password.test(_passVal)){
            alert("密码格式不正确");
            b=false;
        }else{
            b=true;
        }
    });
    touch.on("#target","tap",function(){
        if(a&&b){
            $.ajax({
                "url":"http://datainfo.duapp.com/shopdata/userinfo.php",
                "data":{status:"login",userID:$("#_title").val(),password:$("#_password").val()},
                 dataType:"json",
                success: function (num) {
                    if(num==2){
                        alert("密码不符合");
                    }else if(num==0){
                        alert("用户名不存在");
                    }else{
                      if(!$("#check")[0].checked){
                          sessionStorage.setItem($("#_title").val(),$("#_password").val());
                      }else{
                          localStorage.setItem($("#_title").val(),$("#_password").val());
                      }
                    }
                }
            })
        }
    });
});
