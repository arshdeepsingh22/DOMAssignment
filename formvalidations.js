function validate() {
	var fname = document.forms["regform"]["firstname"].value;
	var inpMatch = fname.match(/[a-z]+/i);
	if (inpMatch != fname) {
		alert("Name Field Cannot Be Empty or Inappropriate character");
		return false;
	}

	var lname = document.forms["regform"]["lastname"].value;
	var homeadd = document.forms["regform"]["homeaddress"].value;
	var inpMatch2 = homeadd.match(/[a-z0-9\s#-/]+/i);
	if (inpMatch2 != homeadd) {
		alert("Home Address Field Cannot Be Empty or Inappropriate character");
		return false;
	}

	var offadd = document.forms["regform"]["officeaddress"].value;
	var inpMatch3 = offadd.match(/[a-z0-9\s#-/]+/i);
	if (inpMatch3 != offadd) {
		alert("Office Address Field Cannot Be Empty");
		return false;
	}

	var mail = document.forms["regform"]["email"].value;
	var inpMatchn = mail.match(/[a-z0-9._+-]+@[a-z0-9]+\.[a-z]+/g);
	if (inpMatchn != mail) {

		alert("Enter Valid Email");
		return false;
	}

	var pass = document.forms["regform"]["password"].value;
	var inpMatch4 = pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/g);
	if (inpMatch4 != pass) {
		alert("Password should contain One Digit One SmallCase One UpperCase One from !@#$%^&*  and Must Be 8 characters long");
		return false;
	}

	var cpass = document.forms["regform"]["confirmpassword"].value;
	if (cpass != pass) {
		alert("Passwords dont match");
		return false;
	}

	return true;


}

function funcAddress() {


	var homeadd = document.forms["regform"]["homeaddress"].value;
	offadd = document.getElementById("compadd");
	offadd.value = homeadd;


}


function checkingForm() {
	if (validate() == true) {
		var passcopy = document.getElementById('submit');
		passcopy.removeAttribute("disabled");
	}
}


function registering(forrm) {

	if (validate(forrm) == true) {
		alert("Registered");
		var fname = forrm.firstname.value;
		console.log(fname);
		var lname = forrm.lastname.value;
		var ha = forrm.homeaddress.value;
		var oa = forrm.officeaddress.value;
		var ml = forrm.email;
		var mob = forrm.mobilephone;
		var pass = forrm.password;
		var cpass = forrm.confirmpassword;
		var dash = document.getElementById("dashboard");
		// var parainput = document.createElement("div");
		// parainput.setAttribute("type", "button");
		// parainput.setAttribute("value", fname);
		var parainput = document.createElement("li");
		var textnode = document.createTextNode(fname + " " + lname);
		parainput.appendChild(textnode);
		parainput.setAttribute("onmouseover", "mOver(this)");
		parainput.setAttribute("class", "body-dashboard-eles");
		dash.appendChild(parainput);
	}

}



function mOver(obj) {
	var mail = document.forms["regform"]["email"].value;
	obj.title = mail;
}



function dropfunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
	if (!event.target.matches('.header-list2-name')) {

		var dropdowntotals = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowntotals.length; i++) {
			var openDropdown = dropdowntotals[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
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

}

// window.onload = function() {
// 	


// window.onload = function() {
// 	
// }


// window.onload = function() {
// 	
// }