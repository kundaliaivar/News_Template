// *************************************
//
//   Common.js
//   -> Common scripts
//   -> Author: Moonraft
//
// *************************************
var common;
    common = {

		init: function() {				
			//Binding all the events
			this.events.bindEvents();
			//Selectboxit initialization - Dropdown styling
			$('select').selectBoxIt({autoWidth: false});
			if($(".mr-tabs").length>0){
				$( ".mr-tabs" ).tabs();
			}
			//Background alignment for bigger screen
			common.commonFunction.bannerAlignment();		

			//Banner alignment
			if(common.commonFunction.isBigScreen()){
				if($('.mr-store-img.mr-right-img').length > 0){
					$('.mr-content-wrpr').css('height',($('.mr-store-img .mr-img-detls-wrpr').offset().top - $('#mr-main-content').offset().top-30) +'px');
				}
			}
			//Positioning the quick links at the bottom with and without edit icon
			common.commonFunction.quickLinksPositioning();
			common.commonFunction.searchInHeader();
			common.commonFunction.maximumNumberOfLinks();
			$(window).resize(function() {
				common.commonFunction.maximumNumberOfLinks();
				if(common.commonFunction.isSmallDevice()){
					if($('html').css("position")=="fixed"){
						var windowWidth = $(window).width();
						var menuWidth = windowWidth*.90;
						var $mobMenu = $('.mr-mob-menu');
						$mobMenu.css('height',$(window).height());
						$('.mr-mob-menu').width(menuWidth);
						$('body').css({
							"margin-left" : menuWidth+'px'
						});
					}
				}
			});
			
			return true;		
		},
		events: {
			bindEvents: function() {
				var hovElmIndex = 0;
				var menuHgt = 0;
				var menuOpened = true;
				//Main menu events - Menu flyout animation
				$('.mr-navigation ul.nav-pills li').hover(function(e){					
					e.stopPropagation();
					var $elm = $('.menu-items-detls-wrpr');
					var $menuItms = $('.mr-navigation ul.nav-pills').find('li');				
					hovElmIndex = $(this).index();
					$menuItms.removeClass('mr-menu-selected');
					$(this).addClass('mr-menu-selected');
					$elm.find('li').hide();
					$elm.find('li').eq(hovElmIndex).show();
					menuHgt = $elm.find('li').eq(hovElmIndex)[0].scrollHeight;
					$elm.css('height', menuHgt);
					menuOpened = true;
				},function(){
					
				});
				$('.mr-navigation ul.nav-pills').hover(function(){

				},function(){
					var $elm = $('.menu-items-detls-wrpr');	
					var $menuItms = $('.mr-navigation ul.nav-pills').find('li');
					$elm.css('height', 0);
					$menuItms.removeClass('mr-menu-selected');					
				});
				$('.menu-items-detls-wrpr').hover(function(e){
					e.stopPropagation();				
					var $elm = $('.menu-items-detls-wrpr');
					var menuHgt = $elm.find('li').eq(hovElmIndex)[0].scrollHeight;					
					$elm.css('height', menuHgt);
					$('.mr-navigation ul.nav-pills li').eq(hovElmIndex).addClass('mr-menu-selected');					
				},function(){
					var $elm = $('.menu-items-detls-wrpr');
					var $menuItms = $('.mr-navigation ul.nav-pills').find('li');
					$elm.css('height', 0);
					$menuItms.removeClass('mr-menu-selected');
				});
				$('body').hover(function(){
					var $elm = $('.menu-items-detls-wrpr');
					var $menuItms = $('.mr-navigation ul.nav-pills').find('li');
					$elm.css('height', 0);
					$menuItms.removeClass('mr-menu-selected');
				},function(){
					var $elm = $('.menu-items-detls-wrpr');
					if($elm.height() > 0){
						var menuHgt = $elm.find('li').eq(hovElmIndex)[0].scrollHeight;					
						$elm.css('height', menuHgt);
						$('.mr-navigation ul.nav-pills li').eq(hovElmIndex).addClass('mr-menu-selected');						
					}					
				});
					
								
				$('.mr-sub-menu-option').on('click',function(){
					var $fluidContainer = $(this).closest('.fluid-container');
					var $subMenuWrap = $fluidContainer.find('.mr-sub-menu-wrap');	
					var index=$(this).index() +1; // including the background wrapper
					//$('.mr-sub-menu-option').removeClass("mr-menu-active");
					$fluidContainer.find('.mr-sub-menu-option').removeClass("mr-menu-active");
					$(this).addClass("mr-menu-active");
					
					//$('.mr-sub-menu-wrap>div').hide();
					$subMenuWrap.children().hide();
					$subMenuWrap.children().eq($subMenuWrap.children().length -1).show();
					$('.mr-sub-menu-active-bg').show();
					//$('.mr-sub-menu-wrap>div').eq(index).show();
					$subMenuWrap.children().eq(index).show();
					var $elm = $('.menu-items-detls-wrpr');
					if($fluidContainer.find('.mr-dep-sub-menu').length > 0){
						var lftMenuHgt = $fluidContainer.find('.mr-dep-sub-menu').height();
						var offset = 50;
						if(lftMenuHgt>=$subMenuWrap[0].scrollHeight)
							$elm.css('height', lftMenuHgt+50);
						else
							$elm.css('height', $subMenuWrap[0].scrollHeight);
					}
					else{
						$elm.css('height', $subMenuWrap[0].scrollHeight);
					}
				});
				
				/******************Menu - See All *********************/
				$('.mr-see-all').on('click',function(){
					var $elm = $('.menu-items-detls-wrpr');
					var menuHgt = $elm.find('li').eq(hovElmIndex)[0].scrollHeight;					
					$(this).hide();
					$(this).closest('.mr-dep-sub-menu-detls').find('.mr-menu-links.mr-hdr-hidden-itm').removeClass('mr-hdr-hidden-itm');
					$elm.css('height', menuHgt);
				});
				/******************Menu - See All*********************/

				$('.mr-left-menulist').on('click',function(){
					$('.mr-left-menulist').removeClass("mr-menulist-active");
					$('.mr-left-menulist').find('.mr-arrow-style').hide();
					$(this).addClass("mr-menulist-active");	
					$(this).find('.mr-arrow-style').show();
				});

				$('.icon-edit-wrpr').hover(function(e){
					$(this).find('.mr-edit-style').show();					
				},function(){
					$(this).find('.mr-edit-style').hide();
				});

				$('.mr-edit-style').hover(function(e){
					$(this).show();
				});

				/******toolbox-menu*****/
				$('.mr-left-options-list').on('click',function(){
					$('.mr-left-options-list').removeClass("mr-menulist-active");
					$(this).addClass("mr-menulist-active");

				});
				$('.mr-tool-box-auto-padding .mr-dept-left-nav li').on('click',function(){
					if(this.index !=2)
						$('.mr-facilities-wrp').hide();
				});
				$('#facilities').on('click',function(){
					$('.mr-facilities-wrp').show();
				});
				/******toolbox-menu-end*****/
			

				/******************Mobile Menu events*****************/
				$('.mr-logo').on('click',function(){
					//$(".collapse").collapse();
					common.commonFunction.showMobileMenu();
				});
				$(window).resize(function() {
					if(!common.commonFunction.isSmallDevice()){
						$('body').animate({
							marginLeft : 0
						});
						$('html').css('position','relative');	
					}
				});
				$('.mr-moving-menu, .mr-menu-overlay-base').on('click',function(){
					var menuWidth =	$('.mr-mob-menu').width();
					$('body').animate({
						marginLeft : 0
					});
					$('.mr-mob-menu,.mr-mob-3rd-lev').animate({
						left : -menuWidth +'px'
					},function(){
						$('.mr-mob-menu,.mr-mob-3rd-lev').hide();
					});

					$('body').css('overflow','auto');
					$('html').css('position','relative');	
					$('.mr-mob-menu').hide();
					$('.mr-menu-overlay-base').fadeOut(300);

				});
				/*********************************************************/
				/******************************Fav Flyout*****************/
				$('body').on('click',function(){
					$('.mr-fav-wrpr').stop().slideUp(200);
					$('.mr-notification-wrpr').stop().slideUp(200);
					$('.mr-user-edit-wrpr').stop().slideUp(200);
				});
				$('.mr-like-wrpr').on('click', function(e){
					e.stopPropagation();
					setTimeout(function(){	
						$('.mr-notification-wrpr').stop().slideUp(200);	
						$('.mr-user-edit-wrpr').stop().slideUp(200);			
						$('.mr-fav-wrpr').stop().slideDown();
					},300);					
				});
				$('.mr-user-info').on('click',function(e){
					e.stopPropagation();
					setTimeout(function(){
						$('.mr-notification-wrpr').stop().slideUp(200);
						$('.mr-fav-wrpr').stop().slideUp(200);
						$('.mr-user-edit-wrpr').stop().slideDown();
					},300);
				});
				$('.mr-notfi-wrpr').on('click',function(e){
					e.stopPropagation();
					setTimeout(function(){
						$('.mr-fav-wrpr').stop().slideUp(200);
						$('.mr-user-edit-wrpr').stop().slideUp(200);			
						$('.mr-notification-wrpr').stop().slideDown();
					},300);
				});
				var farOpen = false;
				
				/*********************************************************/		
				/*********************Mobile Menu block events************/		
				$('.mr-mob-hdr-menu li').on('click',function(){
					var id = $(this).attr('id');
					//$("#mob-menu-"+id).prev().addClass('collapsed');
					$("#mob-menu-"+id).collapse('show');
					//$("#mob-menu-"+id).addClass('in');
					common.commonFunction.showMobileMenu();
				});				
				$('.mr-mob-3rd-lev-menu').on('click',function(){
					var id = $(this).attr('id');
					var $thirdLev = $('.mr-mob-3rd-lev');
					$('.mr-thrd-lvl-details').addClass('mr-hide');
					$thirdLev.find('.'+id).removeClass('mr-hide');
					$thirdLev.css('height',$(window).height());				
					common.commonFunction.show3rdLevelMenu();	
				});
				$('.mr-mob-menu-back').on('click',function(){
					var menuWidth =	$('.mr-mob-3rd-lev').width();
					var $thirdLev = $('.mr-mob-3rd-lev');					
					$('.mr-mob-3rd-lev').animate({
						left : -menuWidth +'px'
					});
					setTimeout(function(){
						$thirdLev.css('height',$(window).height()+'px');
					},50);					
					
				});

				/*********************************************************/	
				/*********************Window resize***********************/
				$(window).resize(function(){
					common.commonFunction.bannerAlignment();
					common.commonFunction.carouselPositioning();
					//Positioning the quick links at the bottom with and without edit icon
					common.commonFunction.quickLinksPositioning();
				});
				/*********************************************************/
				$('.mr-fav-hide').on('click',function(){
					$('.mr-fav-onscreen-wrpr').hide();
					$('.mr-fav-dismiss-info').show();
					
					//Bg banner alignment
					common.commonFunction.bannerAlignment();									
				});

				$('.mr-show-on-home').on('click', function(e){	
					e.stopPropagation();				
					$('.mr-fav-onscreen-wrpr').show();
					///Bg banner alignment
					setTimeout(function(){
						common.commonFunction.bannerAlignment();
					},100);
					$('.mr-fav-wrpr').stop().slideUp(200);					
				});

				$('.mr-filter-search').on('click', function(){					
					$('.mr-filters-row').toggle();
					if ($('.mr-toggle-text').text()==='+ ') {
						$('.mr-toggle-text').text('- ');
					}else{
						$('.mr-toggle-text').text('+ ');
					}
					///Bg banner alignment
					common.commonFunction.bannerAlignment();					
				});


				$('.mr-add-list').on('click', function(){
					$('.mr-add-list.mr-gallery-active-list').removeClass('mr-gallery-active-list');
					$(this).addClass('mr-gallery-active-list');
			    });	

				$('.mr-gallery-filter-header.visible-xs ').on('click', function(){					
					$('.mr-gallery-filter-body').toggle();
					$('.mr-concept-list').toggle();
					if ($('.mr-toggle-text').hasClass('icon-minus1')=== true ){
						$('.mr-toggle-text').removeClass('icon-minus1');
						$('.mr-toggle-text').addClass('icon-plus1');
					}else{
						// $('.mr-toggle-text').empty();
						$('.mr-toggle-text').addClass('icon-minus1');
						$('.mr-toggle-text').removeClass('icon-plus1');
					}
					///Bg banner alignment
					common.commonFunction.bannerAlignment();					
				});
				$('.mr-fav-dismiss').on('click',function(){
					$('.mr-fav-dismiss-info').hide();
					///Bg banner alignment
					common.commonFunction.bannerAlignment();
				});

				//Item Catalogue All Concepts
				$('#mr-allconcept-select').on('change', function(){
					var allconcept = $('#mr-allconcept-select option:selected').text();
					$('.mr-concept-name-selected').text(allconcept);
					if($('#mr-allconcept-select option:selected').text()==='All Concepts'){
						$('.mr-abt-cncpt').hide();
						$('.mr-all-concepts-spacing-top .mr-button-send').hide();
					}
					else{
						$('.mr-abt-cncpt').show();
						$('.mr-all-concepts-spacing-top .mr-button-send').show();
					}
				});
				

				
				$('.mr-gallery-grid-images .col-xs-12 img,.mr-concept-width .mr-subtitle-img-wrap, .mr-concept-width-2 .mr-subtitle-img-wrap').on('click', function(){
					$('.mr-gallery-popup').show();
					$('.mr-gallery-popup').prev().hide();
				});

				$('.mr-gallery-table-tr-3 span').on('click', function(){
					$('.mr-gallery-popup').show();
					$('.mr-gallery-popup').prev().hide();
				})
				$('.mr-gallery-popup').on('click', function(){
					$('.mr-gallery-popup').hide();
					$('.mr-gallery-popup').prev().show();
				});
				$('.icon-close.mr-close-button').on('click', function(e){
					e.stopPropagation();
					$('.mr-gallery-popup').hide();
					$('.mr-gallery-popup').prev().show();
				});

				$('.mr-large-view-container').on('click', function(e){
					e.stopPropagation();
				});

				//Error messages
				$('.mr-information-box .icon-close').on('click', function(){
					$('.mr-information-box').slideUp();

				});

				$('.mr-danger-box .icon-close').on('click', function(){
					$('.mr-danger-box').slideUp();

				});

				$('.mr-success-box .icon-close').on('click', function(){
					$('.mr-success-box').slideUp();

				});

				$('.mr-warning-box .icon-close').on('click', function(){
					$('.mr-warning-box').slideUp();

				});

				//My Page
				$('.mr-my-page-message .icon-close').on('click', function(){
					$('.mr-my-page-message').slideUp();

				});
    			  			
    			$('.mr-create-page-header span').on('click', function(){
    				$('.mr-breadcrumb.mr-flowr-bckgrnd').slideUp();
    			});

    			//Item Catalog All Concept
    			$('.mr-concept-fir > input[type="checkbox"]').on('change', function () {

					if($('.mr-concept-fir input[type="checkbox"]').is(':checked')){
						$(".mr-concept-shrtcts-1").show();
						}  
						else{
						$(".mr-concept-shrtcts-1").hide();
						
						}  
				});
				 $('.mr-concept-sec > input[type="checkbox"]').on('change', function () {

					if($('.mr-concept-sec input[type="checkbox"]').is(':checked')){
						$(".mr-concept-shrtcts-2").show();
						}  
						else{
						$(".mr-concept-shrtcts-2").hide();
						
						}  
				});

				$('.mr-concept-filter.visible-xs ').on('click', function(){					
					$('.mr-concept-list').toggle();
					if ($('.mr-conecept-toggle').text()==='+ ') {
						$('.mr-conecept-toggle').text('- ');
					}else{
						$('.mr-conecept-toggle').text('+ ');
					}
				});

				var radios = $('.mr-concept-btns input[type=radio]');
			    radios.on('change', function() {
			        radios.each(function() {
			            var radio = $(this);
			            radio.closest('.mr-concept-btns')[radio.is(':checked') ? 'addClass' : 'removeClass']('mr-concept-active');
			        });
			    });



			    $('#mr-concepth1').on('click', function(event) {
			        if(this.checked) { 
			            $('.mr-concept-1').each(function() {
			                this.checked = true;              
			            });
			        }else{
			            $('.mr-concept-1').each(function() { 
			                this.checked = false;
			                $(".mr-concept-shrtcts-1").hide();                       
			            });         
			        }
    			});

    			$('#mr-concepth2').on('click', function(event) {
			        if(this.checked) { 
			            $('.mr-concept-2').each(function() {
			                this.checked = true;              
			            });
			        }else{
			            $('.mr-concept-2').each(function() { 
			                this.checked = false;   
			                $(".mr-concept-shrtcts-2").hide();                    
			            });         
			        }
    			});

    			//home updates
    			$('.mr-fav-header .icon-close').on('click', function(){
    				$('.mr-fav-overlay').hide();
    				$('.mr-popup-wrap-2').hide();
    			});

    			$('.mr-update-done').on('click', function(){
    				$('.mr-popup-wrap-2').hide();
    				$('.mr-update-overlay').hide();
    			});

    			$('.mr-create-page-rht-top .mr-upld-ph').on('click', function(){
    				$('#create-page-file-id').click();
    				return true;
    			})
    

    			
				if(!common.commonFunction.isSmallDevice()){
					
					if($(".mr-js-scrollable-link").length>0){
						$this = $(".mr-js-scrollable-link");
						var initialWidth = $this.width();
						var initialLeft = $this.offset().left;
						var aheight = $this.offset().top-20;
						$(window).scroll(function () {	        	
					        if ($(this).scrollTop() >= aheight) {
					            $this.css({"position" :"fixed", "width":initialWidth, "left":initialLeft, "top":"-10px", "margin-top":"36px"});
					            	//+$('.mr-js-scrollable-link').height()
					             if($('body').scrollTop() + $('.mr-js-scrollable-link').height() >= $('.mr-comments-section').offset().top - 40){
			                           $this.css({"position":"static","width":"90%", "margin-top":(($('.mr-comments-section').offset().top -($('#mr-main-content').offset().top + $('.mr-breadcrumb').height())) - $('.mr-js-scrollable-link').height() - 52)});
			                     }

					        }
					        else {
					            $this.css({"position":"static","width":"90%"});
					        }
					    });
					}

					$(window).resize(function() {
						if($(".mr-js-scrollable-link").length>0){
						$this = $(".mr-js-scrollable-link");
						var initialWidth = $this.width();
						var initialLeft = $this.offset().left;
						var aheight = $this.offset().top-20;
						$(window).scroll(function () {	        	
					        if ($(this).scrollTop() >= aheight) {
					            $this.css({"position" :"fixed", "width":initialWidth, "left":initialLeft, "top":"-10px", "margin-top":"36px"});
					            	//+$('.mr-js-scrollable-link').height()
					             if($('body').scrollTop() + $('.mr-js-scrollable-link').height() >= $('.mr-comments-section').offset().top - 40){
			                           $this.css({"position":"static","width":"90%", "margin-top":(($('.mr-comments-section').offset().top -($('#mr-main-content').offset().top + $('.mr-breadcrumb').height())) - $('.mr-js-scrollable-link').height() - 52)});
			                     }

					        }
					        else {
					            $this.css({"position":"static","width":"90%"});
					        }
					    });
					}

					});
				
				}
				

			}
		},
		commonFunction:{
			isSmallDevice: function(){
				var windowWidth = $(window).width();
				var isSmall = true;
				if(windowWidth < 768){
					isSmall = true;
				}
				else{
					isSmall = false;
				}
				return isSmall;		
			},
			isBigScreen: function(){
				var windowWidth = $(window).width();
				var isbig = true;
				if(windowWidth > 1500){
					isbig = true;
				}
				else{
					isbig = false;
				}
				return isbig;	
			},
			showMobileMenu: function(){
				$('body').css('overflow','hidden');
				$('html').css('position','fixed');				
				var windowWidth = $(window).width();
				var menuWidth = windowWidth*.90;
				$('.mr-mob-menu').show();
				var $mobMenu = $('.mr-mob-menu');
				$mobMenu.css('height',$(window).height());
				$('.mr-mob-menu').css('margin-left',0);
				$('.mr-mob-menu').width(menuWidth);
				$('body').css('width','100%');
				$('body').animate({
					marginLeft : menuWidth+'px'
				});
				$('.mr-mob-menu').animate({
					left : 0
				});		
				$('.mr-menu-overlay-base').fadeIn(200);
				$('.mr-menu-overlay-base').css('height',$('.mr-mob-menu').height());
				
			},
			show3rdLevelMenu: function(){
				$('body').css('overflow','hidden');
				$('html').css('position','fixed');	
				var windowWidth = $(window).width();
				var menuWidth = windowWidth*.90;
				$('.mr-mob-3rd-lev').show();
				var $mobMenu = $('.mr-mob-menu');
				$mobMenu.css('height',$(window).height());
				$('.mr-mob-3rd-lev').css('margin-left',0);
				$('.mr-mob-3rd-lev').width(menuWidth);
				$('body').css('width','100%');
				$('body').animate({
					marginLeft : menuWidth+'px'
				});
				$('.mr-mob-3rd-lev').animate({
					left : 0
				});				
				$('.mr-menu-overlay-base').fadeIn(200);
			},
			pixelToPercentage: function(px){				
				return (px/$(window).height())*100;
			},
			bannerAlignment: function(){
				//Banner alignment
				if(common.commonFunction.isBigScreen()){
					setTimeout(function(){
						if($('.mr-store-img.mr-right-img').length > 0){
							$('.mr-content-wrpr').css('height',($('.mr-img-detls-wrpr.mr-edit-wrappr').offset().top - $('#mr-main-content').offset().top-30) +'px');
						}	
					});
					
				}
				else{
					setTimeout(function(){
						if($('.mr-store-img.mr-right-img').length > 0){
							$('.mr-content-wrpr').css('height',($('.mr-img-detls-wrpr.mr-edit-wrappr').offset().top - $('#mr-main-content').offset().top-30) +'px');
						}
					});
				}
			},
			carouselPositioning: function(){
				if($('.mr-right-img').length > 0){
					$('.carousel-inner .mr-store-img').height($('.mr-right-img').height() + 'px');
					$('.carousel-inner .mr-img-detls-wrpr').height($('.mr-right-img-wrpr .mr-img-detls-wrpr').height() + 'px');				
				}
			},
			quickLinksPositioning: function(){
				if($(window).width() > 1060){
					if($(".mr-quick-link-edit").length>0){
						$('.mr-quick-link-edit').show();
						$(".mr-home-quick-link").width($(window).width()*.8-$(".mr-quick-link-edit").outerWidth()-$(".mr-quick-link-edit").css("marginLeft").replace('px', ''))
					}
				}
				else{
					$('.mr-quick-link-edit').hide();
					$(".mr-home-quick-link").css('width', 'auto');
				}
			},
			makeFixedOnVerticalScroll: function($element){
				
				if($element.length>0){
					
					var initialWidth = $element.width();
					var initialLeft = $element.offset().left;
					var aheight = $element.offset().top;
					if($(window).width() > 1000){
						$(window).scroll(function (e) {
							e.stopPropagation();
					        if ($element.scrollTop() >= aheight) {
					            $element.css({"position" :"fixed", "width":initialWidth,  "left":initialLeft});
					        }
					        else {
					            $element.css({"position":"static"});
					        }
					    });
					}

				}	
			},
			CalculateHeight: function($element){
				var height= $element.height();
				$element.css({"margin-top":-height/2});
			},
			searchInHeader: function(){
				$('.mr-search-head-icon').on("click",function(){
					var $this = $(this)
					$this.parent().addClass("active")
					$this.next().addClass("active");
				});
				$('.mr-search-close-icon').on("click",function(){
					var $this = $(this)
					$(this).parent().removeClass("active");
					$(this).parent().parent().removeClass("active");
				});
			},
			maximumNumberOfLinks: function(){
				var $quickLinks = $(".mr-home-quick-link li");
				if(!common.commonFunction.isSmallDevice()){					
					var numberOfLinks = $quickLinks.length;	
					var percentage = ($('.mr-home-quick-link').outerWidth()-1)/numberOfLinks;
					console.log(percentage);
					$quickLinks.outerWidth(percentage)
				}else{
					$quickLinks.outerWidth($('.mr-home-quick-link').outerWidth()/2)
				}
			}
		}
	}

$(document).ready(function() {
  	common.init();
});