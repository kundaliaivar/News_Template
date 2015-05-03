// *************************************
//
//  upload-photos.js
//   -> upload Photos script
//   -> Author: Moonraft
//
// *************************************
var upload;
upload = {
	init: function() {
		$('.mr-upload-close').on('click',function(){
			$('.mr-start-upload-message').hide();
			$('.mr-upload-hide').css({'opacity': 1});

		});

		$('.mr-add-files').on('click',function(){
			var file1, file2, file3;
			$('.mr-table-space').hide();
			$('.mr-table-body').removeClass('mr-hide');
			$('#mr-total-size').text('1.5 MB');
			$('.mr-upload-files > button').hover(function(){
				$('.mr-upload-files > button').css({'cursor': 'pointer', 'background':'green', 'color':'white', 'border':'green' });
    		});
			$('.mr-upload-files').on('click',function(){
				$('.mr-start-upload-message').show();
				$('.mr-upload-hide').css({'opacity' : 0.3});
				$('#mr-total-status').text('100%');
				$('.mr-upload-files').off('click');
			});				
			var input, file1, file2, file3;
		});
	}	
}

$(document).ready(function() {
  	upload.init();
});