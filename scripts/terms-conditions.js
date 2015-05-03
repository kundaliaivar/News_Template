



// *************************************
//
//   login.js
//   -> login and all non loggedin (nli) pages scripts
//   -> Author: Moonraft
//
// *************************************
var terms;
terms = {

	init: function() {
		this.events.bindEvents();
		var win_height=$(window).height();
		$('body').css({'height':win_height});
		var terms_head=$('.mr-term-con-head').height();
		var terms_foot=$('.mr-term-con-fotter').height();
		var height_of_term= 0.8*win_height-26;
		$('.mr-term-con-text').css({'max-height':height_of_term-terms_head-terms_foot});
		var terms_height=$('.mr-terms-con-body').height();
		var terms_width=$('.mr-terms-con-body').width();
		$('.mr-terms-con-body').css({'margin-top':-terms_height/2,'margin-left':-terms_width/2
		});
		$(window).resize(function() {
			var win_height=$(window).height();
			$('body').css({'height':win_height});
			var terms_head=$('.mr-term-con-head').height();
			var terms_foot=$('.mr-term-con-fotter').height();
			var height_of_term= 0.8*win_height-26;
			$('.mr-term-con-text').css({'max-height':height_of_term-terms_head-terms_foot});
			var terms_height=$('.mr-terms-con-body').height();
			var terms_width=$('.mr-terms-con-body').width();
			$('.mr-terms-con-body').css({'margin-top':-terms_height/2,'margin-left':-terms_width/2
			});		
	});

	$('input[type="checkbox"]').on('change', function (){
		if($('input[type="checkbox"]').is(':checked')){
				$('.mr-trms-box .mr-button-send').addClass('mr-terms-butn-active');
			}  
			else{
				$('.mr-trms-box .mr-button-send').removeClass('mr-terms-butn-active');
			}  
	});
	
		return true;
	},
	events : {
		bindEvents :function(){	
		$(window).resize(function() {
			if(common.commonFunction.isSmallDevice()){
				$('.mr-gallery-list-view').hide();
				$('.mr-gallery-grid-view').show();
			}
		});	

		if(!common.commonFunction.isSmallDevice()){
				$('.mr-popup-wrap .mr-footer').hide();
			}
			
		$(window).resize(function() {
			if(!common.commonFunction.isSmallDevice()){
				$('.mr-popup-wrap .mr-footer').hide();
			}
		});		
			
		}
	}
}

$(document).ready(function() {
  	terms.init();

});

