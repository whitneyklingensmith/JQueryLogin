(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {
	var submit = $('#submit');
	var registerForm = $('#registerForm');
	registerForm.submit(function (e) {
		e.preventDefault();
		var email = $('#email').val();
		var password = $('#pass').val();
		var error = $('#error').html(' ');
		var hasError = false;

		if (email !== 'aaron@theironyard.com' || email !== 'admin@google.com') {
			error.html('Trying to get in with a wrong username. Get outttttaaaa here');
			error.show();
		} else if (password !== 'honeycrisp' || password !== 'pandas' || password !== 'password123') {
			error.html('Your password is a fake');
			error.show;
		} else if ('input' === " ") {
			error.html('Thought you could just not fill anything out ya dingus');
		} else if (email === 'aaron@theironyard.com' && password === 'password123' || email === 'admin@google.com' && password === 'pandas' || email === 'admin@google.com' && password === 'honeycrisp') {
			registerForm.hide();
			window.location.replace = 'http://www.theironyard.com/home.html'.show();
		}
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map