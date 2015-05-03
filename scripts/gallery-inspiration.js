



// *************************************
//
//   login.js
//   -> login and all non loggedin (nli) pages scripts
//   -> Author: Moonraft
//
// *************************************
var scenario;
scenario = {

	init: function() {
		this.events.bindEvents();
		var img_count=0;
		var left_count=1;
		var left_count_prev=1;
		var left_value;
		$('.mr-icon-nxt').on('click', function(){
			$('.mr-icon-previous').removeClass('mr-arrow-inactive');
			left_value=-(left_count*100)
			$('.mr-img-list').animate({
					marginLeft : left_value+"%"
			});
			left_count+=1;
			img_count+=1;
			if(img_count===8){
				$('.mr-icon-nxt').addClass('mr-arrow-inactive');
				$('.mr-icon-previous').removeClass('mr-arrow-inactive');
			}
		});	

		$('.mr-icon-previous').on('click', function(){

			$('.mr-icon-nxt').removeClass('mr-arrow-inactive');
			var left_value_prev=left_count_prev*100;
			left_value=left_value+100
			$('.mr-img-list').animate({
					marginLeft : left_value+"%"
			});
			img_count=img_count-1;
			left_count-=1;
			if(img_count===0){
				$('.mr-icon-previous').addClass('mr-arrow-inactive');
				left_count_prev=1;	
			}
		});

		$('.mr-gallery-insp-header .mr-upload-photos').on('click', function(){
			$('.mr-create-album-popup').show();
		});
		$('.mr-create-album-popup').on('click', function(){
			$('.mr-create-album-popup').hide();
		});
		$('.mr-create-new-album .mr-close-button').on('click', function(e){
			e.stopPropagation();
			$('.mr-create-album-popup').hide();
		});
		$('.mr-create-new-album').on('click', function(e){
			e.stopPropagation();
		});
		$('.mr-gallery-collection').on('click', function(){
			if($(this).hasClass('mr-collection-yellow')){
				$(this).removeClass('mr-collection-yellow')
			}
			else{
				$(this).addClass('mr-collection-yellow');
			}
		});
		$('.mr-gallery-grid-collection').on('click', function(){
			if($(this).hasClass('mr-collection-yellow')){
				$(this).removeClass('mr-collection-yellow')
			}
			else{
				$(this).addClass('mr-collection-yellow');
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
  	scenario.init();

});

