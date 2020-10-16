
var exam=document.getElementById('ex');
var con=exam.getContext("2d");
con.fillStyle="RED";
con.fillRect(20,20,100,150);

var v=document.getElementById('gx');
var cox=v.getContext("2d");
cox.beginPath();
cox.moveTo(50,50);
cox.lineTo(50,100);
cox.lineTo(100,50);
cox.fill();


var x=document.getElementById('hx');
var cx=x.getContext("2d");
cx.beginPath();

cx.arc(100,100,50,0,2*Math.PI);
cx.fill();

cx.beginPath();
cx.arc(80,80,10,0,2*Math.PI)
cx.fillStyle="red";
cx.fill();



cx.beginPath();

cx.arc(120,80,10,0,2*Math.PI)
cx.fillStyle="red";
cx.fill();

cx.beginPath();

cx.arc(100,120,20,0,1*Math.PI)
cx.fillStyle="red";
cx.fill();