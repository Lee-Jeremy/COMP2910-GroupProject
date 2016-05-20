/**
 * Changes the hexagon colour every 5 levels
 */
function hexColour() {
	if ( level >= 6 && level < 11) {
		getId('hexImg').src= "images/blue.png";
		getId('hexImgOverlay').src= "images/blue.png";
	}
	else if ( level >= 11 && level < 16) {
		getId('hexImg').src= "images/grey.png";
		getId('hexImgOverlay').src= "images/grey.png";
	}
	else if ( level >= 16 && level < 21) {
		getId('hexImg').src= "images/lime";
		getId('hexImgOverlay').src= "images/lime.png";
	}
	else if ( level >= 21 && level < 26) {
		getId('hexImg').src= "images/pink.png";
		getId('hexImgOverlay').src= "images/pink.png";
	}
	else if ( level >= 26 && level < 31) {
		getId('hexImg').src= "images/purple.png";
		getId('hexImgOverlay').src= "images/purple.png";
	}
	else if ( level >= 31 && level < 36) {
		getId('hexImg').src= "images/red.png";
		getId('hexImgOverlay').src= "images/red.png";
	}
	else if ( level >= 36 && level < 41) {
		getId('hexImg').src= "images/teal.png";
		getId('hexImgOverlay').src= "images/teal.png";
	}
	else if ( level >= 41) {
		getId('hexImg').src= "images/yellow.png";
		getId('hexImgOverlay').src= "images/yellow.png";
	}
}