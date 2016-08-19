/*Nina Kong*/
$(document).ready(function(){
    var windowHeight = $( window ).height();
    var con = $(".Content");
    con.parentsUntil($("body")).css("height", windowHeight);

    $("#add").click(function(event) {
        $(".Content p").addClass("paraClass");
    });

    $("#toggle").click(function (event) {
        $(".Content p").toggleClass("paraClass");
    });

    $("#remove").click(function (event) {
        $(".Content p").removeClass("paraClass");
    });

    $("#set").click(function (event) {
        $(".Content p").css(
            {
                "padding-top": "+=5px",
                "text-decoration": "underline"
            }
        );
    });

});
