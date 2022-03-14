$('#icon-bar').click( function () {
    $('.nav').toggleClass('nav_hide');
    $(this).toggleClass('is_active_bar')
    }
)   

$('.dropdown').click( function(){
    $(this).parent().find('.sub-menu').toggleClass('d-block');
    $(this).parent().find('#caret-1').toggleClass('up');
})

$('.dropdown-2').click( function(){
    $(this).parent().find('.sub-menu-2').toggleClass('d-block');
    $(this).parent().find('#caret-2').toggleClass('up');
})