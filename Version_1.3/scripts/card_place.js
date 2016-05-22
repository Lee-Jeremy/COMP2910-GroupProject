/** 
 * Throws a card and flips it
 *
 * @param card
 *                      Card ID
 * @param text
 *                      Text on the card's front
 * @param hrPosition
 *                      Horizontal position of final location of card animation
 * @param vrPosition
 *                      Vertical position of final location of card animation
 * @param timeOut
 *                      Time for setTimeout
 */
function throwAndFlip(card, text, hrPosition, vrPosition, timeOut) {
    getId(card + 'FrontText').innerHTML = text;
    // Phase 1: makes the animation card visibile and makes it fly down the the location
    setTimeout(function () {
        $("#" + card).animate({
            left: hrPosition,
            top: vrPosition
        }, 400);
    }, timeOut);
    // Phase 2: makes the animation card invisible and flips the menu card to show the front
    setTimeout(function () {
        $('#' + card).flip(true);
    }, timeOut + 475);
}