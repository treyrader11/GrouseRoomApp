'use strict'

var $displayQuestion = $('#question')
var $yesButton = $('#yes-btn')
var $noButton = $('#no-btn')
var $nextButton = $('#nxt-btn')
var $okButton = $('#ok-btn')
var $userPreference = $('#user-preference')
var $bubbleChat = $('#bubble > img')
var	$introductionPage = $('#intro-content')
var $barPage = $('#question-content')
var count = 0;
var questionIndex = 0;
var drinkIngredientsRequested = [];
	
$displayQuestion.hide();
$introductionPage.fadeIn(2000);
$okButton.fadeIn(2000); 

	
$(function() {

	function ifYes() {
		if  (bartenderQuestions.question[questionIndex]) {
			console.log(bartenderQuestions.question[questionIndex]);
			// pushing users preferences to the empty drinkIngredientsRequested array
			drinkIngredientsRequested.push(drinkIngredients.ingredients[questionIndex])
			$userPreference.text("You like your drinks " + drinkIngredients.ingredients[questionIndex]);
		}
	}

	function ifNo() {
		if (bartenderQuestions.question[questionIndex]) {
			
			$userPreference.text("No thanks.");
			console.log('inside the ifNo function')
		}
	}

	function endQuestions() {
		if (questionIndex == 5) {
			var preferences = new Ingredients(drinkIngredientsRequested);
				
			//random number between 0 and 3, if added + 1, it'll be between 1 and 3
			var randomNumber = Math.floor(Math.random() * 3);
			var createDrink = " ";
			
			for (var i = 0 ; i < preferences.ingredients.length; i++) {
				createDrink += pantryItems.pantry[preferences.ingredients[i]][randomNumber] + " ";
			}

			$("#drink-results").prepend("<li>William made you a special drink with " + createDrink+ "</li>");

			console.log(createDrink);
			var cocktail = "";

	   		$barPage.hide('puff', function() {

				$('#results').fadeIn(1000, function() {
					$('#drink-shaker').toggle('shake', { times: 30 }, 'slow', function() {
						$(this).hide();
						$('#drink-results-container').show('slide');
					});
				});
			});
		}
	}


	$okButton.click(function() {
		$(this).hide('slide')
		$introductionPage.hide('drop', function() {
			$barPage.show('slide', function() {
				$displayQuestion.append(bartenderQuestions.question[questionIndex]);
				$bubbleChat.fadeIn(1000);
				$displayQuestion.fadeIn(1000);
			});
		});
	});	

	$yesButton.click(function(){
		ifYes();
		count++;
		$userPreference.show('slide');
		$nextButton.show('slide');
	})

	$noButton.click(function() {
		ifNo();
		count++;
		$userPreference.show('slide');
		$nextButton.show('slide');

	})

	$nextButton.click(function() {
		questionIndex++;
		console.log("your preferences:", drinkIngredientsRequested);
		$bubbleChat.fadeOut(500);
		$displayQuestion.fadeOut(500, function() {
			$(this).empty();
			$(this).append(bartenderQuestions.question[questionIndex]);
			endQuestions();	
		});
		$bubbleChat.fadeIn(500);
		$displayQuestion.fadeIn(500);
		$userPreference.hide('slide', function() {
			$userPreference.empty();
		});
	});
});



/*var AllDrinks = new Drink({
		// speciality drinks
		Grouse_Hiball: ['Lemon Juice', 'Soda', 'Scotch'],
		Scottish_Maid: ['Famous Grouse Scotch', 'St Germain elderflower liquer', 'Cucumber', 'Lemon Juice'],
		Rob_Roy: ['Famous Grouse Scotch', 'Sweet Vermouth', 'Bitters'],
		Blood_and_Sand: ['Famous Grouse Scotch', 'Cherry Heering Brandy', 'Freshly Squeezed Orange Juice', 'Sweet Vermouth'],
		// classic drinks
		Old_Fashioned: ['Bourbon', 'Bitters', 'Freshly Squeezed Orange Juice', 'Local Cane Sugar'],
		Perfect_Manhattan: ['Bourbon', 'Sweet Vermouth'],
		Sazerac: ['Bourbon', 'Bitters', 'Local Cane Sugar', 'Lemon Peel'],
		Moscow_Mule: ['Vodka', 'Lime Juice'],
		Tom_Collins: ['Gin', 'Lemon Juice', 'Local Cane Sugar', 'Soda'],
		John_Collins: ['Bourbon', 'Lemon Peel', 'Local Cane Sugar', 'Soda'],
		Brown_Dirby: ['Bourbon', 'Freshly Squeezed Grapefruit Juice', 'Local Cane Sugar']
	});*/