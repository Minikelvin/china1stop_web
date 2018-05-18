$(function () {
    $('.home_select_tab li').on('touchstart',function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        //$("#catatour").val($(this).val());
    });


//    点击展开搜索框

    $('#dropDown_list,#dropDown_list_screen').bind('focus',function () {
        $('.dropDown_search').show();
    }).bind('blur',function () {
        $('.dropDown_search').hide();
    });
    //点击搜索框里面的内容。填充到搜索框里面
    $('.dropDown_li').on('touchstart',function () {
        $('#dropDown_list').val($(this).text())
    });

    $(".blog_ul li").on('touchstart',function() {
        $(this).addClass('active').siblings().removeClass('active');
        var h_height=$('.blog_left').height();
        var index=this.title;
        var id='#'+'index_'+index;
        $("html,body").animate({scrollTop: $(id).offset().top-h_height}, 500);
    });

});
