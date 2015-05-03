var item_catalog_item_landing;
    item_catalog_item_landing = {

		init: function() {	
			var img_count=0;
			var left_count=1;
			var left_count_prev=1;
			var left_value;
			$('.mr-img-nxt').on('click', function(){
				$('.icon-ig_prev,.mr-img-prev').removeClass('mr-arrow-inactive');
				left_value=-(left_count*33.333)
				$('.mr-image-view-ul').animate({
						marginLeft : left_value+"%"
				});
				left_count+=1;
				img_count+=1;
				if(img_count===3){
					$('.icon-img_next,.mr-img-nxt').addClass('mr-arrow-inactive');
					$('.icon-ig_prev,.mr-img-prev').removeClass('mr-arrow-inactive');
				}
			});	

			$('.mr-img-prev').on('click', function(){

				$('.icon-img_next,.mr-img-nxt').removeClass('mr-arrow-inactive');
				var left_value_prev=left_count_prev*100;
				left_value=left_value+33.333
				$('.mr-image-view-ul').animate({
						marginLeft : left_value+"%"
				});
				img_count=img_count-1;
				left_count-=1;
				if(img_count===0){
					$('.icon-ig_prev,.mr-img-prev').addClass('mr-arrow-inactive');
					left_count_prev=1;	
				}
			});

			$('.mr-image-preview-list').on('click', function(){
				var image_src=$(this).attr( "src" );
				$('.mr-image-preview').attr("src",image_src);
			});
			return true;
		}		
	}

$(document).ready(function() {
  	item_catalog_item_landing.init();
});