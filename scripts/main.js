'use strict';

var userName = $('.userName');
var passWord = $('.passWord');
var butt = $('.butt');
var login = [];

butt.on('submit', check);

var pass1 = ['aaron@theironyard.com' , 'password123'];
var pass2 = ['admin@google.com' , 'pandas'];

function check(e){
	e.preventDefault();
	login.push(userName.val());
	login.push(passWord.val());

}

