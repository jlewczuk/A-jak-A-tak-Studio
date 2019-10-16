$( document ).ready(function() {
    $('#wp0').waypoint(function(direction) {
        $("#nav-logo-white").fadeTo(1000, 0);
        });
    
    $('#wp1').waypoint(function(direction) {
        if (direction ==='down') {
            $("#nav-logo-white").fadeTo(1000, 1);
        }
        else {
                $("#nav-logo-white").fadeTo(1000, 0);        
        }
    },{
    offset: '-100vh'
     });

    $('#wp2').waypoint(function(direction) {
        if (direction ==='down') {
            $("#nav-logo-white").fadeTo(1000, 0);
        }
        else {
            $("#nav-logo-white").fadeTo(1000, 1);        
        }
    },{
    offset: '-110vh'
     });
});