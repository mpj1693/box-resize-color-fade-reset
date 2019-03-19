$("#button1").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#button2").click(function() {
	$("#box").css("background-color", "blue");
});

$("#button3").click(function() {
	$("#box").css("opacity", "0");
});

 $("#button4").click(function() {
	$("#box").css("background-color", "orange");
});

$("#button4").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"150px", width:"150px"}, "fast");
})

$("#button4").click(function() {
	$("#box").css("opacity", "1");
});