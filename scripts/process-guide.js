$(document).ready(function() 
    { 
        $(".mr-table-style").tablesorter();
        if(!common.commonFunction.isSmallDevice())
        	common.commonFunction.makeFixedOnVerticalScroll($('.mr-prcs-guide-cont .mr-lft-nav-fixed'));
    } 
);