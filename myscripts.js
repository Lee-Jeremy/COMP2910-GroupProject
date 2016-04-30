// Global Variables
var count = 0;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // The Matrix
var userSelection = [1, 2]; // The Two Cells Chosen By The User
var answer; // The Answer to the Equation
var duplicates = 0;
var timer;
var i;
var k;

// Abbreviated getElementByID
function $(id) {
	var element = document.getElementById(id); 
	if (element == null) { 
		alert ('programmer error: ' + id + 'does not exist.');
	}
	return element;			
	}

fillMatrix();
// Fill The Matrix Array
function fillMatrix() {
	for (i = 0; i < array.length; i++) {
		var rand = Math.floor((Math.random() * 9) + 1); // 1 to 9
		array[i] = rand;
	}
}

check();
// Check for duplicate cells
function check() {
	for (i = 0; i < array.length - 1; i++) {	
		for (k = (i + 1); k < array.length; k++) {
			if (array[i] == array[k]) {
				duplicates++;
				rand = Math.floor((Math.random() * 9) + 1); // 1 to 9
				array[k] = rand; // Assign the second occurence a new random number			
			} 				
		}
	}

while (duplicates != 0) {
	duplicates = 0;
	check();
}
duplicates = 0;
}

// Reveal Answer
timer = setTimeout(revealFifth, 1500); // 1.5 Second Delay onload
function revealFifth() {
	var cell = $('fifth');
	answer = (array[0] + array[3]);
	cell.innerHTML = answer;	
}

// Hide Answer
timer = setTimeout(hideFifth, 3500); // 2 Second Delay after reveal
function hideFifth() {
	var cell = $('fifth');
	cell.innerHTML = "";	
}

// Reveal Matrix
timer = setTimeout(revealMatrix, 5500); // 2 Second Delay After Answer is Hidden
function revealMatrix() {
	var i;
	var k;
	var z = 0;
	var cell;
	
	for (i = 1; i <= 3; i++) {
		for (k = 1; k <= 3; k++) {
			cell = $('r' + i + 'c' + k).innerHTML = array[z]; // Reveal each cell
			z++;
		}
	}
}

// Hide Matrix
timer = setTimeout(hideMatrix, 7500); // 2 Second Delay After Matrix is Revealed
function hideMatrix() {
	var i;
	var k;
	var cell;
	
	for (i = 1; i <= 3; i++) {
		for (k = 1; k <= 3; k++) {
			cell = $('r' + i + 'c' + k).innerHTML = ""; // Hide each cell
		}
	}	
}

// Reveal Operator
timer = setTimeout(revealOperator, 9500); // 2 Second Delay After Matrix is Hidden
function revealOperator() {
	var cell = $('second');
	cell.innerHTML = "+";	
}

// Reveal R1C1 Value
function revealR1C1(id) {
	var cell = ($(id));
	var num = array[0];		
	count++;
	
	if (count == 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; // Purple
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
	}	
	
	if (count == 2) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#800080"; 
		userSelection[1] = num;
		checkAnswer();
	}
}

// Reveal R1C2 Value
function revealR1C2(id) {
	var cell = ($(id));
	var num = array[1];
	count++;
	
	if (count == 1) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#800080"; 
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
	}	
	
	if (count == 2) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#800080"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#800080"; 
		userSelection[1] = num;
		checkAnswer();
	}
}

// Reveal R1C3 Value
function revealR1C3(id) {
	var cell = ($(id));
	var num = array[2];
	count++;
	
	if (count == 1) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#800080";
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
	}	
	
	if (count == 2) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#800080"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#800080";
		userSelection[1] = num;
		checkAnswer();
	}
}

// Reveal R2C1 Value
function revealR2C1(id) {
	var cell = ($(id));
	var num = array[3];
	count++;
	
	if (count == 1) {
		cell.innerHTML = num;
	cell.style.backgroundColor = "#800080";		 
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
	}	
	
	if (count == 2) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#800080"; 
		userSelection[1] = num;
		checkAnswer();
	}
}

// Reveal R2C2 Value
function revealR2C2(id) {
	var cell = ($(id));
	var num = array[4];
	count++;
	
	if (count == 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
	}	

	if (count == 2) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#800080"; 
		userSelection[1] = num;
		checkAnswer();
	}	
}

// Reveal R2C3 Value
function revealR2C3(id) {
	var cell = ($(id));
	var num = array[5];	
	count++;
	
	if (count == 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
	}	
	
	if (count == 2) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#800080";
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#800080"; 
		userSelection[1] = num;
		checkAnswer();
	}
}

// Reveal R3C1 Value
function revealR3C1(id) {
	var cell = ($(id));
	var num = array[6];	
	count++;
	
	if (count == 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
	}
	
	if (count == 2) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#800080"; 
		userSelection[1] = num;
		checkAnswer();
	}
}

// Reveal R3C2 Value
function revealR3C2(id) {
	var cell = ($(id));
	var num = array[7];
	count++;
	
	if (count == 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
	}	
	
	if (count == 2) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#800080"; 
		userSelection[1] = num;
		checkAnswer();
	}
}

// Reveal R3C3 Value
function revealR3C3(id) {
	var cell = ($(id));
	var num = array[8];	
	count++;
	
	if (count == 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
	}
	
	if (count == 2) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#800080"; 
		userSelection[1] = num;
		checkAnswer();
	}
}

// Check Answer
function checkAnswer(){
	var first = userSelection[0];
	var second = userSelection[1];
	
	if ((first + second) == answer){
		revealFifth();
		$('fifth').style.backgroundColor = "#29a329"; // Green
		
	} else {
		$('fifth').style.backgroundColor = "#e60000"; // Red
	}
}


























