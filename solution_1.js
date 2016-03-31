function problem(){
    var result = document.getElementById("result");
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    
    if(!a||!b||!c) {return;}
        // return;
    
    var d = (b * b - 4 * a * c);
    if (d<0) 
    {
        result.innerHTML="no solution";
    } 
    else if (d==0)
    {
       var x1 = (-b + Math.sqrt(d))/2*a;
        result.innerHTML="x1=" + x1;
    }
    else
    {
       var x1 = (-b + Math.sqrt(d))/2*a;
       var x2 = (-b - Math.sqrt(d))/2*a;
        result.innerHTML="x1=" + x1 + "<br>" + "x2=" + x2;
    }
}
