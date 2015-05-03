var catalog;
    catalog = {

		init: function() {	
			$(".mr-about-the-collapse-wrpr").on('click',function(){
				$(this).find(".mr-about-catalog-image").toggleClass("col-lg-4 col-md-4 col-sm-4 col-xs-12 mr-hidden-image");
				$(this).find(".mr-details-of-the-image").toggleClass("col-sm-8 col-md-8 col-lg-8 col-xs-12 mr-toggle-padding-left mr-toggle-padding-top");
				$(this).find(".mr-about-catalog-image").toggleClass("mr-toggle-padding-text-left mr-toggle-padding-image");
				$(this).find(".mr-about-catalog-image-details-text").toggleClass("mr-hide")
				$(this).find(".mr-icon-arrow-up").toggleClass("mr-hide")
				$(this).find(".mr-icon-arrow-down").toggleClass("mr-hide")
				
			});
			return true;
		}		
	}

$(document).ready(function() {
  	catalog.init();
});
