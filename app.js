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

  $('#burger').bind('click',function(){
    $('#mainnav .burger-menu').slideToggle();
  });

  //subheading changes
  const subheadings = [
    'Wine, Beer and Spirit Enthusiast',
    'Savoury treats > sweet',
    'Captor and saviour of spider kind',
    'Nature fan',
    'Star Gazer',
    'FPS Gamer',
    'Fan of the foods',
    'I care a whole lot about a whole lot'];
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
  //


  //skill switch ->
  $('.middle-block').hide();

  $('#frontEnd').click(function() {
    console.log('click');
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


  //project switch->
  $('#proj1').click(function() {
    $('#blueprint').hide();
    $('#firstBlock').show();
    $('#secondBlock').hide();
    $('#thirdBlock').hide();
    $('#fourthBlock').hide();
  });
  $('#proj2').click(function() {
    $('#blueprint').hide();
    $('#firstBlock').hide();
    $('#secondBlock').show();
    $('#thirdBlock').hide();
    $('#fourthBlock').hide();
  });
  $('#proj3').click(function() {
    $('#blueprint').hide();
    $('#firstBlock').hide();
    $('#secondBlock').hide();
    $('#thirdBlock').show();
    $('#fourthBlock').hide();
  });
  $('#proj4').click(function() {
    $('#blueprint').hide();
    $('#firstBlock').hide();
    $('#secondBlock').hide();
    $('#thirdBlock').hide();
    $('#fourthBlock').show();
  });
//end project switch




});
