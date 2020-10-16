function check()
{
    var p=document.getElementById('ps').value;
    var cp=document.getElementById('cps').value;
    
    console.log(p,cp);
    if(p==null||cp==null)
    {}
    else
    {
    if(p==cp)

    {
        document.getElementById('bu').disabled="false";
        alert("password matches");
        var but=document.getElementById('bu');
        but.removeAttribute("disabled");
    }
    else
    {
        alert("Incorrect password");
        document.getElementById('bu').disabled="true";
    }


}

}