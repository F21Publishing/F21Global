
$(function(){
	/* Mobile Slide Menu */
	$(".icon_menu").on("click",function() {
		$("body, .c_container, .mobile_overlay, .l_container, .signup_wrapper").addClass("open");
	});
	$(".mobile_overlay").on("click", function () {
		$("body, .c_container, .mobile_overlay, .l_container,.signup_wrapper").removeClass("open");
	});

    /* Address Book Right Slide */
	$(".btn_right_side").on("click", function () {
	    $(".r_container, .desktop_overlay").addClass("open");
	    $("body").css("overflow-y","hidden");
	});
	$(".r_container .icon_close, .desktop_overlay").on("click", function () {
	    $(".r_container, .desktop_overlay").removeClass("open");
	    $('#divQuickView').html('');
	    $("body").css("overflow-y","auto");
	});

	/* Mobile Search Box */
	$(".m_header .nav_secondary .icon_search").on("click",function(){
		$(".m_search_container").slideToggle();
	});
	$(".m_search_container .icon_close").on("click",function(){
   		$(".m_search_container").slideToggle();
   	});
	

	/* Desktop Search Box */
	$(".show_desktop .icon_search").click(function(){
   		$(".d_search_container").animate({width: 'toggle'});
   	});
   	$(".d_search_container .icon_close").click(function(){
   		$(".d_search_container").animate({width: 'toggle'});
   	});
	
	/* Scroll */
	$(window).scroll(function () {
	    if ($(this).scrollTop() > 400) {
	        $('.scrollToTop').fadeIn();
	    } else {
	        $('.scrollToTop').fadeOut("fast");
	    }
	});
	$('.scrollToTop').click(function () {
	    $('html, body').animate({
	        scrollTop: 0
	    }, 900);
	    return false;
	});

	/* Mobile Left Menu */
	$('.l_container .mega_menu').each(function () {
	    $(this).click(function () {
	        $(this).toggleClass('active');
            $(this).find('.mega_sub').slideToggle();
	    });
	});

    /* Dropdown */
    $('.drop_p').each(function () {
        $(this).click(function () {
            if ($(this).next().hasClass('drop_c')) 
                $(this).next().toggleClass('open');
            else 
                $(this).children('.drop_c').toggleClass('open');
        });
    });
	$('div.drop_c.b_gray').each(function () {
	    $(this).click(function () {
	        $(this).toggleClass('open');
	    });
	});

    /* Checkout Slide */
	$('.expand_p').each(function () {
	    $(this).off('click');
	    $(this).click(function () {
	        $(this).toggleClass('active');
	        $(this).next().slideToggle();
	    });
	});

    /* Input*/
	$('.input_label').each(function () {
	    $(this).click(function () {
	        $(this).children('input').focus();
            $('.input_label').each(function () {
                if ($(this).children('input').val() == '') {
                    $(this).removeClass('focus');
                    $(this).find('.icon_delete').hide();
                }
            });
			$(this).addClass('focus');
	    });

        /* Focus and focusout for input */
	    $(this).find('input').focus(function () {
	        $(this).parent('.input_label').addClass('focus');
	    }).blur(function () {
	        if ($(this).val() == '') {
	            $(this).parent('.input_label').removeClass('focus');
	            $(this).parent('.input_label').find('.icon_delete').hide();
	        }
	    });

        // show and hide delete icon
	    $(this).find('input').keydown(function () {
	        if ($(this).val() == '') 
	            $(this).parent('.input_label').find('.icon_delete').hide();
	        else
	            $(this).parent('.input_label').find('.icon_delete').show();
	    });
	});

	/* Mobile Dropmenu */
	window.onresize = function(event) {
	    if (window.innerWidth > 767) {
	        $('.nav_c').show();
	        $('#left_menu').show();
	        $('#account_left_menu').attr('style', '');
	    }
	};

	if (window.innerWidth > 767) {
	    $('.nav_c').show();
	    $('#left_menu').show();
	    $('#account_left_menu').attr('style', '');
	}

	/* Filter Dropdown */
	$('.m_filer').click(function(){
	    $('.side_menu').slideToggle();
	    $('header').css('z-index', '1');
	    $('.side_content').css('position', 'fixed !important');
	    $('footer').css('position', 'fixed !important');
	    $('body').css({ 'position': 'fixed', 'overflow-y': 'hidden' });
	});

    /* clear input */
    $('.icon_delete').click(function(){
        $(this).parent('.input_label').find('input').each(function () {
            $(this).val('');
            $(this).valid();
        });
    });

    /* tab Menu*/
    //if(matchMedia("screen and (min-width: 1024px)").matches) {
    if(window.innerWidth >= 768) {
        $(".tab_m > div").click(function(){
            var tabGroup = $(this).parent().parent();
            var tabMenuGroup = tabGroup.find(".tab_m > div");
                                    
            tabMenuGroup.removeClass("active");
            $(this).addClass("active");
            
            var index = tabMenuGroup.index(this); 

            tabGroup.find(".tab_c > div").addClass("hide");    
            tabGroup.find(".tab_c > div:eq(" + index + ")").css('display','none').removeClass("hide").fadeIn(500);
            
        });    
    } else {
        $(".tab_m > div").mouseenter(function(){
            var tabGroup = $(this).parent().parent();
            var tabMenuGroup = tabGroup.find(".tab_m > div");
                                    
            tabMenuGroup.removeClass("active");
            $(this).addClass("active");
            
            var index = tabMenuGroup.index(this); 

            tabGroup.find(".tab_c > div").addClass("hide");    
            tabGroup.find(".tab_c > div:eq(" + index + ")").css('display','none').removeClass("hide").fadeIn(500);
            
        });    
    }

    /* Header Fixed Scroll */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('header').addClass('header_fixed');
            $('main,footer').addClass('main_fixed');
        } else {
            $('header').removeClass('header_fixed');
            $('main,footer').removeClass('main_fixed');
        }
	});

})


	
