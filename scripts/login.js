// *************************************
//
//   login.js
//   -> login and all non loggedin (nli) pages scripts
//   -> Author: Moonraft
//
// *************************************
var login;
    login = {

		init: function() {	
			this.events.bindEvents();

			var winheight = $(window).height();
			var contentHeight = $('.mr-content-position').height()
			var height =winheight +"px";			
			var errMsgOffset = 0;	
			//if($('.mr-invalid-detail-wrp').length > 0){
				if(!common.commonFunction.isSmallDevice())
					errMsgOffset = 100;
			//}


			if($('.mr-content-position').height() > winheight)
				$('.body-wrap') .css({"height":contentHeight + errMsgOffset +'px'});
			else
				$('.body-wrap') .css({"height":height});

			//Positioning nli footer at the bottom
			if(common.commonFunction.isSmallDevice()){
				if($('.mr-invalid-detail-wrp').length > 0)
					return true;

				var $container = $('.mr-content-position');
				var windowHgt = $(window).height();
				var parentContHgt = $('.body-wrap').height();
				var $smlfooter = $('.mr-footer-small-nli');
				if(windowHgt > $container.height())
					$smlfooter.css({'position':'absolute','top': parentContHgt - $smlfooter.outerHeight()});
			}

			$(window).resize(function() {
				winheight = $(window).height();
				contentHeight = $('.mr-content-position').height()
				height =winheight +"px";			
				errMsgOffset = 0;	
			//if($('.mr-invalid-detail-wrp').length > 0){
				if(!common.commonFunction.isSmallDevice())
					errMsgOffset = 100;
			//}


			if($('.mr-content-position').height() > winheight)
				$('.body-wrap') .css({"height":contentHeight + errMsgOffset +'px'});
			else
				$('.body-wrap') .css({"height":height});

			//Positioning nli footer at the bottom
			if(common.commonFunction.isSmallDevice()){
				if($('.mr-invalid-detail-wrp').length > 0)
					return true;

				var $container = $('.mr-content-position');
				var windowHgt = $(window).height();
				var parentContHgt = $('.body-wrap').height();
				var $smlfooter = $('.mr-footer-small-nli');
				if(windowHgt > $container.height())
					$smlfooter.css({'position':'absolute','top': parentContHgt - $smlfooter.outerHeight()});
			}
			});	
			if(!common.commonFunction.isSmallDevice()){
				$('.mr-success-login-wrap .mr-footer-small-nli').css({'top':0,'position':'static'})
			}
			$(window).resize(function() {
			if(!common.commonFunction.isSmallDevice()){
				$('.mr-success-login-wrap .mr-footer-small-nli').css({'top':0,'position':'static'})
			}
			});
			$('.mr-radio-no').click(function(){			    
			    if ($(this).is(':checked'))
			    {
			    	if(!common.commonFunction.isSmallDevice()){
				      $('.body-wrap').height($('.body-wrap').height() + $('.mr-div-to-show-on-yes').height());
				      $('.mr-new-user-position').css('margin-top',$('.mr-new-user-position').css('margin-top').replace('px',"") - ($('.mr-div-to-show-on-yes').height()/2) +'px');
			  		}
			  		else{
			  			$('.mr-new-user-position').css('margin-top',0);
			  		}
			  		$(window).resize(function() {
				  		if(!common.commonFunction.isSmallDevice()){
					      $('.body-wrap').height($('.body-wrap').height() + $('.mr-div-to-show-on-yes').height());
					      $('.mr-new-user-position').css('margin-top',$('.mr-new-user-position').css('margin-top').replace('px',"") - ($('.mr-div-to-show-on-yes').height()/2) +'px');
				  		}
				  		else{

				  			$('.mr-new-user-position').css('margin-top',0);
				  		}	
			  		});
			     	$('.mr-div-to-show-on-yes').show();
			    }

			 });
			$('.mr-radio-yes').click(function(e){				
			    if ($(this).is(':checked'))
			    {
			    	if(!common.commonFunction.isSmallDevice()){
				      $('.body-wrap').height($('.body-wrap').height() - $('.mr-div-to-show-on-yes').height());
				      $('.mr-new-user-position').css('margin-top','-356px');
				    }
				    else{
				    	$('.body-wrap').css('height','auto');
				    }
				    $(window).resize(function() {
				    	if(!common.commonFunction.isSmallDevice()){
					      $('.body-wrap').height($('.body-wrap').height() - $('.mr-div-to-show-on-yes').height());
					      $('.mr-new-user-position').css('margin-top','-356px');
				    }
					    else{
					    	$('.body-wrap').css('height','auto');
					    }
				    });
			     	$('.mr-div-to-show-on-yes').hide();
			    }
			  });	
			return true;
		},
		events : {
			bindEvents :function(){				
				//Need to remove at the time of integration. Add "mr-error" class to show red border.
				$('.mr-login-btn-style').on('click',function(){
					$('.mr-invalid-detail-wrp').show();
					$('.mr-user-name-wrp').addClass("mr-error");
					$('.mr-passwrd-wrp').addClass("mr-error");
					if(!common.commonFunction.isSmallDevice())
						common.commonFunction.CalculateHeight($('.mr-content-position'));
				});
				/***login-end***/
				// $("input[]").
// n			
			}
		}		
	}

// $(document).ready(function() {
//   	login.init();

// });

// // *************************************
// //
// //   login.js
// //   -> login related scripts
// //   -> Author: Moonraft
// //
// // *************************************
// var login;
//     login = {

// 		init: function() {	
// 			this.events.bindEvents();

// 			var winheight = $(window).height();
// 			var contentHeight = $('.mr-content-position').height()
// 			var height =winheight +"px";
// 			var errMsgOffset = 100;
// 			if($('.mr-content-position').height() > winheight)
// 				$('.body-wrap') .css({"height":contentHeight +errMsgOffset+'px'});
// 			else
// 				$('.body-wrap') .css({"height":height});	

// 			$(window).resize(function() {
// 				var winheight = $(window).height();
// 				var height =winheight +"px";
// 				$('.body-wrap') .css({"height":height});
// 			});	
// 			$('.mr-radio-no').click(function(){
// 			    if ($(this).is(':checked')){
// 			    	$('.mr-div-to-show-on-yes').show();
// 			    	var winheight = $(".mr-new-user-position").height();
// 			    	var height_equaliser = -(winheight/2);
// 					var height =winheight+"px";
// 					$('.body-wrap') .css({"height":height});
// 					$('.mr-new-user-position') .css({"margin-top":height_equaliser});						
// 			    }
// 			  });
// 			$('.mr-radio-yes').click(function(){
// 			    if ($(this).is(':checked'))
// 			    {
// 			      $('.mr-div-to-show-on-yes').hide();
// 			    }
// 			  });	
// 			return true;
// 		},
// 		events : {
// 			bindEvents :function(){				
// 				//Need to remove at the time of integration. Add "mr-error" class to show red border.
// 				$('.mr-login-btn-style').on('click',function(){
// 					$('.mr-invalid-detail-wrp').show();
// 					$('.mr-user-name-wrp').addClass("mr-error");
// 					$('.mr-passwrd-wrp').addClass("mr-error");
// 					common.commonFunction.CalculateHeight($('.mr-content-position'));
// 				});
// 				/***login-end***/
// 			}
// 		}		
// 	}

$(document).ready(function() {
  	login.init();

});

