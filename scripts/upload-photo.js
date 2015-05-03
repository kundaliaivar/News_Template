



// *************************************
//
//   login.js
//   -> login and all non loggedin (nli) pages scripts
//   -> Author: Moonraft
//
// *************************************
var upload;
upload = {

	init: function() {
		this.events.bindEvents();
		console.log("entered");
		$('.mr-upload-close').on('click',function(){
			$('.mr-start-upload-message').hide();
			$('.mr-upload-hide').css({'opacity': 1});
		});
		var height = $(window).height()-288
		$(".mr-upload-page-adjustment").css("min-height",height)

		$(window).resize(function() {
			height = $(window).height()-288
			$(".mr-upload-page-adjustment").css("min-height",height)
		}); 

		$('.mr-add-files > button').on('click',function(){

			$('.mr-upload-hide > table').removeClass('mr-empty-table');
			$('#mr-11').text('coffee_photograph_9.jpg');
			$('#mr-12').text('932 KB');
			$('#mr-13').text('100%');
			$('#mr-21').text('coffee_photograph_10.jpg');
			$('#mr-22').text('233 KB');
			$('#mr-23').text('100%');
			$('#mr-31').text('coffee_photograph_11.jpg');
			$('#mr-32').text('424 KB');
			$('#mr-33').text('100%');
			
			$('.mr-upload-files').removeClass('mr-upld-fls');
			$('.mr-upload-files').on('click',function(){ 
				$('.mr-start-upload-message').show();
				$(".mr-popup-wrap-upload").removeClass('mr-hide');
				$(".mr-start-upload-message").removeClass('mr-hide');
				$('#mr-total-status').text('100%');
				$('#mr-total-size').text('1.5 MB');
				$('.mr-no-of-photos').text('3 PHOTOS');
				$('.mr-upload-files').off('click');
			});	
		});
		
		return true;
	},
	events : {
		bindEvents :function(){				
			
		}
	}
}

$(document).ready(function() {
  	upload.init();

});

