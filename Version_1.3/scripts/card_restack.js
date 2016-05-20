/** 
 * Flips the cards and stacks them
 */
function flipAndStack(animationCard, menuCard, hrPosition, vrPosition, timeOut) {
    $('#' + menuCard).flip(false);
    setTimeout(function () {
        $(animationCard).css("visibility", "visible");
    }, timeOut + 400);
    setTimeout(function () {
        $('#' + menuCard + 'Back').css("visibility", "hidden");
        $('#' + menuCard + 'Front').css("visibility", "hidden");
    }, timeOut + 200);
    setTimeout(function () {
        $(animationCard).animate({
            left: hrPosition,
            top: vrPosition
        }, 250);
    }, timeOut + 700);
}