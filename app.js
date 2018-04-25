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
    $('#small-logo').hide();
    $('#frontBlock').hide();
    $('#backBlock').show();
    $('#softBlock').hide();
  });

  $('#softSkills').click(function() {
    $('#small-logo').hide();
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
  //end skill hover text


  //subheading changes
  const subheadings = [ 'Animal Hugger',
    'Nature Devotee',
    'Wine, Beer and Spirit Enthusiast',
    'Savoury treats > sweet',
    'Art Aficionado',
    'Cookin\' Queen',
    'RPG and FPS Gamer',
    'Captor and saviour of spider kind',
    'I care a whole lot about a whole lot.'];
  var count = 0;

  function changeSubHeading() {
    $('.title-subheading').fadeIn().delay(2000).fadeOut(function() {
      changeSubHeading();
    }).text(subheadings[count++]);
    if (count === subheadings.length) {
      count = 0;
    }
  }

  changeSubHeading();
  //end subheading changes
});
