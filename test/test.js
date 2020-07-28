a = 1;
$( ".one" ).click(function() {
	a = a * -1;
	// alert("a: " + a)
	if (a == 1){
		$(".two").hide();
	}
	else if (a == -1){
		$(".two").show();
	}
});