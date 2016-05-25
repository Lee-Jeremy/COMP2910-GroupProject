<?php
    // Starts the sessions; tracks user
    session_start();    
    
    require('./php/config.php');
?>

<div id="account">
    <form method="post">
        <table>
            <tr>
                <td id="labelEmail" class="label" colspan="3">USER EMAIL HERE
                </td>
            </tr>
            <tr>
                <td id="labelAchieve" class="label" colspan="3">Achievement (Click To See)
                </td>
            </tr>
            <tr>
                <td id="achieve1Image" class="achieveImage"><img src="./images/achieve1.png" alt="image" onclick="acheiveUnlock(1)">
                </td>
                <td id="achieve2Image" class="achieveImage"><img src="./images/achieve2.png" alt="image" onclick="acheiveUnlock(2)">
                </td>
                <td id="achieve3Image" class="achieveImage"><img src="./images/achieve3.png" alt="image" onclick="acheiveUnlock(3)">
                </td>
            </tr>
            <tr>
                <td id="achieve1Text" class="achieveText">
                    LOCKED
                </td>
                <td id="achieve2Text" class="achieveText">
                    LOCKED
                </td>
                <td id="achieve3Text" class="achieveText">
                    LOCKED
                </td>
            </tr>
        </table>
        <input type="submit" value="Logout" id="btnLogout" class="button"></input>
    </form>
</div>