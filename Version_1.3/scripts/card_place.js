/* Abbreviated getElementByID */
function getId(id) {
    var element = document.getElementById(id);
    if (element == null) {
        alert('Programmer error: ' + id + ' does not exist.');
    }
    return element;
}

function throwAndFlip(animationCard, menuCard, text, color, hrPosition, vrPosition, timeOut) {
    setTimeout(function () {
        $(animationCard).animate({
            left: hrPosition,
            top: vrPosition
        }, 250);
    }, timeOut);
    setTimeout(function () {
        getId(menuCard + 'Back').style.backgroundColor = color;
        getId(menuCard + 'Back').style.border = "1px solid #000000";
        getId(menuCard + 'Front').style.backgroundColor = color;
        getId(menuCard + 'Front').style.border = "1px solid #000000";
        getId(menuCard + 'FrontText').innerHTML = text;
        //getId(menuCard + 'FrontText').style.fontSize = "x-large";
    }, timeOut + 250);
    setTimeout(function () {
        $(animationCard).css("visibility", "hidden");
        $('#' + menuCard).flip(true);
    }, timeOut + 700);
}