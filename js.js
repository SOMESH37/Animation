var form=1;

function over(obj){
   if(form==1)
   obj.innerHTML="I'm <b>Goku</b>"
   if(form==2)
   obj.innerHTML="<b>Super Saiyan Blue</b>"
   if(form==3)
   obj.innerHTML="<b>Mastered Ultra Instinct!</b>"
   }

function out(obj){
   if(form==1||form==2)
   obj.innerHTML="Transform!"
   if(form==3)
   obj.innerHTML="<b>Fastest and Strongest!!</b>"
}

function click1(obj){

     if(form==1){ 
     var pos = 0;
     var id = setInterval(frame, 10);
     function frame() {
     if (pos >= 35) {
     clearInterval(id);
     document.getElementById("goku21").style.display="block"; 
     document.getElementById("goku11").style.display="none";
     }else {
     pos+=2; 
     document.getElementById("goku11").style.filter = "blur("+pos+"px)";}}
     obj.innerHTML="<b>Super Saiyan Blue</b>" 
     }
     
     if(form==2){
     var pos = 0;
     var id = setInterval(frame, 10);
     function frame() {
     if (pos >= 30) {
     clearInterval(id);
     document.getElementById("goku3").style.display="block"; 
     document.getElementById("goku21").style.display="none";
     }else {
     pos+=2; 
     document.getElementById("goku21").style.filter = "blur("+pos+"px)";}}
     }
     
     form++;
     
     if(form==3){
     document.getElementById("b2").innerHTML="<b>Attack!!</b>";
     obj.innerHTML="<b>Mastered Ultra Instinct!</b>"
     }
}

function click2(obj){
	if(form==1){
		document.getElementById("goku11").style.display="none";
		document.getElementById("goku12").style.display="block"; 
		document.getElementById("fireball").style.display="block";   
        var pos = 0;
		var id = setInterval(frame, 1);
		function frame() {
		if (pos > 100) {
		clearInterval(id);
			document.getElementById("goku11").style.display="block";
			document.getElementById("goku12").style.display="none";
			document.getElementById("fireball").style.display="none";
		} else {
		pos+=0.5; 
        document.getElementById("fireball").style.left = pos + "%"; }}
		}
		
		if(form==2){
		document.getElementById("goku21").style.display="none";
		document.getElementById("goku22").style.display="block"; 
		document.getElementById("fireball").style.display="block";   
        var pos = 0;
		var id = setInterval(frame, 1);
		function frame() {
		if (pos > 100) {
		clearInterval(id);
			document.getElementById("goku21").style.display="block";
			document.getElementById("goku22").style.display="none";
			document.getElementById("fireball").style.display="none";
		} else {
		pos+=0.5; 
        document.getElementById("fireball").style.left = pos + "%"; }}
		}
		
		if(form==3){
			setInterval(frame, 20);
			document.getElementById("goku3").style.display="none";
			document.getElementById("b1").style.display="none";
			document.getElementById("b2").style.display="none";
			document.getElementById("back").style.opacity= "0.8";
			function frame(){
				var x=Math.random()*100;
				var y=Math.random()*100;
				if(x>50){
					document.getElementById("R").style.display="block";
					document.getElementById("R").style.left=x+"%";
					document.getElementById("R").style.top=y+"%";
				}
				else{
					document.getElementById("L").style.display="block";
					document.getElementById("L").style.left=x-15+"%";
					document.getElementById("L").style.top=y-7+"%";
				}	   
    var p=0,q=0,r=0;
    r=Math.floor(Math.random()*255+1);
    p=Math.floor(Math.random()*255+1);
    q=Math.floor(Math.random()*255+1);
    document.getElementById("L").style.filter= `drop-shadow(-15px 10px 10px rgb(${p},${q},${r}))`;
    document.getElementById("R").style.filter= `drop-shadow(15px 0px 10px rgb(${r},${p},${q}))`;
    }
 
}}
