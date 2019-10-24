$( document ).ready(function() {

    var logo_dark = document.getElementById('nav-logo-dark');
    var logo_white = document.getElementById('nav-logo-white');

    if(window.innerWidth <= 768) {
        logo_dark.src = 'img/favicon.png';
        logo_white.src = 'img/logo-white.png';
        }
        else {
            logo_dark.src = 'img/nav-logo.png';
            logo_white.src = 'img/nav-logo-white.png';
        }
    });

    $('#wp0').waypoint(function(direction) {
        $("#nav-logo-white").fadeTo(1, 0);
    
    $('#wp1').waypoint(function(direction) {
        if (direction ==='down') {
            $("#nav-logo-white").fadeTo(500, 1);
        }
        else {
            $("#nav-logo-white").fadeTo(500, 0);        
        }
    },{
    offset: '-100vh'
     });

    $('#wp2').waypoint(function(direction) {
        if (direction ==='down') {
            $("#nav-logo-white").fadeTo(500, 0);
        }
        else {
            $("#nav-logo-white").fadeTo(500, 1); 
        }
    },{
    offset: '-110vh'
     });

     $('.js--scroll').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top +55}, 1000);
    });
});