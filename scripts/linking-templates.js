
// *************************************
//
//   Toolbox.js
//   -> Toolbox scripts
//   -> Author: Moonraft
//
// *************************************
var linking;
    linking = {
		init: function() {

			//Binding all the events
			this.events.bindEvents();
			$('#electtrical-primer').on('click',function(){
		    	 window.open('Electric-Primer.html','_self','false');
		    });
		    $('#electrical-design').on('click',function(){
		    	 window.open('Electrical-Design.html','_self','false');
		    });
		    $('#brand-in-stores').on('click',function(){
		    	 window.open('Brand-in-store.html','_self','false');
		    });
		    $('#community-board').on('click',function(){
		    	 window.open('community-board.html','_self','false');
		    });
		    $('#mr-login-button').on('click',function(){
		    	 window.open('home.html','_self','false');
		    });
		    $('#mr-forgot-passwrd').on('click',function(){
		    	 window.open('reset-password.html','_self','false');
		    });
		    $('#mr-new-user').on('click',function(){
		    	 window.open('new-user-registration.html','_self','false');
		    });
		    $('.mr-store-of-week-wrpr').on('click',function(){
		    	 window.open('store-of-week-landing.html','_self','false');
		    });
		    $('#myCarousel').on('click',function(){
		    	 window.open('gallery-album-landing.html','_self','false');
		    });
		    $('#Americas-Catalogue').on('click',function(){
		    	 window.open('item-catalog-landing.html','_self','false');
		    });
			return true;
		},
		events:{
			bindEvents: function(){
				
			   

			}
		}

	}


$(document).ready(function() {
   linking.init();
});




