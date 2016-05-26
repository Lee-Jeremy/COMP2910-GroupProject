/**
 * Set-up Matrix and Equation Cards for Flipping
 */
$(document).ready(function(){ 
	$(".matrixCards").flip({ // Matrix Cards
		axis: 'y',
		trigger: 'manual',
		front: ".back",
		back: ".front"	
	});	
	$(".equationCards").flip({ // Equation Cards
		axis: 'y',
		trigger: 'manual',
		front: ".back",
		back: ".front"	
	});
});