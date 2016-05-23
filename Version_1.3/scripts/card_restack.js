/** 
* Flips a card and stack it
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
function flipAndStack(card, hrPosition, vrPosition, speed, timeOut) {
    // Phase 1: flips the card to show the back and makes the animation card visible
    $('#' + card).flip(false);
    // Phase 2: makes the card fly up to the location
    setTimeout(function () {
        $('#' + card).animate({
            left: hrPosition,
            top: vrPosition
        }, speed);
    }, timeOut);
}