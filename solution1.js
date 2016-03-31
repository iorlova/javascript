function problem(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = (b * b - 4 * a * c);
    if (d<0) 
    {
       alert("no solution");
    } 
    else if (d==0)
    {
       alert("x="+(-b/2*a));
    }
    else
    {
       var x1 = (-b + Math.sqrt(d))/2*a;
       var x2 = (-b - Math.sqrt(d))/2*a;
        result.innerHTML="x1=" + x1;
        result.innerHTML="x2=" + x2;
    }
}
