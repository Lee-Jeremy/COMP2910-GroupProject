/** 
* Throws a card and flips it
*
* @param card
*                      Card ID
* @param hrPosition
*                      Horizontal position of final location of card animation
* @param vrPosition
*                      Vertical position of final location of card animation
* @param speed
*                      Card movement speed
* @param timeOut
*                      Time for setTimeout
*/
function throwAndFlip(card, hrPosition, vrPosition, speed, timeOut) {
    // Phase 1: makes the card fly down to the specified position
    $("#" + card).animate({
        left: hrPosition,
        top: vrPosition
    }, speed);
    // Phase 2: makes the card flip showing the back of it
    setTimeout(function () {
        $('#' + card).flip(true);
    }, timeOut);
}