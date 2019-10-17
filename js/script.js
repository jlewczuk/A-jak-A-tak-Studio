$( document ).ready(function() {
    $('#wp0').waypoint(function(direction) {
        $("#nav-logo-white").fadeTo(1, 0);
        });
    
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