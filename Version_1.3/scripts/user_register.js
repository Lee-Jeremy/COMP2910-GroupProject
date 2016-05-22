/**
 * Passes over the user input to PHP using AJAX to check within the database
 */
function userRegister() {
    var userReg = getId('userRegBox').value;
    var passReg = getId('passRegBox').value;

    if (userReg == "" || passReg == "") { // Validates the user input
        incorrectLogin();
    } else { // Uses AJAX to submit the JS variables to be read via PHP
        $.post("startscreen.php",
    {
        userRegPHP: userReg,
        passRegPHP: passReg
    });
        window.location.href = './startscreen.php'; // Links back to the startscreen.php page
    }
}