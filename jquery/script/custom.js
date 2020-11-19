$('p').css({ display: 'none' });

$('.btn-show').click(function () {
  $('p').css({ display: 'block' });
});

$('.btn-hide').click(() => {
  $('p').css({ display: 'none' });
});
