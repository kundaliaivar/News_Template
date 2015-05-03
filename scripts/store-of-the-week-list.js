



// *************************************
//
//   login.js
//   -> login and all non loggedin (nli) pages scripts
//   -> Author: Moonraft
//
// *************************************
var storeoftheweeklist;
storeoftheweeklist = {

	init: function() {
		this.events.bindEvents();
		$( "#date-picker-from" ).datepicker();
		$( "#date-picker-to" ).datepicker();
		
		return true;
	},
	events : {
		bindEvents :function(){	
		
			
		}
	}
}

$(document).ready(function() {
  	storeoftheweeklist.init();

});

