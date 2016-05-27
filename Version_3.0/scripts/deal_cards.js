/**
 * Deal the Matrix Cards
 */
function dealCards() {
    deal.play(); // Sound effect

	setTimeout(dealCard11, 150);
	setTimeout(dealCard10, 300);
	setTimeout(dealCard9, 450);
	setTimeout(dealCard8, 600);
	setTimeout(dealCard7, 750);
	setTimeout(dealCard6, 900);
	setTimeout(dealCard5, 1050);
	setTimeout(dealCard4, 1200);
	setTimeout(dealCard3, 1350);
	setTimeout(dealCard2, 1500);
	setTimeout(showMatrixCards, 1650);

	function dealCard11() {
		dealCard("#animationCard11", '71.1vw', '67vh', '15vh', '18.9vw', 150);
	}
	function dealCard10() {
		dealCard("#animationCard10", '20.7vw', '67vh', '15vh', '18.9vw', 150);
	}
	function dealCard9() {
		dealCard("#animationCard9", '58vw', '43.75vh', '32%', '25%', 150);
	}
	function dealCard8() {
		dealCard("#animationCard8", '33.6vw', '43.75vh', '32%', '25%', 150);
	}
	function dealCard7() {
		dealCard("#animationCard7", '9.5vw', '43.75vh', '32%', '25%', 150);
	}
	function dealCard6() {
		dealCard("#animationCard6", '58vw', '21.8vh', '32%', '25%', 150);
	}
	function dealCard5() {
		dealCard("#animationCard5", '33.6vw', '21.8vh', '32%', '25%', 150);
	}
	function dealCard4() {
		dealCard("#animationCard4", '9.5vw', '21.8vh', '32%', '25%', 150);
	}
	function dealCard3() {
		dealCard("#animationCard3", '58vw', '0vh', '32%', '25%', 150);
	}
	function dealCard2() {
		dealCard("#animationCard2", '33.6vw', '0vh', '32%', '25%', 150);
	}

    function dealCard(id, leftPosition, topPosition, heightValue, widthValue, animationSpeed) {
        $(id).animate({ // Move each card to their respective positions (resize if necessary)
            left: leftPosition,
            top: topPosition,
            height: heightValue,
            width: widthValue
        }, animationSpeed);
    }

    function showMatrixCards() {
        for (var i = 1; i <= 3; i++) {
            for (var k = 1; k <=3; k++) {
                getId('r' + i + 'c' + k + 'Back').style.backgroundColor = "#263545"; // Navy blue
                getId('r' + i + 'c' + k + 'Back').style.border = "1px solid #000000"; // Solid black border
            }
        }
        getId('eqCard2Back').style.backgroundColor = "#800000"; // Red
        getId('eqCard2Back').style.border = "1px solid #000000"; // Solid black border
        getId('eqCard4Back').style.backgroundColor = "#800000";	// Red
        getId('eqCard4Back').style.border = "1px solid #000000"; // Solid black border
        easterEgg(); // Put easter eggs on card backs if condition is met
        if (tutorialCounter != 1) { 
	    setTimeout(hideAnimations, 450);
	}
    }
}