'use strict'

var questionHTML = document.getElementById('question');
var preferenceHTML = document.getElementById('preference');
var ingredientsHTML = document.getElementById('ingredients');
var yesBtnHTML = document.getElementById('yes-btn');
var noBtnHTML = document.getElementById('no-btn');
var firstYesBtn = document.getElementById('yes-btn-first');
var randomNumber = Math.floor(Math.random() * 3);
var questionIndex = 0;
var ingredientIndex = 0;
//var count = 0;
var preferences = [];

$(document).ready(function() {
	


	function sayYes() {
		if(bartenderQuestions.questions[questionIndex] === '"Do ya like your drinks strong?"') {
			questionIndex++;
		}
		yesBtnHTML.onclick = function() {
			if(questionIndex < drinkIngredients.ingredients.length) {
				questionHTML.innerHTML = bartenderQuestions.getQuestion();
				var pref = "You like your drinks:";
				var ingredient = "<li>" + drinkIngredients.getPreference(); + "</li>";
				preferenceHTML.innerHTML = pref;
				$('#preference').show();
				$('#ingredients').prepend(ingredient);

				//passing in the current ingredient as an argument
				drinkIngredients.mixTheDrink(drinkIngredients.getPreference());
				questionIndex++;
				console.log("question number", questionIndex);
				ingredientIndex++;
				console.log("ingredient number", ingredientIndex);
			}
			else {
				$('#menu').hide('slide', function() {
					$('#drink-results').show('slide');
				})
			}	
		};
	};

	firstYesBtn.onclick = function() {
		$('#yes-btn-first').hide(function() {
			$(this).next().show();
			$(this).prev().show();
		});
		questionHTML.innerHTML = bartenderQuestions.getQuestion();
		sayYes();
	};

	/*yesBtnHTML.onclick = function() {
		if(questionIndex < drinkIngredients.ingredients.length) {
			questionHTML.innerHTML = bartenderQuestions.getQuestion();
			var pref = "You like your drinks:";
			var ingredient = "<li>" + drinkIngredients.getPreference(); + "</li>";
			preferenceHTML.innerHTML = pref;
			$('#preference').show();
			$('#ingredients').prepend(ingredient);

			//passing in the current ingredient as an argument
			drinkIngredients.mixTheDrink(drinkIngredients.getPreference());
			questionIndex++;
			console.log(questionIndex);	
		}
		else {
			$('#menu').hide('slide', function() {
				$('#drink-results').show('slide');
			})
		}	
	};*/

	noBtnHTML.onclick = function() {
		var pref = "You don't like your drinks " + drinkIngredients.getPreference();
		preferenceHTML.innerHTML = pref;
	};
});