/**
 * Changes the style of the achievement panels accordinlgy
 * @param num
 *              Achievement number. 1 for "Flash Memory", 2 for "Diehard", 3 for "Human Calculator".
 */
function achieveUnlock(num) {
    switch (num) {
        case 1:
            getId("achieve1Status").innerHTML = '<img src="./images/unlocked.png" alt="unlocked">';
            $("#achieve1Image").css("background-color", "#FFC270");
            $("#achieve1Image img").css("opacity", "1.0");
            break;
        case 2:
            getId("achieve2Status").innerHTML = '<img src="./images/unlocked.png" alt="unlocked">';
            $("#achieve2Image").css("background-color", "#99FF99");
            $("#achieve2Image img").css("opacity", "1.0");
            break;
        case 3:
            getId("achieve3Status").innerHTML = '<img src="./images/unlocked.png" alt="unlocked">';
            $("#achieve3Image").css("background-color", "#99CCFF");
            $("#achieve3Image img").css("opacity", "1.0");
            break;
    }
}