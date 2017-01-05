$(document).ready(function() {

    $(".panda").click(function() {
        var panda1 = $(this).attr("data-type");
        var panda2 = $(this).attr("data-tendance");


        if (panda1 != undefined) {
            $("body").append($("<div/>").innerHTML = panda1 + " " + panda2 + " ");
        } else {
            $("body").append($("<div/>").innerHTML = "Cliquez sur un autre bouton !");
        };
    });
});