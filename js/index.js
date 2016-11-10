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
			//console.log(bartenderQuestions.question[questionIndex]);
			// pushing users preferences to the empty drinkIngredientsRequested array
			drinkIngredientsRequested.push(drinkIngredients.ingredients[questionIndex])
			$userPreference.text("You like your drinks " + drinkIngredients.ingredients[questionIndex]);
		}
	}

	function ifNo() {
		if (bartenderQuestions.question[questionIndex]) {
			
			$userPreference.text("No thanks.");
			//console.log('inside the ifNo function')
		}
	}

	function endQuestions() {
		if (questionIndex == 5) {
			var preferences = new Ingredients(drinkIngredientsRequested);
			console.log('"ingredients" for new Ingredients instance', preferences);	
			//random number between 0 and 3, if added + 1, it'll be between 1 and 3
			var randomNumber = Math.floor(Math.random() * 3);
			var createDrink = " "; //<--puts each item of the array into quotes, so will need bracket notation to accessprop
			
			for (var i = 0 ; i < preferences.ingredients.length; i++) {
				createDrink += "<li>" +pantryItems.pantry[preferences.ingredients[i]][randomNumber]+ "</li>";
			}
			$('#ingredients').append(createDrink);

			//need bracket notation because '"strong"' is a string inside of the drink
			//IngredientsRequested array. 
			console.log(pantryItems.pantry["strong"]);


			

			createDrink = createDrink.toLowerCase();
			$("#drink-results").prepend("<li>William made you a special drink!</li>");

			//console.log(createDrink);
			var cocktail = "";

	   		$barPage.hide('puff', function() {

				$('#results').fadeIn(1000, function() {
					$('#drink-shaker').toggle('shake', { times: 30 }, 'slow', function() {
						$(this).hide();
						$('#drink-results-container').show('slide');
						$('#another-drink').fadeIn(1000);
					});
				});
			});
		}
	}

	function getAnotherDrink() {
		var count = 0;
		var questionIndex = 0;
		var drinkIngredientsRequested = [];
		$('#results').fadeOut(500, function() {
			$barPage.show('slide');
		})

	}

	function leaveBar() {
		$('#results').fadeOut(2000);
		$('body').html("<h1 id='goodbye'><Thank you!</h1>")
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
		$(this).fadeOut(200);
		$noButton.fadeOut(200, function() {
			$userPreference.show('slide');
			$nextButton.show('slide');
		});
		ifYes();
		count++;
		//$userPreference.show('slide');
		//$nextButton.show('slide');
	})

	$noButton.click(function() {
		$(this).fadeOut(200);
		$yesButton.fadeOut(200, function() {
			$userPreference.show('slide');
			$nextButton.show('slide');
		});
		ifNo();
		count++;
		//$userPreference.show('slide');
		//$nextButton.show('slide');

	})

	$nextButton.click(function() {
		$(this).hide('slide', function() {
			$noButton.fadeIn(200);
			$yesButton.fadeIn(200);
		});
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

	$('#yes-again').click(function() {
		getAnotherDrink();
	})

	$('#no-again').click(function() {
		leaveBar();
	})
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