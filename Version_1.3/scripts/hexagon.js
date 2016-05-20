/**
 * Changes the hexagon colour every 5 levels
 */
function hexColour() {
	if ( level >= 5 && level < 10) {
		getId('hexImg').src= "images/blue.png";
		getId('hexImgOverlay').src= "images/blue.png";
	}
	else if ( level >= 10 && level < 15) {
		getId('hexImg').src= "images/grey.png";
		getId('hexImgOverlay').src= "images/grey.png";
	}
	else if ( level >= 15 && level < 20) {
		getId('hexImg').src= "images/lime";
		getId('hexImgOverlay').src= "images/lime.png";
	}
	else if ( level >= 20 && level < 25) {
		getId('hexImg').src= "images/pink.png";
		getId('hexImgOverlay').src= "images/pink.png";
	}
	else if ( level >= 25 && level < 30) {
		getId('hexImg').src= "images/purple.png";
		getId('hexImgOverlay').src= "images/purple.png";
	}
	else if ( level >= 30 && level < 35) {
		getId('hexImg').src= "images/red.png";
		getId('hexImgOverlay').src= "images/red.png";
	}
	else if ( level >= 35 && level < 40) {
		getId('hexImg').src= "images/teal.png";
		getId('hexImgOverlay').src= "images/teal.png";
	}
	else if ( level >= 40) {
		getId('hexImg').src= "images/yellow.png";
		getId('hexImgOverlay').src= "images/yellow.png";
	}
}