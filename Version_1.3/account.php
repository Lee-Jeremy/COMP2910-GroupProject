<?php
    // Starts the sessions; tracks user
    session_start();    
    
    require('./php/config.php');
    include('./php/achieve_get.php');
?>

<div id="account">
    <form action="./php/logout_function.php">
        <table>
            <tr>
                <td id="labelEmail" class="label" colspan="3">
                    <?php
                        echo $_SESSION['SESS_LOGIN'];
                    ?>
                </td>
            </tr>
            <tr>
                <td id="labelAchieve" class="label" colspan="3">Achievement (Click To View)
                </td>
            </tr>
            <tr>
                <td id="achieve1Image" class="achieveImage"><img src="./images/achieve1.png" alt="achieve1">
                    <div id="achieve1Status" class="achieveStatus">
                        <img src=<?php
                        if ($_SESSION['SESS_ACHIEVE1'] == "yes") {
                            echo '"./images/unlocked.png onload="achieveUnlock(1)"';
                        } else {
                            echo './images/locked.png';
                        }
                        ?> alt="locked">
                    </div>
                    <div id="achieve1Txt" class="achieveTxt">
                        <table>
                            <tr>
                                <td><img src="./images/achieve1.png" alt="achieve1"></td>
                                <td id="achieve1Title">Flash Memory</td>
                            </tr>
                            <tr>
                                <td class="achieveDescription" colspan="2">
                                Clear first 10 stages without losing any multipliers
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
                <td id="achieve2Image" class="achieveImage"><img src="./images/achieve2.png" alt="achieve2">
                    <div id="achieve2Status" class="achieveStatus">
                        <img src=<?php
                        if ($_SESSION['SESS_ACHIEVE2'] == "yes") {
                            echo '"./images/unlocked.png onload="achieveUnlock(2)"';
                        } else {
                            echo './images/locked.png';
                        }
                        ?> alt="locked">
                    </div>
                    <div id="achieve2Txt" class="achieveTxt">
                        <table>
                            <tr>
                                <td><img src="./images/achieve2.png" alt="achieve2"></td>
                                <td id="achieve2Title">Diehard</td>
                            </tr>
                            <tr>
                                <td class="achieveDescription" colspan="2">
                                Clear 15 stages with all 3 lives
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
                <td id="achieve3Image" class="achieveImage"><img src="./images/achieve3.png" alt="achieve3">
                    <div id="achieve3Status" class="achieveStatus">
                        <img src=<?php
                        if ($_SESSION['SESS_ACHIEVE3'] == "yes") {
                            echo '"./images/unlocked.png" onload="achieveUnlock(3)"';
                        } else {
                            echo './images/locked.png';
                        }
                        ?> alt="locked">
                    </div>
                    <div id="achieve3Txt" class="achieveTxt">
                        <table>
                            <tr>
                                <td><img src="./images/achieve3.png" alt="achieve3"></td>
                                <td id="achieve3Title">Human Calculator</td>
                            </tr>
                            <tr>
                                <td class="achieveDescription" colspan="2">
                                Clear 20 stages
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>
        <input type="submit" value="Logout" id="btnLogout" class="button"></input>
    </form>
</div>