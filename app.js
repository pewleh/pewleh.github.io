$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    const $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });
  //skill switch ->
  $('.middleBlock').hide();

  $('#frontEnd').click(function() {
    $('#small-logo').hide();
    $('#frontBlock').show();
    $('#backBlock').hide();
    $('#softBlock').hide();
  });

  $('#backEnd').click(function() {
    $('#frontBlock').hide();
    $('#backBlock').show();
    $('#softBlock').hide();
  });

  $('#softSkills').click(function() {
    $('#frontBlock').hide();
    $('#backBlock').hide();
    $('#softBlock').show();

  });
  //skill switch end

  //skill hover text ->
  $(document).ready(function () {
    $('#hover-image a img').hover(function () {
      $(this).stop().animate({
        opacity: .4
      }, 200);
      $('.text').removeClass('hide');
    }, function () {
      $(this).stop().animate({
        opacity: 1
      }, 500);
      $('.text').addClass('hide');
    });
  });
  //skill hover text end
});
