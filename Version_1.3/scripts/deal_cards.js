/**
 * Deal the Matrix Cards
 */
function dealCards() {
	var interval;
    deal.play();
	$("#animationCard11").animate({ // Move to the answer card position and shrink
			left: '71.1vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},150, function(){		
	$("#animationCard10").animate({ // Move to the operator card position and shrink
			left: '20.7vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},150, function(){
	$("#animationCard9").animate({ // Move to the r3c3 position
			left: '58vw',
			top: '43.75vh',
		},150, function(){
	$("#animationCard8").animate({ // Move to the r3c2 position
			left: '33.6vw',
			top: '43.75vh',
		},150, function(){
	$("#animationCard7").animate({ // Move to the r3c1 position
			left: '9.5vw',
			top: '43.75vh',
		},150, function(){
	$("#animationCard6").animate({ // Move to the r2c3 position
			left: '58vw',
			top: '21.8vh',
		},150, function(){
	$("#animationCard5").animate({ // Move to the r2c2 position
			left: '33.6vw',
			top: '21.8vh',
		},150, function(){
	$("#animationCard4").animate({ // Move to the r2c1 position
			left: '9.5vw',
			top: '21.8vh',
		},150, function(){
	$("#animationCard3").animate({ // Move to the r1c3 position
			left: '58vw',
			top: '0vh',
		},150, function(){
	$("#animationCard2").animate({ // Move to the r1c2 position
			left: '33.6vw',
			top: '0vh',
		},150, function(){ // Change background color and border style of all matrix card's backside's
	for (var i = 1; i <= 3; i++) {
		for (var k = 1; k <=3; k++) {
			getId('r' + i + 'c' + k + 'Back').style.backgroundColor = "#263545"; // Navy blue
			getId('r' + i + 'c' + k + 'Back').style.border = "1px solid #000000"; // Solid black border
		}
        deal.pause();
	}
    
	getId('eqCard2Back').style.backgroundColor = "#800000"; // Red
	getId('eqCard2Back').style.border = "1px solid #000000"; // Solid black border
	getId('eqCard4Back').style.backgroundColor = "#800000";	// Red
	getId('eqCard4Back').style.border = "1px solid #000000"; // Solid black border
    easterEgg(); // Put easter eggs on card backs if condition is met
	setTimeout(hideAnimations, 450);
		});		
		});	
		});	
		});		
		});		
		});		
		});	
		});	
		});
		});
}