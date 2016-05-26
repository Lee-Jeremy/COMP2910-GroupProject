<?php
    // Starts the sessions; tracks user
    session_start();    

    require('./php/config.php');
?>

<div id="login">
    <form action="./php/login_function.php" method="post">
        <table>
            <tr>
                <td class="label">Email
                </td>
                <td><input type="email" name="logName"></input>
                </td>
            </tr>
            <tr>
                <td class="label">Password
                </td>
                <td><input type="password" name="logPass"></input>
                </td>
            </tr>
        </table>
        <input type="submit" value="Login" id="btnLogin" class="button"></input>
        <input type="button" value="Register Page" id="btnRegisterPage" class="button"></input>
        <input type="button" value="Forgot Password?" id="btnPasswordPage" class="button"></input>
        <input type="button" value="ACCOUNT" id="btnTEST1" class="buttonTest"></input>
    </form>
</div>