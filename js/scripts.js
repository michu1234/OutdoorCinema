// SLIDER SCRIPT //

$(".arrow-left").click(function(){
		$(".gallery__slider img:last").after($(".gallery__slider img:first"));
})

$(".arrow-right").click(function(){
	$(".gallery__slider img:first").before($(".gallery__slider img:last"));
})


