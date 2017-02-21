function validate() {
	var fname = document.forms["regform"]["firstname"].value;
	var inpMatch = fname.match(/[a-z]+/i);
	if (inpMatch != fname) {
		return false;
	}

	var lname = document.forms["regform"]["lastname"].value;
	var homeadd = document.forms["regform"]["homeaddress"].value;
	var inpMatch2 = homeadd.match(/[a-z0-9\s#-/]+/i);
	if (inpMatch2 != homeadd) {
		return false;
	}

	var offadd = document.forms["regform"]["officeaddress"].value;
	var inpMatch3 = offadd.match(/[a-z0-9\s#-/]+/i);
	if (inpMatch3 != offadd) {
		return false;
	}

	var mail = document.forms["regform"]["email"].value;
	var inpMatchn = mail.match(/[a-z0-9._+-]+@[a-z0-9]+\.[a-z]+/g);
	if (inpMatchn != mail) {
		return false;
	}

	var pass = document.forms["regform"]["password"].value;
	var inpMatch4 = pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/g);
	if (inpMatch4 != pass) {
		return false;
	}

	var cpass = document.forms["regform"]["confirmpassword"].value;
	if (cpass != pass) {
		return false;
	}
	return true;
}

function validateName() {
	var fname = document.forms["regform"]["firstname"].value;
	var inpMatch = fname.match(/[a-z]+/i);
	if (inpMatch != fname) {
		alert("Name Field Cannot Be Empty or Inappropriate character");
		disSub();
		return false;
	}
	checkingForm();
	return true;
}


function validateHomeAddress() {
	var homeadd = document.forms["regform"]["homeaddress"].value;
	var inpMatch2 = homeadd.match(/[a-z0-9\s#-/]+/i);
	if (inpMatch2 != homeadd) {
		alert("Home Address Field Cannot Be Empty or Inappropriate character");
		disSub();
		return false;
	}
	checkingForm();
	return true;
}

function validateOfficeAddress() {
	var offadd = document.forms["regform"]["officeaddress"].value;
	var inpMatch3 = offadd.match(/[a-z0-9\s#-/]+/i);
	if (inpMatch3 != offadd) {
		alert("Office Address Field Cannot Be Empty");
		disSub();
		return false;
	}
	checkingForm();
	return true;
}

function validateEmail() {
	var mail = document.forms["regform"]["email"].value;
	var inpMatchn = mail.match(/[a-z0-9._+-]+@[a-z0-9]+\.[a-z]+/g);
	if (inpMatchn != mail) {

		alert("Enter Valid Email");
		disSub();
		return false;
	}
	checkingForm();
	return true;
}

function validatePassword() {
	var pass = document.forms["regform"]["password"].value;
	var inpMatch4 = pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/g);
	if (inpMatch4 != pass) {
		disSub();
		alert("Password should contain One Digit One SmallCase One UpperCase One from !@#$%^&*  and Must Be 8 characters long");
		return false;
	}
	checkingForm();
	return true;
}

function validateConfirmPassword() {
	var pass = document.forms["regform"]["password"].value;
	var cpass = document.forms["regform"]["confirmpassword"].value;
	if (cpass != pass) {
		alert("Passwords dont match");
		disSub();
		return false;
	}
	checkingForm();
	return true;
}



function funcAddress() {
	var homeadd = document.forms["regform"]["homeaddress"].value;
	offadd = document.getElementById("compadd");
	offadd.value = homeadd;
}



function disSub() {
	var passcopy = document.getElementById('submit');
	console.log('here');
	passcopy.setAttribute("disabled", "true");

}


function checkingForm() {
	var passcopy = document.getElementById('submit');
	if (validate() == true) {
		passcopy.removeAttribute("disabled");
	}
	if (validate() == false) {
		console.log('here');
		passcopy.setAttribute("disabled", "true");
	}
}


function registering(forrm) {

	if (validate() == true) {
		alert("Registered");
		var fname = forrm.firstname.value;
		console.log(fname);
		var lname = forrm.lastname.value;
		var dash = document.getElementById("dashboard");
		// var parainput = document.createElement("div");
		// parainput.setAttribute("type", "button");
		// parainput.setAttribute("value", fname);
		var parainput = document.createElement("li");
		var textnode = document.createTextNode(fname + " " + lname);
		parainput.appendChild(textnode);
		parainput.setAttribute("title", forrm.email.value);
		parainput.setAttribute("class", "body-dashboard-eles");
		dash.appendChild(parainput);
	}

}


function dropfunction() {
	var drpd = document.getElementById("myDropdown");
	drpd.setAttribute("class", "dropdown-content show")
}

window.onclick = function(event) {
	if (!event.target.matches('.header-list2-name')) {
		var drp = document.getElementById("myDropdown");
		drp.removeAttribute("class");
		drp.setAttribute("class", "dont-show")


	}
}



window.onload = function() {
	var passpaste = document.getElementById('pass');
	passpaste.onpaste = function(e) {
		alert("Paste not allowed");
		e.preventDefault();
	}
	var passpaste2 = document.getElementById('cpass');
	passpaste2.onpaste = function(g) {
		alert("Paste not allowed");
		g.preventDefault();
	}
	passpaste.oncopy = function(h) {

		h.preventDefault();
	}
	passpaste2.oncopy = function(u) {

		u.preventDefault();
	}
	document.getElementById("nameBtn").onclick = function() {
		dropfunction()
	};
	document.getElementById("firstname").onblur = function() {
		validateName()
	};
	document.getElementById("homeadd").onblur = function() {
		validateHomeAddress()
	};
	document.getElementById("compadd").onblur = function() {
		validateOfficeAddress()
	};
	document.getElementById("email").onblur = function() {
		validateEmail()
	};
	document.getElementById("pass").onblur = function() {
		validatePassword()
	};
	document.getElementById("cpass").onblur = function() {
		validateConfirmPassword()
	};
	document.getElementById("check").onclick = function() {
		funcAddress()
	};
	document.getElementById("submit").onclick = function() {
		registering(this.form)
	};


}