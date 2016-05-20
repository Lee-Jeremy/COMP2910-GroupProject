/**
 * Multiplier timer
 */
function multiplierTimer() {
	mSeconds++;
	if (mSeconds == 1) {
		multiplier = 4;
		getId('multiplierText').innerHTML = "x" + multiplier;
	} else if (mSeconds == 2) {
		multiplier = 3;
		getId('multiplierText').innerHTML = "x" + multiplier;
	} else if (mSeconds == 3) {
		multiplier = 2;
		getId('multiplierText').innerHTML = "x" + multiplier;
	} else if (mSeconds == 4) {
		multiplier = 1;
		getId('multiplierText').innerHTML = "x" + multiplier;
	} 
}