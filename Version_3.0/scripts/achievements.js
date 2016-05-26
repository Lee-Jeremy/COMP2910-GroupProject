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

/**
 * Checks if achievement has been achieved, displays notification
 */
function achieveDisplay() {
    if (level == 11 && totalScore == 1500 && achievement1 == "no") {
        getId('achievementText').innerHTML = "Achievement: Flash Memory Unlocked!";
        if (lives === 0) {
            setTimeout($("#achievementContainer").fadeIn(), 2000);
        } else {
            setTimeout($("#achievementContainer").fadeIn(), 1000);
        }
    }

    if (level == 16 && lives == 3 && achievement2 == "no") {
        getId('achievementText').innerHTML = "Achievement: Diehard Unlocked!";
        if (lives === 0) {
            setTimeout($("#achievementContainer").fadeIn(), 2000);
        } else {
            setTimeout($("#achievementContainer").fadeIn(), 1000);
        }
    }

    if (level == 21 && achievement3 == "no") {
        getId('achievementText').innerHTML = "Achievement: Human Calculator Unlocked!";
        if (lives === 0) {
            setTimeout($("#achievementContainer").fadeIn(), 2000);
        } else {
            setTimeout($("#achievementContainer").fadeIn(), 1000);
        }

    }
}

/**
 * Fades out the achievement notification
 */
function achieveHide() {
    $("#achivementContainer").fadeOut();
}