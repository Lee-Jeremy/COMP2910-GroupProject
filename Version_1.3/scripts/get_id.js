/**
 * Abbreviated getElementByID
 */
function getId(id) {
	var element = document.getElementById(id); 
	if (element == null) { 
		alert ('programmer error: ' + id + ' does not exist.');
	}
	return element;			
	}