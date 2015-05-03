  $(document).ready(function() { 
       var winheight = $(window).height();
      var contentHeight = $('.mr-content-position').height()
      var height =winheight +"px";      
      var errMsgOffset = 0; 
      //if($('.mr-invalid-detail-wrp').length > 0){
        if(!common.commonFunction.isSmallDevice())
          errMsgOffset = 100;
      //}


      if($('.mr-content-position').height() > winheight)
        $('.body-wrap') .css({"height":contentHeight + errMsgOffset +'px'});
      else
        $('.body-wrap') .css({"height":height});

      //Positioning nli footer at the bottom
      if(common.commonFunction.isSmallDevice()){
        if($('.mr-invalid-detail-wrp').length > 0)
          return true;

        var $container = $('.mr-content-position');
        var windowHgt = $(window).height();
        var parentContHgt = $('.body-wrap').height();
        var $smlfooter = $('.mr-footer-small-nli');
        if(windowHgt > $container.height())
          $smlfooter.css({'position':'absolute','top': parentContHgt - $smlfooter.outerHeight()});
      }

      $(window).resize(function() {
        var winheight = $(window).height();
        var height =winheight +"px";
        $('.body-wrap') .css({"height":height});
      }); 
       $('.mr-attach-file').on('click', function(){
        
        $('#mr-upload').trigger('click');
        return true;
        // console.log(2);
        $('#mr-upload-help').on('change', function(){
        var file=this.value;
          if(file.length > 0){
           
            $('.mr-attached-file-name').text(file);
          }
          else{
            $('.mr-attached-file-name').text('No file chosen');
          } 
          return true;
        });
       });
});