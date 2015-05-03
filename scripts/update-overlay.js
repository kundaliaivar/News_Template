



// *************************************
//
//   login.js
//   -> login and all non loggedin (nli) pages scripts
//   -> Author: Moonraft
//
// *************************************
var update_overlay;
update_overlay = {

	init: function() {
		this.events.bindEvents();
		if(!common.commonFunction.isSmallDevice()){
			var update_height=$('.mr-update-overlay').height();
			$('.mr-update-overlay').css({'margin-top':-update_height/2});
		}
		if(common.commonFunction.isSmallDevice()){
			$('.mr-update-overlay').css({'margin-top':0,'top':'40px'});
		}
		$(window).resize(function() {
			if(!common.commonFunction.isSmallDevice()){
				update_height=$('.mr-update-overlay').height();
				$('.mr-update-overlay').css({'height':-update_height/2});
				}

			if(common.commonFunction.isSmallDevice()){
				$('.mr-update-overlay').css({'margin-top':0,'top':'40px'});
			}	
		});

		return true;
	},
	events : {
		bindEvents :function(){	
	
		}
	}
}

$(document).ready(function() {
  	update_overlay.init();

});

