



// *************************************
//
//   login.js
//   -> login and all non loggedin (nli) pages scripts
//   -> Author: Moonraft
//
// *************************************
var howto;
howto = {

	init: function() {
		this.events.bindEvents();
		$('input[type="checkbox"]').on('change', function (){
			if($('input[type="checkbox"]').is(':checked')){
					$('.mr-help-delete').removeClass('mr-hide');
				}  
				else{
				$(".mr-concept-shrtcts").hide();
					$('.mr-help-delete').addClass('mr-hide');
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
  	howto.init();

});

