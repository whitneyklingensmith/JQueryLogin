'use strict';
$(document).ready(function(){
var form = $('#registerForm');
var email = $('#email');
var password = $('#pass');
form.submit(function(e){
	e.preventDefault();
	var users = [
		{email: 'aaron@theironyard.com', password: 'password123'},
		{email: 'admin@google.com', password: 'pandas'},
		{email: 'cool@test.com', password: 'honeycrisp'}
	];
	var emailString = email.val();
	var passwordString = password.val();
	$('.error').text(' ');
	var userFound = false;
	
	if(emailString < 1 || passwordString < 1){
	 	$('error.empty').text('You have to enter something ya dingus');
	 	return;
	 }
	users.forEach(function(user, index){
		if(user.email ===  emailString && user.password === passwordString){
			userFound = true;
		}
	});
		
	if(userFound) {
			window.location = 'http://theironyard.com';
	}
	else{
		$('.error.wrong').text('username and or password are wrongo');
	}

	});

});
	

