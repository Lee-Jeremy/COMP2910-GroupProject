/**
 * Checks if the two password inputs match. Returns true if match or returns false.
 * Displays a message that indicates different password inputs. Hides it when the message
 * is clicked or inputs match.
 */
function validatePassword() {
    $('#invalidMsg1').click(function (event) {
        $('#' + event.target.id).css("visibility", "hidden");
    });
    if (getId('registerPassword').value != getId('registerConfirm').value) {
        $('#registerPassword').css("background-color", '#FCFF59');
        $('#registerConfirm').css("background-color", '#FCFF59');
        $('#invalidMsg1').css("visibility", "visible");
        return false;
    }
    $('#registerPassword').css("background-color", '#ffffff');
    $('#registerConfirm').css("background-color", '#ffffff');
    $('#invalidMsg1').css("visibility", "hidden");
    return true
}