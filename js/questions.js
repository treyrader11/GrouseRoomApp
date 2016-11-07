'use strict'

var Question = function(questions) {
	this.questions = questions;
};
	
	//bartenderQuestions.questions = []
var bartenderQuestions = new Question([
	'"Do ya like your drinks strong?"',
	'"Do ya like it with a salty tang?"',
	'"Ya like em bitter?"',
	'"A little sweetness with your poison?"',
	'"Are ya one for a fruity finish?"'
]);

Question.prototype.getQuestion = function() {
	return this.questions[questionIndex];
};