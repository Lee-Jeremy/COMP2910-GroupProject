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
                <td id="labelAchieve" class="label" colspan="3">Achievements (Click To See)
                </td>
            </tr>
            <tr>
                <td id="achieve1Image" class="achieveImage">    
                    <img src="./images/achieve1.png" alt="image"
                    <?php
                        if ($_SESSION['SESS_ACHIEVE1'] == "yes") {
                            echo 'onload="achieveUnlock(1)"';
                        }
                    ?>     
                    >
                </td>
                <td id="achieve2Image" class="achieveImage">
                    <img src="./images/achieve2.png" alt="image"
                    <?php
                        if ($_SESSION['SESS_ACHIEVE2'] == "yes") {
                            echo 'onload="achieveUnlock(2)"';
                        }
                    ?>
                    >
                </td>
                <td id="achieve3Image" class="achieveImage">
                    <img src="./images/achieve3.png" alt="image"
                    <?php
                        if ($_SESSION['SESS_ACHIEVE3'] == "yes") {
                            echo 'onload="achieveUnlock(3)"';
                        }
                    ?>  
                    >
                </td>
            </tr>
            <tr>
                <td id="achieve1Text" class="achieveText">
                    <?php
                        if ($_SESSION['SESS_ACHIEVE1'] == "yes") {
                            echo "UNLOCKED";
                        } else {
                            echo "LOCKED";
                        }
                    ?>                   
                </td>
                <td id="achieve2Text" class="achieveText">
                    <?php
                        if ($_SESSION['SESS_ACHIEVE2'] == "yes") {
                              echo "UNLOCKED";
                          } else {
                              echo "LOCKED";
                          }
                    ?>                
                </td>
                <td id="achieve3Text" class="achieveText">
                    <?php
                        if ($_SESSION['SESS_ACHIEVE3'] == "yes") {
                              echo "UNLOCKED";
                          } else {
                              echo "LOCKED";
                          }
                    ?>
                </td>
            </tr>
        </table>
        <input type="submit" value="Logout" id="btnLogout" class="button"></input>
    </form>
</div>