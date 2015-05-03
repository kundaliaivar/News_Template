var page;
    page = {

		init: function() {	
			$(".mr-page-option-block").on('click',function(e){
				if($(this).hasClass('mr-hover-effect-neutralise')){
					$(this).removeClass('mr-hover-effect-neutralise')
					$(this).removeClass('mr-click-background');
					$(this).find('.mr-tickmark-img').addClass('mr-hide').removeClass('mr-tick-mark-click');
					$(this).find('.mr-display-text-in-hover-block').removeClass('mr-green-background');
					$(this).find('.mr-tickmark-img-hover,.mr-grid-texts').removeClass('mr-white-font-color');
				}
				else{
					$(this).addClass('mr-hover-effect-neutralise')
					$(this).addClass('mr-click-background');
					$(this).find('.mr-tickmark-img').removeClass('mr-hide').addClass('mr-tick-mark-click');
					$(this).find('.mr-display-text-in-hover-block').addClass('mr-green-background');
					$(this).find('.mr-tickmark-img-hover,.mr-grid-texts').addClass('mr-white-font-color');
					e.stopPropagation();
				}

			});
			$(".mr-page-programs-block").on('click',function(e){
				if($(this).hasClass('mr-hover-effect-neutralise')){
					$(this).removeClass('mr-hover-effect-neutralise');
					$(this).removeClass('mr-click-background');
					$(this).find('.mr-tickmark-img').addClass('mr-hide').removeClass('mr-tick-mark-click');
					$(this).find('.mr-display-text-in-hover-block').removeClass('mr-green-background');
					$(this).find('.mr-tickmark-img-hover,.mr-grid-texts').removeClass('mr-white-font-color');
				}
				else{
					$(this).addClass('mr-hover-effect-neutralise')
					$(this).addClass('mr-click-background');
					$(this).find('.mr-tickmark-img').removeClass('mr-hide').addClass('mr-tick-mark-click');
					$(this).find('.mr-display-text-in-hover-block').addClass('mr-green-background');
					$(this).find('.mr-tickmark-img-hover,.mr-grid-texts').addClass('mr-white-font-color');
					e.stopPropagation();
				}

			});
			$(".mr-page-news-block").on('click',function(e){
				if($(this).hasClass('mr-hover-effect-neutralise')){
					$(this).removeClass('mr-hover-effect-neutralise')
					$(this).removeClass('mr-click-background');
					$(this).find('.mr-tickmark-img').addClass('mr-hide').removeClass('mr-tick-mark-click');
					$(this).find('.mr-display-text-in-hover-block').removeClass('mr-green-background');
					$(this).find('.mr-tickmark-img-hover,.mr-grid-texts').removeClass('mr-white-font-color');
				}
				else{
					$(this).addClass('mr-hover-effect-neutralise')
					$(this).addClass('mr-click-background');
					$(this).find('.mr-tickmark-img').removeClass('mr-hide').addClass('mr-tick-mark-click');
					$(this).find('.mr-display-text-in-hover-block').addClass('mr-green-background');
					$(this).find('.mr-tickmark-img-hover,.mr-grid-texts').addClass('mr-white-font-color');
					e.stopPropagation();
				}

			});
			$(".mr-page-news-block").on('click',function(){
				$(this).find($('.mr-tick-image')).removeClass('mr-hide');
				$(this).addClass('mr-block-background-color-wrpr');
			});
			$(".mr-guidelines-wrpr").on('click',function(){
				$(".mr-page-options-programs").addClass('mr-hide');
				$(".mr-page-options-wrpr").addClass('mr-hide');
				$(".mr-page-selecting-templates").removeClass('mr-hide');
			});
			$(".mr-news-option-wrpr").on('click',function(){
				$(".mr-page-selecting-templates").addClass('mr-hide');
				$(".mr-page-options-programs").addClass('mr-hide');
				$(".mr-page-options-wrpr").removeClass('mr-hide');
				
			});
			$(".mr-prog-wrpr").on('click',function(){
				$(".mr-page-selecting-templates").addClass('mr-hide');
				$(".mr-page-options-wrpr").addClass('mr-hide');
				$(".mr-page-options-programs").removeClass('mr-hide');
				
			});
			$(".mr-create-new-next").on('click',function(){
				$(".mr-popup-wrapper").removeClass('mr-hide');
				$(".mr-popup-next").removeClass('mr-hide');
				
			});
			$(".mr-create-new-page-close").on('click',function(){
				$(".mr-popup-wrapper").addClass('mr-hide');
				$(".mr-popup-next").addClass('mr-hide');
				
			});
			$(".mr-create-new-image-popup").on('click',function(){
				$(".mr-popup-wrapper").addClass('mr-hide');
				$(".mr-popup-next").addClass('mr-hide');
				
			});
			


			return true;
		}		
	}

$(document).ready(function() {
  	page.init();
});
