$( document ).ready(function() {
	$('.nav-link').popover();
	$(".site-wrapper-inner").particleground({
		dotColor: '#B1D3D1',
		lineColor: '#B1D3D1',
		proximity: 200,
		parallaxMultiplier: 10
	});
	$(".site-wrapper-inner").particleground("pause");
	$("#typed").typed({
		strings: ["^600 Sophie M. Li"],
		typeSpeed: 80,
		onStringTyped: function() {
			setTimeout(function(){
				$(".fade-in").fadeTo(1500, 1);
				$(".fade-in").css("visibility", "visible");
				$(".site-wrapper-inner").particleground("start");
			  	$(".typed-cursor").css("visibility", "hidden");
			}, 100);
			
		}
	});
});