'use strict';
$(document).ready(function(){
	var $registerForm = $('#registerForm');
$(registerForm).submit(function(e){
	e.preventDefault();
	var email = $('#email').val();
	var password = $('#pass').val();
	var error = $('#error').html(' ');
	var hasError = false;
	
	if(email === 'aaron@theironyard.com' || email === 'admin@google.com' ){
		error.hide();
		hasError = false;

	}
	else if(password === 'password123' || password === 'honeycrisp' || password === 'pandas'){
		error.hide();
		hasError = false;
	}
	else if(email !== 'aaron@theironyard.com' || email !== 'admin@google.com'){
		error.html('Trying to get in with a wrong username. Get outttttaaaa here');
		hasError = true;
	}
	else if(password !== 'honeycrisp' || password !== 'pandas' || password !== 'password123'){
		error.html('Your password is a fake');
		hasError = true;
	}
	else{
		hasError = false;
		window.location = 'http://www.theironyard.com';
	}

	});

});
	

