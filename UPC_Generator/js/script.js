
var $ = function(id) {
    return document.getElementById(id);
};

function generateBarcode() {
	var inputUpc = $('upcInput').value;
	if(validateUpc(inputUpc)) {
		JsBarcode("#upc-a", inputUpc, {format: "upc"});
	}
}

function validateUpc(upc) {
	// https://sciencing.com/verify-upc-number-6810204.html rules for UPC verification
	var check = true;
	if (upc.toString().length != '12') {
		alert("Invalid UPC length. It should be 12 digits.");	
	} else if (check) {
		var odd, even, sum, tmp; //vars
		odd = +upc[0] + +upc[2] + +upc[4] + +upc[6] + +upc[8] + +upc[10]; // add all odd positions of the upc
		odd *= 3; // multiply the added odd positions by 3
		even = +upc[1] + +upc[3] + +upc[5] + +upc[7] + +upc[9]; // add the first 5 even positions of the upc
		sum = +odd + +even; // add the 
		tmp = Math.trunc(sum / 10); // get rid of numbers past decimal point
		tmp += 1; // add one to tmp
		tmp *= 10; // multiply tmp by 10 so it is the next multiple of 10 past the sum
		tmp -= sum; // subtract the tmp from the sum to get the check digit (last digit)
		if (upc[11] != tmp) { // if the check digit is not equal to tmp, the upc is invalid
			alert("The UPC entered is invalid.");
			check = false; // invalid upc
		}
	}
	return check;
}

