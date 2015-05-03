var help;
    help = {

		init: function() {	
			$( "#mr-topic-id" ).change(function() {
  			$(".mr-faq-content-wrpr").show();
			});	
			if(common.commonFunction.isSmallDevice()){
						$("#mr-new-tckt-tab").removeClass('ui-tabs-active');
						$(".mr-tab-content-wrap").addClass('mr-hide');
						$(".mr-tab-box").removeClass('ui-tabs-active','ui-state-active');

						$(".mr-tab-box").on('click',function(){
							$(".mr-tab-list").addClass('mr-hide');
							$(".mr-tab-content-wrap").removeClass('mr-hide');
						});

						$("#mr-new-tckt-tab").on('click',function(){
							$("#mr-help-heading").addClass('mr-hide');
							$("#mr-raise-a-tckt-headng").removeClass('mr-hide-imp');
						});
						$("#mr-my-tckt-tab").on('click',function(){
							$("#mr-help-heading").addClass('mr-hide');
							$("#mr-my-tckt-heading").removeClass('mr-hide-imp');
						});
						$("#mr-ask-inbox-tab").on('click',function(){
							$("#mr-help-heading").addClass('mr-hide');
							$("#mr-ask-inbox-heading").removeClass('mr-hide-imp');
						});
						$("#mr-help-articles-tab").on('click',function(){
							$("#mr-help-heading").addClass('mr-hide');
							$("#mr-help-articles-heading").removeClass('mr-hide-imp');
						});
						$("#mr-how-to-tab").on('click',function(){
							$("#mr-help-heading").addClass('mr-hide');
							$("#mr-help-howto-heading").removeClass('mr-hide-imp');
							$("#mr-help-how-srch").removeClass('mr-hide-imp');
						});
						$(".mr-help-back-btn").on('click',function(){
							$(".mr-tab-heading-wrap").addClass('mr-hide-imp');
							$("#mr-help-heading").removeClass('mr-hide');
							$(".mr-tab-list").removeClass('mr-hide');
							$(".mr-tab-content-wrap").addClass('mr-hide');

						});
						
					}
					
					// var windowWidth = $(window).width();
					// if(windowWidth === 768 ){
					    
			$(window).on('resize', function(event){
				if($(window).width() > 768){
					$(".mr-tab-list").removeClass('mr-hide');
					$(".mr-tab-list").show();
					$("#mr-help-heading").removeClass('mr-hide');
					//$(".mr-tab-box").addClass('ui-tabs-active','ui-state-active', 'ui-state-default');
					$(".mr-tab-content-wrap").removeClass('mr-hide');
						$(".mr-tab-box").on('click',function(){
							$(".mr-tab-list").removeClass('mr-hide');
							$(".mr-tab-list").show();
						});
						// event.stopPropagation();
				}
				else if($(window).width() < 768){
						$("#mr-new-tckt-tab").removeClass('ui-tabs-active');
						// $(".mr-tab-list").addClass('mr-hide');
						$(".mr-tab-box").removeClass('ui-tabs-active','ui-state-active');
						// $(".mr-tab-content-wrap").addClass('mr-hide');
						if($('.mr-tab-list').hasClass('mr-hide')){

						}
						else{
							$(".mr-tab-content-wrap").addClass('mr-hide');
							// $(".mr-tab-heading-wrap").addClass('mr-hide-imp');
							$(".mr-help-tab-heading").addClass('mr-hide');
							$("#mr-help-heading").removeClass('mr-hide');
							$("#mr-help-how-srch").addClass('mr-hide-imp');

						}
									

						$(".mr-tab-box").on('click',function(){
							$(".mr-tab-list").addClass('mr-hide');
							$(".mr-tab-content-wrap").removeClass('mr-hide');
							$(".mr-help-tab-heading").removeClass('mr-hide');
						});
						

						$("#mr-new-tckt-tab").on('click',function(){
							$("#mr-help-heading").addClass('mr-hide');
							$("#mr-raise-a-tckt-headng").removeClass('mr-hide-imp');
							
						});

						$("#mr-my-tckt-tab").on('click',function(){
							$("#mr-help-heading").addClass('mr-hide');
							$("#mr-my-tckt-heading").removeClass('mr-hide-imp');
						});

						$("#mr-ask-inbox-tab").on('click',function(){
							$("#mr-help-heading").addClass('mr-hide');
							$("#mr-ask-inbox-heading").removeClass('mr-hide-imp');
						});
						$("#mr-help-articles-tab").on('click',function(){
							$("#mr-help-heading").addClass('mr-hide');
							$("#mr-help-articles-heading").removeClass('mr-hide-imp');
						});
						$("#mr-how-to-tab").on('click',function(){
							$("#mr-help-heading").addClass('mr-hide');
							$("#mr-help-howto-heading").removeClass('mr-hide-imp');
							$("#mr-help-how-srch").removeClass('mr-hide-imp');
						});
						$(".mr-help-back-btn").on('click',function(){
							$(".mr-tab-heading-wrap").addClass('mr-hide-imp');
							$("#mr-help-heading").removeClass('mr-hide');
							$(".mr-tab-list").removeClass('mr-hide');
							$(".mr-tab-content-wrap").addClass('mr-hide');

						});
					// if(!common.commonFunction.isSmallDevice()){
						
					// }
				}

			});


							
				

					$('.mr-attach-file').on('click', function(){
    				$('#upload-hlp').click();
    				return true;
    				
					// $(".mr-attach-file").on('click', function(e){
					// 		console.log('entered');
     //    					e.preventDefault();
     //    					$("#upload").trigger('click');
        					 $('#upload').on('change', function(){
						        var file=this.value;
						          if(file.length > 0){
						           
						            $('.mr-attached-file-name').text(file);
						          }
						          else{
						            $('.mr-attached-file-name').text('No file chosen');
						          } 
						          
						        
    					});
        			});
        			

			return true;
		}		
	}

$(document).ready(function() {
  	help.init();
});
