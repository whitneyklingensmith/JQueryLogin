'use strict';
$(document).ready(function(){
	var submit = $('#submit');
	var registerForm = $('#registerForm');
registerForm.submit(function(e){
	e.preventDefault();
	var email = $('#email').val();
	var password = $('#pass').val();
	var error = $('#error').html(' ');
	var hasError = false;
	
	
	 if(email !== 'aaron@theironyard.com' || email !== 'admin@google.com'){
		error.html('Trying to get in with a wrong username. Get outttttaaaa here');
		error.show();
		
	}
	else if(password !== 'honeycrisp' || password !== 'pandas' || password !== 'password123'){
		error.html('Your password is a fake');
		error.show;
		
	}
	else if('input' === " "){
		error.html('Thought you could just not fill anything out ya dingus');
	}
	else if(email === 'aaron@theironyard.com' && password === 'password123' || email === 'admin@google.com' && password === 'pandas' || email === 'admin@google.com' && password === 'honeycrisp'){
		registerForm.hide();
		window.location.replace = ('http://www.theironyard.com/home.html').show();
	}

	});

});
	

