<?php
    // Starts the sessions; tracks user
    session_start();    

    require('./php/config.php');
?>

<div id="register">
    <form action="./php/register_function.php" method="post">
        <table>
            <tr>
                <td class="label">Email
                </td>
                <td><input type="email" name="regName"></input>
                </td>
            </tr>
            <tr>
                <td class="label">Password
                </td>
                <td><input type="password" name="regPass"></input>
                </td>
            </tr>
            <tr>
                <td class="label">Confirm
                </td>
                <td><input type="password"></input>
                </td>
            </tr>
        </table>
        <input type="submit" value="Register" id="btnRegister" class="button"></input>
        <input type="button" value="Login Page" id="btnLoginPage" class="button"></input>
    </form>
</div>