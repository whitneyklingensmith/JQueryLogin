(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {
	var form = $('#registerForm');
	var email = $('#email');
	var password = $('#pass');
	form.submit(function (e) {
		e.preventDefault();
		var users = [{ email: 'aaron@theironyard.com', password: 'password123' }, { email: 'admin@google.com', password: 'pandas' }, { email: 'cool@test.com', password: 'honeycrisp' }];
		var emailString = email.val();
		var passwordString = password.val();
		$('.error').text(' ');
		var userFound = false;

		if (emailString < 1 || passwordString < 1) {
			$('error.empty').text('You have to enter something ya dingus');
			return;
		}
		users.forEach(function (user, index) {
			if (user.email === emailString && user.password === passwordString) {
				userFound = true;
			}
		});

		if (userFound) {
			window.location = 'http://theironyard.com';
		} else {
			$('.error.wrong').text('username and or password are wrongo');
		}
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map