$(function () {
    /*注册验证*/
    var _name = /[\w\*\.%&]{2}/g;
    var password = /^[a-zA-Z](\w|[\.\_\*]){4,19}$/g;
    /*/^[a-zA-Z](\w|[\*\.\_&]){5,20}$/g ;*/
    var a = false;
    var b = false;
    var c = false;
    $("#_name").focus(function () {
        $(this).css({color: "#333"});
        $(this).val("");
    });
    $("#_name").blur(function () {
        var _registerName = $("#_name").val();
        if (_name.test(_registerName)) {
            $(this).css({color: "#333"});
            a = true;
        } else {
            //失败
            a = false;
            if ($("#_name").val() == "") {
                $(this).val("用户名不能为空");
                $(this).css({color: "red"});
            } else {
                $(this).val("用户名格式不正确!");
                $(this).css({color: "red"});
            }
        }
    });
    $("#_password").blur(function () {
        var _password = $("_password").val();
        if (!password.test(_password)) {
            b = false;
            alert("密码格式不正确");
        } else {
            b = true;
        }
    });
    $(".again").blur(function () {
        var again = $(this).val();
        if (again != $("#_password").val()) {
            alert("密码不相同，请重试");
            c = false;
        } else {
            c = true;
        }
    });
    touch.on("#target","tap", function (ev) {
        if(a&&b&&c){
            $.ajax({
                "url": "http://datainfo.duapp.com/shopdata/userinfo.php",
                "type": "post",
                data: {status: "register", userID:$("#_name").val(),password:$("#_password").val()},
                success: function (num) {
                    if (num == 1) {
                        window.location.href="http://localhost:63342/webStudent/myproduct/load.html"
                    } else {
                        alert("用户名已存在");
                    }
                }
            });
        }else{
            alert("请输入正确的信息");
        }
    })
});


