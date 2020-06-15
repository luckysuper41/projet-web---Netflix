

//hieu ung scroll
$(document).ready(function() {
	$(window).scroll(function(event) {
		var pos_body = $('html,body').scrollTop();

		// console.log(pos_body);
		if(pos_body>1000){
			$('.back-to-top').addClass('show_btt');
		}
		else{
			$('.back-to-top').removeClass('show_btt');
		}
	});
	$('.back-to-top').click(function(event) {
		$('html,body').animate({
			scrollTop: 0},
			1400);
	});
});
