<?php
    // Starts the sessions; tracks user
    session_start();    

    require('./php/config.php');
?>

<div id="password">
    <form action="./php/password_function.php" method="post">
        <table>
            <tr>
                <td class="label">Email
                </td>
                <td><input type="email" name="forgotEmail"></input>
                </td>
            </tr>
        </table>
        <input type="submit" value="Reset & Send Password" id="btnResetPassword" class="button"></input>
        <input type="button" value="Login Page" id="btnLoginPage" class="button"></input>
    </form>
</div>