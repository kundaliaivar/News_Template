// *************************************
//
//  gallery-album-loading.js
//   -> Gallery Album Loading
//   -> Author: Moonraft
//
// *************************************
var gallery_view;
    gallery_view = {

		init: function() {				
		
				$('.mr-gallery-list-id').on('click',function(){
					$('.mr-gallery-grid-id').removeClass('mr-gallery-view-active').addClass('mr-gallery-view-inactive');
					$(this).removeClass('mr-gallery-view-inactive').addClass('mr-gallery-view-active');
					$('.mr-gallery-grid-view').css("display","none");
					$('.mr-gallery-list-view').css("display","block"); 
									});

				$('.mr-gallery-grid-id').on('click',function() {
					$('.mr-gallery-list-id').removeClass('mr-gallery-view-active').addClass('mr-gallery-view-inactive');
					$(this).removeClass('mr-gallery-view-inactive').addClass('mr-gallery-view-active');
					$('.mr-gallery-grid-view').css("display","block");
					$('.mr-gallery-list-view').css("display","none"); 

				});


				$('input[type="checkbox"').on('change', function () {

					if($('input[type="checkbox').is(':checked')){
						$(".mr-delete-photos").show();
						}  // checked
						else{
						$(".mr-delete-photos").hide();
						}  // unchecked
				});

				//	$('.mr-gallery-img-active').removeClass('mr-gallery-img-active')addClass('mr-gallery-img-inactive');
				//	$('.mr-gallery-img-inactive').removeClass('mr-gallery-img-inactive').addClass('mr-gallery-img-active')
				
			}
		}

$(document).ready(function() {
  	gallery_view.init();
});