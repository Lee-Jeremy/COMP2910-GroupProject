function flipAndStack(animationCard, menuCard, color, hrPosition, vrPosition, timeOut) {
    $('#' + menuCard).flip(false);
    setTimeout(function () {
        $(animationCard).css("visibility", "visible");
    }, timeOut);
    setTimeout(function () {
        getId(menuCard + 'Back').style.backgroundColor = color;
        getId(menuCard + 'Back').style.border = "none";
        getId(menuCard + 'Front').style.backgroundColor = color;
        getId(menuCard + 'Front').style.border = "none";
        getId(menuCard + 'FrontText').innerHTML = "";
    }, timeOut + 250);
    setTimeout(function () {
        $(animationCard).animate({
            left: hrPosition,
            top: vrPosition
        }, 250);
    }, timeOut + 700);
}