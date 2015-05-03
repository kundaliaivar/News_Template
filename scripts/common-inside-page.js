// *************************************
//
//   Common-inside-page.js
//   -> Common scripts
//   -> Author: Moonraft
//
// *************************************
var commonInsidePages;
    commonInsidePages = {

		init: function() {	
			//Table sort
			if($(".mr-table-style").length > 0)
				$(".mr-table-style").tablesorter(); 

			//Making element as fixed
			common.commonFunction.makeFixedOnVerticalScroll($('.mr-region-select-fixed'));					
			return true;
		}		
	}

$(document).ready(function() {
  	commonInsidePages.init();  	
});