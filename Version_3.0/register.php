<?php
    // Starts the sessions; tracks user
    session_start();    
    
    require('./php/config.php');
?>

<div id="register">
    <form action="./php/register_function.php" method="post" onsubmit="return validatePassword()">
        <table>
            <tr>
                <td class="label">Email
                </td>
                <td><input type="email" name="regName" required></input>
                </td>
            </tr>
            <tr>
                <td class="label">Password
                </td>
                <td>
                    <input id="registerPassword" type="password" name="regPass" required></input>
                </td>
            </tr>
            <tr>
                <td class="label">Confirm
                </td>
                <td>
                    <input id="registerConfirm" type="password" required></input>
                    <label id="invalidMsg1" for="registerConfirm">Passwords must match</label>
                </td>
            </tr>
        </table>
        <input type="submit" value="Register" id="btnRegister" class="button"></input>
        <input type="button" value="Login Page" id="btnLoginPage" class="button"></input>
    </form>
</div>