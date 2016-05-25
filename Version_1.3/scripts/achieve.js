/**
 * Changes the style of the achievement panels accordinlgy
 * @param num
 *              Achievement number. 1 for "Flash Memory", 2 for "Diehard", 3 for "Human Calculator".
 */
function acheiveUnlock(num) {
    switch (num) {
        case 1:
            getId("achieve1Text").innerHTML = 'Flash Memory';
            $("#achieve1Text").css("font-variant", "small-caps");
            $("#achieve1Text").css("color", "#000000");
            $("#achieve1Text").css("background-color", "#ff6a00");
            $("#achieve1Image").css("background-color", "#ff6a00");
            $("#achieve1Image img").css("opacity", "1.0");
            break;
        case 2:
            getId("achieve2Text").innerHTML = 'Diehard';
            $("#achieve2Text").css("font-variant", "small-caps");
            $("#achieve2Text").css("color", "#000000");
            $("#achieve2Text").css("background-color", "#ff6a00");
            $("#achieve2Image").css("background-color", "#ff6a00");
            $("#achieve2Image img").css("opacity", "1.0");
            break;
        case 3:
            getId("achieve3Text").innerHTML = 'Human Calculator';
            $("#achieve3Text").css("font-variant", "small-caps");
            $("#achieve3Text").css("color", "#000000");
            $("#achieve3Text").css("background-color", "#ff6a00");
            $("#achieve3Image").css("background-color", "#ff6a00");
            $("#achieve3Image img").css("opacity", "1.0");
            break;
    }
}