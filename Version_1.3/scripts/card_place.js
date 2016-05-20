/** 
 * Throws a card and flips it
 *
 * @param animationCard
 *                      Animation card ID
 * @param menuCard
 *                      Menu card ID
 * @param text
 *                      Text on the card's front
 * @param hrPosition
 *                      Horizontal position of final location of card animation
 * @param vrPosition
 *                      Vertical position of final location of card animation
 * @param timeOut
 *                      Time for setTimeout
 */
function throwAndFlip(animationCard, menuCard, text, hrPosition, vrPosition, timeOut) {
    // Phase 1: makes the animation card visibile and makes it fly down the the location
    setTimeout(function () {
        $(animationCard).css("visibility", "visible");
        $(animationCard).animate({
            left: hrPosition,
            top: vrPosition
        }, 250);
    }, timeOut);
    // Phase 2: makes the menu card front and back visible and put text on the front
    setTimeout(function () {
        $('#' + menuCard + 'Back').css("visibility", "visible");
        $('#' + menuCard + 'Front').css("visibility", "visible");
        getId(menuCard + 'FrontText').innerHTML = text;
    }, timeOut + 350);
    // Phase 3: makes the animation card invisible and flips the menu card to show the front
    setTimeout(function () {
        $(animationCard).css("visibility", "hidden");
        $('#' + menuCard).flip(true);
    }, timeOut + 700);
}