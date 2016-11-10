'use strict'

var Pantry = function(pantry) {
	this.pantry = pantry;
}

var pantryItems = new Pantry({
    strong: ['Vodka', 'Bourbon', 'Gin', 'Famous Grouse Scotch', 'Scotch'],
    salty: ['Olives', 'Salt', 'Bacon'],
    bitter: ['Lemon Peel','Tonic', 'Bitters', 'Lemon Juice'],
    sweet: ['Local Cane Sugar', 'Honey', 'Soda', 'Syrup'], 
    fruity: ['Freshly Squeezed Orange Juice', 'Freshly Squeezed Grapefruit Juice', 'Cucumber', 'Orange Peel'] 
})