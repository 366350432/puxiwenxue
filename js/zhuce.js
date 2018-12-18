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
        $('#uname-text').text('用户名不能为空');
        $('#uname-text').css('color','red');
        return false;
    }else if(!zhpd.test(zh)){
        $("#uname-text").text('请输入您的用户名,长度为6-20位,不能含有特殊字符');
        return false;
    }else{
        $("#uname-text").text("用户名格式正确");
        accountIsChecked=true;
        // console.log(accountIsChecked);
        return true;
        
    } 
});

//手机号码格式验证
$("#tl").blur(function(){
    var tl = $("#tl").val();
    var tlpd = /^1[34578]\d{9}$/;
    if(tl == ""){
        $("#pdtl").text("手机号不能为空");
        $("#pdtl").css("color","red");
        return false;
    }else if(!tlpd.test(tl)){
        $("#pdtl").text("手机号码格式不正确");
        $("#pdtl").css("color","red");
        return false;
    }else{
        $("#pdtl").text("手机号码格式正确");
        return true;
    }
});
//密码验证

$("#pass").blur(function(){
    var pass1 = $("#pass").val();
    var pass1pd = /^[\w@!~$%&]{6,24}$/;
    if(pass1 == ""){
        $("#pdpass1").text("密码不能为空");
        $("#pdpass1").css("color","red");
        return false;
    }else if(!pass1pd.test(pass1)){
        $("#pdpass1").text("密码不能出现特殊字符");
        $("#pdpass1").css("color","red");
        return false;
    }else{
        $("#pdpass1").text("密码格式正确");
        return true;
    }
});


/**
 * 
 * 密码强度验证
 * 
 */

$('#pass').keyup(function () { 
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\w).*$", "g"); 
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g"); 
    var enoughRegex = new RegExp("(?=.{6,}).*", "g"); 
    
    
    if(strongRegex.test($('#pass').val())) { 
        $('#medium').removeClass('pw-medium'); 
        $('#low').removeClass('pw-defule'); 
        $('#strong').addClass('pw-strong'); 
            //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
    } 
    else if (mediumRegex.test($('#pass').val())) { 
        $('#level').removeClass('pw-medium'); 
        $('#level').removeClass('pw-strong'); 
        $('#level').addClass('pw-medium'); 
            //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
    } 
    else if(enoughRegex.test($('#pass').val())){ 
        $('#medium').removeClass('pw-medium'); 
        $('#strong').removeClass('pw-strong'); 
        $('#low').addClass('pw-defule'); 
            //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的 
    } 
    return true; 
}); 
