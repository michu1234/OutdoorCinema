// SLIDER SCRIPT //

var slider = $(".gallery__slider");
var left_arrow = $(".arrow-left");
var right_arrow = $(".arrow-right");


right_arrow.click(function(){
	slider.css({marginLeft: "=+200px"});
})
