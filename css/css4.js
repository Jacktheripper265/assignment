function checkc()
{
    var c=document.getElementsByName('tr');
    var len=c.length;

    var valid=0;
    for(var i=0;i<len;i++)
    {
        if(c[i].checked==true)
        {
            valid=1;
            // document.getElementById('sub').removeAttribute("disabled");
            break;
        }
    }
    if(valid==0)
    {
        document.getElementById('sub').disabled="true";
        alert("Choose program that you have trained in");

    }
}

function checkr()
{
    var c=document.getElementsByName('dept');
    var len=c.length;

    var valid=0;
    for(var i=0;i<len;i++)
    {
        if(c[i].checked==true)
        {
            // document.getElementById('sub').removeAttribute("disabled");
            valid=1;
            break;
        }
    }
    if(valid==0)
    {
        document.getElementById('sub').disabled="true";
        alert("Choose your Department");
        
    }
}

function chan()
{
   document.getElementById('sub').removeAttribute("disabled"); 
//    checkc();
}

function chanc()
{
     document.getElementById('sub').removeAttribute("disabled"); 
}