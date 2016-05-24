/**
 * Set the difficulty for the level
 */
function setDifficulty() {
	if (level < 5) {
		cardValueMin = -5;
		cardValueMax = 15;
		divisionCardValueMin = 1;
		divisionCardValueMax = 12;
		firstRevealWave = 2;
		secondRevealWave = 4;
		thirdRevealWave = 7;
	} else if (level == 5) {
		cardValueMin = 1;
		cardValueMax = 12;
		divisionCardValueMin = 1;
		divisionCardValueMax = 12;
		firstRevealWave = 2;
		secondRevealWave = 4;
		thirdRevealWave = 7;
		points = 50; // Increase the base amount of points per level
	} else if (level == 10) {
		cardValueMin = -1;
		cardValueMax = 15;
		divisionCardValueMin = 1;
		divisionCardValueMax = 20;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 7;
		points = 75; // Increase base points
	} else if (level == 15) {
		cardValueMin = -5;
		cardValueMax = 25;
		divisionCardValueMin = 1;
		divisionCardValueMax = 40;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 7;		
		points = 100; 
		multiplier = 5; // Unlock 5x multiplier
	} else if (level == 20) { 
		cardValueMin = -10;
		cardValueMax = 50;
		divisionCardValueMin = 1;
		divisionCardValueMax = 70;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 6;
		points = 250; 
	} else if (level == 25) {
		cardValueMin = -10;
		cardValueMax = 60;
		divisionCardValueMin = 1;
		divisionCardValueMax = 100;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 6;
		points = 500; 
	} else if (level == 30) {
		cardValueMin = -10;
		cardValueMax = 70;
		divisionCardValueMin = 1;
		divisionCardValueMax = 144;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 6;
		points = 750; 
		multiplier = 8; // Unlock 8x multiplier
	} else if (level == 35) { 
		cardValueMin = -10;
		cardValueMax = 80;
		divisionCardValueMin = -1;
		divisionCardValueMax = 144;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 6;
		points = 1000; 
	} else if (level == 40) { 
		cardValueMin = -10;
		cardValueMax = 90;
		divisionCardValueMin = -1;
		divisionCardValueMax = 160;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 5;
		points = 2000; 
	} else if (level == 45) { 
		cardValueMin = -10;
		cardValueMax = 100;
		divisionCardValueMin = -1;
		divisionCardValueMax = 200;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 5;
		points = 3000; 
	} else if (level == 50) { 
		cardValueMin = -20;
		cardValueMax = 20;
		divisionCardValueMin = -10;
		divisionCardValueMax = 20;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 5;
		points = 5000; 
		multiplier = 10; // Unlock 10x multiplier
	} else if (level == 55) { 
		points = 7500; 
	} else if (level == 60) {  
		points = 9000; 
	} else if (level == 65) {  
		points = 12000; 
	} else if (level == 70) {  
		points = 20000;		
	} else if (level == 80) {  
		points = 35000; 
	}
}