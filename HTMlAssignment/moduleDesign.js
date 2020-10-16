function cat(name,color)
{
    this.name=name;
    this.color=color;
}

cat.prototype.age=3;

var muff=new cat("german","brown");
var flu=new  cat("france","blue");
