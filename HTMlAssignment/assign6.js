var exam=document.getElementById('ex');
var con=exam.getContext("2d");


con.beginPath();
con.lineWidth=5;
con.arc(45,45,10,1*Math.PI,0*Math.PI);
con.strokeStyle="red";
con.stroke();

con.beginPath();
con.lineWidth=5;
con.arc(45,45,15,1*Math.PI,0*Math.PI);
con.strokeStyle="orange";
con.stroke();

con.beginPath();
con.lineWidth=5;
con.arc(45,45,20,1*Math.PI,0*Math.PI);
con.strokeStyle="yellow";
con.stroke();

con.beginPath();
con.lineWidth=5;
con.arc(45,45,25,1*Math.PI,0*Math.PI);
con.strokeStyle="green";
con.stroke();

con.beginPath();
con.lineWidth=5;
con.arc(45,45,30,1*Math.PI,0*Math.PI);
con.strokeStyle="blue";
con.stroke();

con.beginPath();
con.lineWidth=5;
con.arc(45,45,35,1*Math.PI,0*Math.PI);
con.strokeStyle="indigo";
con.stroke();

con.beginPath();
con.lineWidth=5;
con.arc(45,45,40,1*Math.PI,0*Math.PI);
con.strokeStyle="#EE82EE";
con.stroke();


var a=new Image();
a.src="d.png";
a.onload=function(){
con.drawImage(a,100,100,100,100)

}

var b=new Image();
b.src="h.jpg";
b.onload=function(){
con.drawImage(b,200,100,100,100)

}

var c=new Image();
c.src="hu.jpg";
c.onload=function(){
con.drawImage(c,300,100,100,100)

}