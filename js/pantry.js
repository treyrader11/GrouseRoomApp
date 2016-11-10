'use strict'

var Pantry = function(pantry) {
	this.pantry = pantry;
}

var pantryItems = new Pantry({
    strong: ['Vodka', 'Bourbon', 'Famous Grouse Scotch'],
    salty: ['Olives', 'Salt', 'Bacon'],
    bitter: ['Tonic', 'Bitters', 'Lemon Juice'],
    sweet: ['Local Cane Sugar', 'Honey', 'Soda'], 
    fruity: ['Freshly Squeezed Orange Juice', 'Freshly Squeezed Grapefruit Juice', 'Cucumber'] 
})