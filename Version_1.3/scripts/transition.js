/**
* Screen transitions
*
* @param menuSelected
*                      Selected division's id
*/
function switchScreen(menuSelected) {
    switch (menuSelected.substring(0, 9)) {
        // Swtiches the screen to play mode when Play menu is clicked  
        case "menuMain0":
            window.location.href = './playmode.php';
            break;
        // Swtiches the screen to leaderboard when High Score menu is clicked      
        case "menuMain2":
            window.location.href = './leaderboard.php';
            break;
        // Option for practice mode: addition
        case "menuPrac0":
            //window.location.href = '';
            break;
        // Option for practice mode: subtraction     
        case "menuPrac1":
            //window.location.href = '';
            break;
        // Option for practice mode: mulitplication     
        case "menuPrac2":
            //window.location.href = '';
            break;
        // Option for practice mode: division     
        case "menuPrac3":
            //window.location.href = '';
            break;
    }
}