'use strict';
$(document).ready(function(){
	var $registerForm = $('#registerForm');
	var $email = $('#email');
	var $password = $('#pass');
	var $error = $('#error');
	var $submit = $('#submit');

$registerForm.submit(function(e){
	e.preventDefault();
	if(email.val() === 'aaron@theironyard.com' && password.val() === 'password123' || email.val() === 'admin@google.com' && password.val() === 'pandas' || email.val() === 'admin@google.com' && password.val() === 'honeycrisp'){
		window.location.replace('http://www.theironyard.com');

	}
	else{
		error.text('your username and or password are invalid');
	}

	});

});
	

