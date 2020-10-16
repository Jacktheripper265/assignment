var w;
function GetTime()
{
    if(typeof(Worker)!=='undefined')
    {
        if(typeof(w)=='undefined')
        {
            w=new Worker("worker.js");
        }
        w.onmessage=function(event)
        {
            document.getElementById('out').innerHTML=event.data;
        }

    }
    else
    {
        document.getElementById('out').innerHTML="does not support worker";
    }
}




