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
                <td id="labelAchieve" class="label" colspan="3">Achievement (Click To View)
                </td>
            </tr>
            <tr>
                <td id="achieve1Image" class="achieveImage"><img src="./images/achieve1.png" alt="achieve1" onclick="acheiveUnlock(1)">
                    <div id="achieve1Status" class="achieveStatus">
                        <img src="./images/locked.png" alt="locked">
                    </div>
                    <div id="achieve1Txt" class="achieveTxt">
                        <h3>Flash Memory</h3>
                        <p>Clear first 10 stages without losing any multipliers</p>
                    </div>
                </td>
                <td id="achieve2Image" class="achieveImage"><img src="./images/achieve2.png" alt="achieve2" onclick="acheiveUnlock(2)">
                    <div id="achieve2Status" class="achieveStatus">
                        <img src="./images/locked.png" alt="locked">
                    </div>
                    <div id="achieve2Txt" class="achieveTxt">Achievement2 tooltip</div>
                </td>
                <td id="achieve3Image" class="achieveImage"><img src="./images/achieve3.png" alt="achieve3" onclick="acheiveUnlock(3)">
                    <div id="achieve3Status" class="achieveStatus"><img src="./images/locked.png" alt="locked">
                    </div>
                    <div id="achieve3Txt" class="achieveTxt">Achievement3 tooltip</div>
                </td>
            </tr>
        </table>
        <input type="submit" value="Logout" id="btnLogout" class="button"></input>
    </form>
</div>