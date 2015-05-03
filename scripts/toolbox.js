// *************************************
//
//   Toolbox.js
//   -> Toolbox scripts
//   -> Author: Moonraft
//
// *************************************
var toolbox;
    toolbox = {
		init: function() {

			//Binding all the events
			this.events.bindEvents();
			if(!common.commonFunction.isSmallDevice()){
				common.commonFunction.makeFixedOnVerticalScroll($('.mr-tool-lft-nav-fixed'));
				common.commonFunction.makeFixedOnVerticalScroll($('.mr-search-result-left-panel'));
				 }

			$('.mr-table-style-1').tablesorter({
        headers: {
            1: { sorter: false },
            2: { sorter: false }
       		 }
    		});
				 return true;
		},
		events:{
			bindEvents: function(){
				$('.mr-sel-box-dep').on("change", function(){
					var $facilities = $('.mr-facilities-select .mr-select-wrp');
			       if($(this).val() === "FACILITIES" )
			       		$facilities.show();
			       	else
			       		$facilities.hide();
			    });	

			   

			}
		}

	}


$(document).ready(function() {
   toolbox.init();
});




