function test(){
    //检验是否必填以及格式
    var userid =document.getElementById('userid').value;
    var userpwd =document.getElementById('userpwd').value;
    var userpwd2 =document.getElementById('userpwd2').value;
    var username =document.getElementById('username').value;
    var idnumber =document.getElementById('idnumber').value;
    var checkcode =document.getElementById('checkcode').value;

    if(userid==""){
        alert("学号(工号)不能为空！");
        return false;
    }else if(userpwd==""){
        alert("密码不能为空！");
        return false;
    }else if(userpwd.length<6||userpwd.length>16){
        alert("密码长度不符合要求!");
        return false;
    }else if(userpwd2==""){
        alert("密确认码不能为空！");
        return false;
    }else if(userpwd!==userpwd2){
        alert("两次输入的密码不一致！");
        return false;
    }
    else if(username==""){
        alert("用户姓名不能为空！");
        return false;
    }else if(idnumber==""){
        alert("证件号码不能为空！");
        return false;
    }else if(checkcode==""){
        alert("验证码不能为空！");
        return false;
    }else if(checkcode.toUpperCase()!=='N59TMT'){
        alert("验证码错误！");
        return false;
    }else{
        return true;
    }
}

function handleSubmit(){
    var userid =document.getElementById('userid').value;
    var userpwd =document.getElementById('userpwd').value;
    var username =document.getElementById('username').value;
    var idnumber =document.getElementById('idnumber').value;
    var checkcode =document.getElementById('checkcode').value;
    if (!test()){
        return false;
    }else{
        var message=JSON.stringify({学号:userid,用户密码:userpwd,用户姓名:username,证件类型:'身份证',证件号码:idnumber,验证码:checkcode})
        alert(message);
        go();
    }
}
function go(){
    setTimeout(()=>{
        window.location.href='./music.html';
        console.log('定时器执行了');
    },3000);
}