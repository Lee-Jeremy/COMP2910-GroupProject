/**
 * If the user reaches level 11 getting 4x multiplier at each stage, store and send to PHP
 */
function achieve1() {
    if (level == 11 && totalScore == 1500) {
        $.post("playmode.php",
            {
                achieve1: "yes"
            });
        // alert("Achievement 1 Unlocked");
    }
}

/**
 * If the user reaches level 16 with 3 lives, store and send to PHP
 */
function achieve2() {
    if (level == 16 && lives == 3) {
        $.post("playmode.php",
            {
                achieve2: "yes"
            });
        // alert("Achievement 2 Unlocked");
    }
}

/**
 * If the user reaches level 21, store and send to PHP
 */
function achieve3() {
    if (level == 21) {
        $.post("playmode.php",
            {
                achieve3: "yes"
            });
        // alert("Achievement 3 Unlocked");
    }
}