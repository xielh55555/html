var logi=document.getElementById('login_1');
logi.onclick=function(){
    if($('username').value=='xielh'&&$('password').value=='123'){
        window.location.href="http://oa.highly.com.cn/login.jsp";
        
    }
    
}
function $(name){
    return document.getElementById(name);
}
// ***********************************************************************
function mail_name(obj){
    var cont=document.getElementsByClassName('maill_1');
    var con=cont.length;
    
    for( var i=0; i<con;i++ ){
        if(cont[i]==obj){
            if(i==0){window.location.href='mailto:luobp@tcl.com';}
            if(i==1){window.location.href='mailto:yen@tcl.com';}
            if(i==2){window.location.href='mailto:lhb@tcl.com';}
            if(i==3){window.location.href='mailto:liu_lei@tcl.com';}
            if(i==4){window.location.href='mailto:huangxiaodong@tcl.com';}
            if(i==5){window.location.href='mailto:xielh@tcl.com';}
            if(i==6){window.location.href='mailto:hshlh@tcl.com@tcl.com';}
            
        }
    }
}
    

