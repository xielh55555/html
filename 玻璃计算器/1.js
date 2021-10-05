var txt='';
function jisuan(obj){
    var xx=document.getElementById('con');
    var yy=document.getElementsByClassName('butt_1');
    var von=yy.length;
    for(i=0;i<von;i++){
        if(yy[i]==obj){
            switch(i){
                case 0:xx.innerHTML='0';break;
                case 4:txt=txt+'7';xx.innerHTML=txt;break;
                case 5:txt=txt+'8';xx.innerHTML=txt;break;
                case 6:txt=txt+'9';xx.innerHTML=txt;break;
                case 8:txt=txt+'4';xx.innerHTML=txt;break;
                case 9:txt=txt+'5';xx.innerHTML=txt;break;
                case 10:txt=txt+'6';xx.innerHTML=txt;break;
                case 12:txt=txt+'1';xx.innerHTML=txt;break;
                case 13:txt=txt+'2';xx.innerHTML=txt;break;
                case 14:txt=txt+'3';xx.innerHTML=txt;break;
                case 15:txt=txt+'+';xx.innerHTML=txt;break;
                case 16:txt=txt+'00';xx.innerHTML=txt;break;
                case 17:txt=txt+'0';xx.innerHTML=txt;break;
                case 18:txt=txt+'.';xx.innerHTML=txt;break;

            }
        }

    }
}