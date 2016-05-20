/** 
 * Flips a card and stack it
 * 
 * @param animationCard
 *                      Animation card ID
 * @param menuCard
 *                      Menu card ID
 * @param hrPosition
 *                      Horizontal position of final location of card animation
 * @param vrPosition
 *                      Vertical position of final location of card animation
 * @param timeOut
 *                      Time for setTimeout
 */
function flipAndStack(animationCard, menuCard, hrPosition, vrPosition, timeOut) {
    // Phase 1: flips the menu card to show the back and makes the animation card visible
    $('#' + menuCard).flip(false);
    setTimeout(function () {
        $(animationCard).css("visibility", "visible");
    }, timeOut + 400);
    // Phase 2: makes the menu card front and back invisible
    setTimeout(function () {
        $('#' + menuCard + 'Back').css("visibility", "hidden");
        $('#' + menuCard + 'Front').css("visibility", "hidden");
    }, timeOut + 200);
    // Phase 3: makes the animation card fly up to the location
    setTimeout(function () {
        $(animationCard).animate({
            left: hrPosition,
            top: vrPosition
        }, 250);
    }, timeOut + 700);
}