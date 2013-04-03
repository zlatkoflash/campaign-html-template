var tools = {
    //Set main container width
    setMainContainerDimensions: function() {
        //Main content
        $('#content-wrap').css('width', $('.container-fluid').width() - $('.fixed-column').outerWidth(true) + 'px');
        $('#content-wrap, #left-inner-column, #main-inner-column').height($(window).height() - $('#top-header').outerHeight(true) - $('#f-bottom').outerHeight(true));
        //Change width of left inner column for smaller screens
        if ($(window).width() < 1440) {
            $('#left-inner-column').css('width', '25%');
            $('#main-inner-column').css('width', '75%');
        }
        else {
            $('#left-inner-column').css('width', '20%');
            $('#main-inner-column').css('width', '80%');
        }
    },
    // Set tab content height
    setTabContentHeight: function() {
        $('.tab-content > div.tab-pane').each(function() {
            var allowedHeight = $('#main-inner-column').height() - $('h1.page-title').outerHeight(true) - $('.breadcrumb').outerHeight(true) - $('#top-tabs-inner').outerHeight(true);
            allowedHeight -= parseInt($(this).css('margin-top')) - parseInt($(this).css('padding-top'));
            $(this).height(allowedHeight);
            $('#list-campagin-uis-edit-tab').height($('#list-campagin-uis-edit-tab').height() - 5);
            $('#add-new-plan-tab').height($('#add-new-plan-tab').height() - 10);
        })
    },
    // Custom select add arrows
    customSelect: function() {
        $('.select-wrap').each(function() {
            var parentEl = $(this);
            var arrows = $('<span class="select-arrows"></span>');
            $(this).append(arrows);

            $('.select-wrap .select-value-holder').each(function() {
                var currentValue = $(this).parent().find('select').find('option:selected').text();
                $(this).html(currentValue);
            });

            $(this).find('select').change(function(event) {
                var selectedOption = $(this).find('option:selected').text();
                parentEl.find('.select-value-holder').html(selectedOption);
            });
        });
    },
    //Inner form elements dimensions if any need
    setFormElementsDimensions: function() {
        $('.form-holder').height($('.form-holder').parent().height() - parseInt($('.form-holder').css('padding-top')) - 80);
        if ($(window).width() <= 1440) {
            $('.controls .span4').css('width', '70%');
        }
        else if ($(window).width() > 1440) {
            $('.controls .span4').css('width', '40%');
        }
        //////////////////////////
        var tableScrollheight = $('.table-scroller').parent().height();
        if ($('.table-scroller').parent().find('.button-bar').length) {
            tableScrollheight -= $('.table-scroller').parent().find('.button-bar').height();
        }
        $('.table-scroller').height(tableScrollheight);
        $('.table-scroller2').height(tableScrollheight - 70);
        /////////////////////////
        $('.inner-padder').height($('.inner-padder').parent().height());
        ////////////////////////
        $('.xx-content-container').height($('.in-left-col .form-horizontal').outerHeight(true) + 8);
        ///////////////////////
        if( $(window).width() <= 1024 ){
            $('div.form-elements').width(280);
            $('div.form-elements div.radio-wrapper').css('margin-left','50px');
            $('.input-row .select-wrap').css('width','160px');
        }
        else if( $(window).width() > 1200){
            $('div.form-elements div.radio-wrapper').css('margin-left','120px');
            $('.input-row .select-wrap').css('width','50%');
        }
    },
    // Set custom scrollbars
    setCustomScrollbars: function() {
        $(".scroller, .table-scroller, .inner-padder").mCustomScrollbar({
            scrollButtons: {
                enable: false,
                scrollInertia: 300
            }
        });
        $(".form-holder").mCustomScrollbar({
            scrollButtons: {
                enable: false,
                scrollInertia: 300
            }
        });
        $(".table-scroller2").mCustomScrollbar({
            scrollButtons: {
                enable: false,
                scrollInertia: 300
            }
        });
        $(".modal-body, .scroller3").mCustomScrollbar({
            scrollButtons: {
                enable: false,
                scrollInertia: 300
            }
        });
    },
    setStripeRadios: function() {
        var counter = 0;
        $('.radio-wrapper label').each(function() {
            if (counter % 2 == 0)
                $(this).addClass('even-row');
            else
                $(this).addClass('odd-row');
            counter++;
        });
    },
    //Set table borders
    setTableBorders: function() {
        $('.table tbody tr').each(function() {
            $(this).find('td:first').css({'border-left': '1px #e1e1e1 solid'});
            $(this).find('td:last').css({'border-right': '1px #e1e1e1 solid'});
        });
        $('.table tbody tr:last').find('td').each(function() {
            $(this).css({'border-bottom': '1px #e1e1e1 solid'});
        })
    }

}
$(window).load(function() {
    tools.setMainContainerDimensions();
    tools.setTabContentHeight();
    tools.setFormElementsDimensions();
    tools.customSelect();
    tools.setStripeRadios();

    tools.setCustomScrollbars();
    tools.setTableBorders();
    if ($('#datepicker1').length && $('#datepicker2').length) {
        $('#datepicker1, #datepicker2').datepicker();
    }

    //Resize content
    $(window).resize(function() {
        tools.setMainContainerDimensions();
        tools.setTabContentHeight();
        tools.setFormElementsDimensions();
    })
    ////////////////////////////////////////////////////////////////////////
    //Tabs
    $('a[data-toggle="tab"]').on('shown', function(e) {
        tools.setFormElementsDimensions();
        $(".scroller").mCustomScrollbar("update");
        $(".form-holder").mCustomScrollbar("update");
        $('.table-scroller').mCustomScrollbar("update");
        $('.inner-padder').mCustomScrollbar("update");
        $('.table-scroller2').mCustomScrollbar("update");
    })

    $('#modal-content').on('shown', function() {
        $(".modal-body").mCustomScrollbar("update");
        $(".scroller3").mCustomScrollbar("update");
    })
}); 