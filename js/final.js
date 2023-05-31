// Copyright 
const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyrightyear');

copyrightyear.textContent =`${new Date().getFullYear()}`;


// Date

const date = document.querySelector("#date");

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
date.textContent= fulldate;
//console.log(date.value);


// Writing to Local Storage

const button = document.querySelector('.btn');
const list = document.querySelector('.list');
let input = document.getElementById('input').value;

//const storage = getLocalStorage();
//console.log(storage);
//renderRecipe(storage);
//getMeal(recipe);


//API
let resultElement = document.getElementById('result');
let researchBtn = document.getElementById('btn');
let url = "https://low-carb-recipes.p.rapidapi.com/search?name=cake&tags=keto%3Bdairy-free&includeIngredients=egg%3Bbutter&excludeIngredients=cinnamon&maxPrepareTime=10&maxCookTime=20&maxCalories=500&maxNetCarbs=5&maxSugar=3&maxAddedSugar=0&limit=10";

const meal = document.getElementById('meal');
const details = document.querySelector('.detail');
const close = document.getElementById('close');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd574b71761mshd6036c941960d4cp13806ejsn7f8ba0da29ce',
		'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
	}
};

//async function apiResponse() {
	//const response = await fetch(url, input);
	//const result = await response.text();
	//console.log(result);}

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}



function getMeal(recipes){
    recipes.forEach((recipe) => {
		let card = document.createElement("section");
		let name = document.createElement('h2');
		let photo = document.createElement('img');
		let tags = document.createElement('h3');
		let description = document.createElement('p');
		let prepareTime = document.createElement('h3');
		let cookTime = document.createElement('h3');
		let ingredients = document.createElement('h3');
		let steps = document.createElement('h3');
		let servings = document.createElement('h3');
		let servingSize = document.createElement('h3');
		let nutrients = document.createElement('h3');
    

		name.textContent = (`${recipe.name}`);
		description.textContent = (`${recipe.description}`);
		tags.textContent = (`${recipe.tag}`);
		prepareTime.textContent = (`${recipe.prepareTime}`);
		cookTime.textContent = (`${recipe.cookTime}`);
		ingredients.textContent = (`${recipe.ingredients}`);
		steps.textContent = (`${recipe.steps}`);
		servings.textContent = (`${recipe.servings}`);
		servingSize.textContent = (`${recipe.servingSize}`);
		nutrients.textContent = (`${recipe.nutrients}`);
    

		photo.setAttribute('src', recipe.image);
		photo.setAttribute('alt', (`Recipe of ${recipe.name}`));
		photo.setAttribute('loading', 'lazy');

	card.appendChild(name);
	card.appendChild(photo);
	card.appendChild(prepareTime);
	card.appendChild(cookTime);
	card.appendChild(tags);
	card.appendChild(ingredients);
	card.appendChild(description);
	card.appendChild(steps);
	card.appendChild(servings);
	card.appendChild(servingSize);
	card.appendChild(nutrients);

    document.querySelector('div.cards').appendChild(card);
})
}
getMeal();
//apiResponse();


