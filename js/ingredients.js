'use strict'

var Ingredients = function(ingredients) {
	this.ingredients = ingredients; 
};
	
var drinkIngredients = new Ingredients([
	"strong",
	"salty",
	"bitter",
	"sweet",
	"fruity"
]);

Ingredients.prototype.getPreference = function() {
	return this.ingredients[ingredientIndex];
}

Ingredients.prototype.mixTheDrink = function(pref) {
	preferences.push(pref);
	if(preferences.length === this.ingredients.length) {
		showPreference(preferences);
	}

}

function showPreference(preferences) {
	for(var i = 0; i < preferences.length; i++) {
		var pref = "<li>" + preferences[i] + "</li>"; 
	$('#drink').append(pref);
	}
}