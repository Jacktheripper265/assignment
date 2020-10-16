var i;

var timeC=function()
{
    i=new Date();
    i.getHours();
    i.getMinutes();
    i.getSeconds();
    postMessage(i);
    setTimeout(timeC,500);
}

timeC();