var usern=document.getElementById('login_1')
usern.onclick=function(){
    if($('username')=='xielh'&&$('password')=='123'){
        window.location.href="http://oa.highly.com.cn/";
    }
    
}

function $(name){
    return document.getElementById(name).value;
}