$('li').mouseenter(function() {
    var imageLocation=$(this).attr('data-image');
    $('.photo').css({
        'background-image':'url('+imageLocation+')'
    });
});

$('li').mouseleave(()=>{
    $('.photo').css({
        'background-image':''
    });
});