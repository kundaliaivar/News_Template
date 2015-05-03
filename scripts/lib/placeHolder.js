$(document).ready(function() {

	function IEplaceHolder(){
                $('input[type="text"][placeholder],input[type="password"][placeholder], textarea[placeholder]').each(function () {
                    var obj = $(this);

                    if (obj.attr('placeholder') != '') {
                        obj.addClass('IePlaceHolder');

                        if ($.trim(obj.val()) == '') {
                            obj.val(obj.attr('placeholder'));
                        }
                    }
                });

                $('.IePlaceHolder').focus(function () {
                    var obj = $(this);
                    if (obj.val() == obj.attr('placeholder')) {
                        obj.val('');
                    }
                });

                $('.IePlaceHolder').blur(function () {
                    var obj = $(this);
                    if ($.trim(obj.val()) == '') {
                        obj.val(obj.attr('placeholder'));
                    }
                });
            }
   
	

	IEplaceHolder();
   

});