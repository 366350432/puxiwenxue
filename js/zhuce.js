//账号是否验证过
var accountIsChecked = false;
var accountIsOK = false;
var passwdIsOK = false;
var confirmpwdIsOK = false;
var phoneIsOK = false;
// 用户名输入框验证

$('#uname').blur(function(){ 
    var zh=$('#uname').val();
    var zhpd=/^[0-9a-zA-Z]{6,20}$/;
    if(zh==''){
        $('#uname').attr('placeholder','用户名不能为空');
        return false;
    }else if(!zhpd.test(zh)){
        $("#uname-text").text('请输入您的用户名,长度为6-20位,不能含有特殊字符');
        return false;
    }else{
        $("#uname-text").text("用户名格式正确");
        return true;
    } 
});
//手机号码格式验证
$("#tl").blur(function(){
    fztl();
});
function fztl(){
    var tl = $("#tl").val();
    var tlpd = /^1[34578]\d{9}$/;
    if(tl == ""){
        $(".pdtl").text("手机号不能为空");
        $(".pdtl").css("color","red");
        return false;
    }else if(!tlpd.test(tl)){
        $(".pdtl").text("手机号不合法");
        $(".pdtl").css("color","red");
        return false;
    }else{
        $(".pdtl").text("");
        return true;
    }
}