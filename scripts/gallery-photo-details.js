/*
function () {
	$('.mr-pdetails-arrow-right'.click(function(){
		$('.mr-pdetails-arrow-right').addClass('mr-hide');
		$('.mr-pdetails-done-bt').remove('mr-hide');
		$('.mr-pdetails-prv-page').text("3 OF 3")
	})

*/
// *************************************
//
//   login.js
//   -> login and all non loggedin (nli) pages scripts
//   -> Author: Moonraft
//
// *************************************
var photoDetails;
photoDetails = {
	init: function() {
		this.events.bindEvents();
		var img_height=.48*($(window).width());
		$('.mr-pdetails-lwr-details').css({'max-height':img_height,'overflow': 'auto'});
		$(window).resize(function() {
			img_height=.48*($(window).width());
			$('.mr-pdetails-lwr-details').css({'max-height':img_height,'overflow': 'auto'});
		});
		$('.mr-pdetails-arrow-right').on('click',function(){
			$(this).addClass('mr-hide');
			$('.mr-pdetails-done-bt').removeClass('mr-hide');
			$('.mr-pdetails-prv-page').text("3 OF 3")
		}); 
		$('.mr-pdetails-arrow-left').on('click',function(){
			$('.mr-pdetails-arrow-right').removeClass('mr-hide');
			$('.mr-pdetails-done-bt').addClass('mr-hide');
			$('.mr-pdetails-prv-page').text("2 OF 3")
		});

		return true;
	},
	events : {
		bindEvents :function(){	
		}
	}
}

$(document).ready(function(){
  	photoDetails.init();
});



