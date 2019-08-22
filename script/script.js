


$(document).ready(function(){


 			$("#b1").click(function(){
		    $("#img1").fadeOut();
		    $("#img2").fadeOut("slow");
		    $("#img3").fadeOut(1000);
		  });

 			$("#b2").click(function(){
		    $("#img1").fadeIn();
		    $("#img2").fadeIn("slow");
		    $("#img3").fadeIn(1000);
		  });