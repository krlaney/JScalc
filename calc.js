/*JS Calculator*/
//highlight errors, check for different types
var errMessage = "";

function checkInput() {
	//checks input to ensure validity
	//failed regex's
	var patt1 = /[a-z]/i;
	//var patt2 = /\d/g;
	//var patt3 = /^([-+/*]\d+(\.\d+)?)*/;
	//var patt4 = /\d[-+/*]/;
	//var patt5 = /(\.\d[-+*/])/;
	var patt6 = /[-+/*()]+/;
	var patt7 = /\./;
	var patt8 = /\d/;
	var input = document.forms["inputOutput"]["fname"].value;
	var check;
	var checkDec = true;
	
	for (i = 0, len = input.length; i < len; i++) {
		if (patt6.test(input[i])) {
			//test if character is an operator
			check = true;
		}
		else if (patt7.test(input[i])) {
			//test if character is a decimal
			check = true;
		}
		else if (patt8.test(input[i])) {
			//test if character is a digit
			check = true;
		}
		else if (patt1.test(input[i])) {
			//test if character is a letter
			check = false;
			errMessage = "Letters are not valid inputs";
			i = len;
		}
		else {
			check = false;
			errMessage = "Invalid Input";
			i = len;
		}
	}
	return check;
}

function kbdPress(event) {
	//checks a keyboard press and submits if it was the enter key
	var k = event.key;
	if (k === "Enter") {
		//prevents result from being submitted like a form
		event.preventDefault();
		submit();
	}
}

function buttonPress(buttonID) {
	//adds whatever the button is to the form
	document.forms["inputOutput"]["fname"].value += buttonID;
	document.getElementById("txtbox").focus();
}

function clearForm() {
	//clears form
	document.forms["inputOutput"]["fname"].value = "";
	document.getElementById("txtbox").focus();
}

function del() {
	//deletes the last character entered
	var len = document.forms["inputOutput"]["fname"].value.length;
	document.forms["inputOutput"]["fname"].value = document.forms["inputOutput"]["fname"].value.slice(0, len - 1);
	document.getElementById("txtbox").focus();
}

function submit() {
	//calculates result
	
	//var result = eval(document.forms["inputOutput"]["fname"].value);
	try {
		document.forms["inputOutput"]["fname"].value = eval(document.forms["inputOutput"]["fname"].value);
	}
	catch(err) {
		swal(err.message);
	}
	/*alert(eval(document.forms["inputOutput"]["fname"].value));
	if (checkInput()) {
		document.forms["inputOutput"]["fname"].value = eval(document.forms["inputOutput"]["fname"].value);
	}
	else {
		swal(errMessage);
	}
	document.getElementById("txtbox").focus();*/
}