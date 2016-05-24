***************************************************************************************************************
					   	   Team 26

			     		 	 Mathemagics 

	  	        Keir Forster | Rei Ruiz | Jeremy Lee | Yannick Nguyen | Lucas Tylor
***************************************************************************************************************
					*      PROJECT OVERVIEW	     *
					******************************

	      Game Title: Mathemagics 

	       Hosted at: jlofcst.comxa.com/startscreen.php

	Game Description: Mathemagics utilitizes speed, memory-recall, and problem-solving. 
	    	    	  The player will be tasked with memorizing an answer and a 3x3 matrix 
	    	    	  of numbers. The player will then select two numbers from the matrix that 
	    	     	  together complete the eqution. The equation wil be evaluted to be true
	    	     	  or false based on the two numbers chosen by the user and the original answer.

	Code Description: There are three separate pages for our game: startscreen.php, leaderboard.php, and 
			  playmode.php. Each page is its own php file located in the root directory. 
			  "startscreen.php" is the entry point into the game. 

			  The functions for each page are separated into javascript, php, and  sql files. 
			  The javascript files are located in the "scripts" folder. The php and SQL functions are 
			  in the root directory called "config" and "functions." 

			  Each page has their own style sheet located in the "style" folder. Startscreen 
			  uses the "startscreen" css stylesheet, Playmode uses the "base" css stylesheet,
			  and Leaderboard uses the "leaderboard" css stylesheet.

			  The "backup", "images", and "sounds" directories contain their respective contents
			  accessible from the root folder. The "backup" contains our source code from the previous
			  week's sprint.

       Technologies Used: -HTML CSS for the game layout
			  -Javascript and jQuery for the functionality
			  -PHP, SQL, AJAX, and jQuery for database management and funcitonality

     Issues and Problems: The game runs at its best on mobile devices using Google Chrome and 
			  in mobile view inside the browsers debugger. The game will not render 
			  properly when played in full screen on a desktop or using Internet Explorer 
			  or Safari on any device. 

			  Currently, only "play" mode is funcitonal. The "practice" mode is not yet
			  implemented, so clicking on the operators will result in nothing.

			  The "tutorial" checkbox is not yet implemented, so checking off the box
			  before the start of level 1 will not activate the tutorial.

			  Some text will overflow outside of their containers when the game is viewed on 
			  screen resolutions smaller than the iPhone 6 specifications. The sound effects 
			  don't funciton adequately on mobile devices.

			  There is an instance where the answer card may not reveal, this is the result of
			  the callstack error. Not yet resolved.

			  On some mobile operating systems (Android), when entering a name into the input box, the 
			  on-screen keyboard display will shrink the viewport of the game resulting 
			  in a "squished" look. 
	
			  After submitting your name into the high scores input box and clicking 
			  "submit", the leaderboard page loads faster than new table data is processed.
			  An additional refresh is required in order to display the updated high scores.





		

