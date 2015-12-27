(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {
	var $registerForm = $('#registerForm');
	var $email = $('#email');
	var $password = $('#pass');
	var $error = $('#error');
	var $submit = $('#submit');

	$registerForm.submit(function (e) {
		e.preventDefault();
		if (email.val() === 'aaron@theironyard.com' && password.val() === 'password123' || email.val() === 'admin@google.com' && password.val() === 'pandas' || email.val() === 'admin@google.com' && password.val() === 'honeycrisp') {
			window.location.replace('http://www.theironyard.com');
		} else {
			error.text('your username and or password are invalid');
		}
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map