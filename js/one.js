a = 1;
b = 1;
c = 1;
op1sm = ".op1sm"
Sop1sm = ".Sop1sm"
op2sm = ".op2sm"
Sop2sm = ".Sop2sm"
op3sm = ".op3sm"
Sop3sm = ".Sop3sm"
b1 = ".b1"
$( Sop1sm ).click(function() {
	a = a * -1;
	// alert("a: " + a)
	if (a == 1){
		$(op1sm).hide();
		// $(".Sop1sm").text("Описание обычного самолётика. 🠗");
	}
	else if (a == -1){
		$(op1sm).show();
		// $(".Sop1sm").text("Описание обычного самолётика. 🠕");
	}
});
$( Sop2sm ).click(function() {
	b = b * -1;
	// alert("a: " + a)
	if (b == 1){
		$(op2sm).hide();
		// $(".Sop2sm").text("Описание обычного самолётика. 🠗");
	}
	else if (b == -1){
		$(op2sm).show();
		// $(".Sop2sm").text("Описание обычного самолётика. 🠕");
	}
});
$( Sop3sm ).click(function() {
	c = c * -1;
	// alert("a: " + a)
	if (c == 1){
		$(op3sm).hide();
		// $(".Sop2sm").text("Описание обычного самолётика. 🠗");
	}
	else if (c == -1){
		$(op3sm).show();
		// $(".Sop2sm").text("Описание обычного самолётика. 🠕");
	}
});
$(b1).click(function(){
	location.replace("html/1sm.php")
});