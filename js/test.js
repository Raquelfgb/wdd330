// Copyright 
const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyrightyear');

copyrightyear.textContent =`${new Date().getFullYear()}`;

const lastModified = document.querySelector('#lastmodified');
lastModified.textContent = new Date(document.lastModified);

//Nav

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

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
document.querySelector("#date").textContent = fulldate;

const banner = document.getElementById('banner');
if (dayName === 'Monday', dayName === 'Tuesday') {
	banner.classList.add('bannershow');
}
else{
	banner.classList.add('bannerhidden');
}


// Writing to Local Storage

const button = document.querySelector('.btn');
const list = document.querySelector('.list');
let input = document.getElementById('input').value;

button.addEventListener('click', () =>{
	let storageArray = getLocalStorage();
	console.log(storageArray);
	if (storageArray === null) {
		storageArray = [];
	}
    storageArray.push(input.value);
	setLocalStorage(storageArray);
	location.reload();
});

function getLocalStorage() {
    return JSON.parse(localStorage.getItem('recipe'));
}

function setLocalStorage(recipeArray) {
	const data = JSON.stringify(recipeArray);
	return localStorage.setItem('recipe', data);
}

// Reading from Local storage
const storage = getLocalStorage();
console.log(storage);
renderRecipe(storage);

function renderRecipe(storage){
	storage?.map((recipes) => {
		const container = document.createElement('div');
		const recipename = document.createElement('p');
		const closeIcon = document.createElement('span');

		closeIcon.classList.add('closeSpan');

		recipename.innerHTML = recipes;
		closeIcon.innerHTML = '&#x2715';
		
		container.appendChild(recipename);
		container.appendChild(closeIcon);
		list.appendChild(container);
	});

	const deleteButtons = Array.from(document.querySelectorAll('.closeSpan'));
	deleteButtons.forEach((button, 1) => {
		button.dataset.name = storage[i];
	});
	deleteButtons.forEach((button, 1) => {
		button.addEventListener('click', function () {
			const storage = getLocalStorage('recipe');
			const newStorage = storage.filter(recipes) => recipes !== storage[i]);
			setLocalStorage(newStorage);
			location.reload();
		});
	});
}


//API
let result = document.getElementById('result');
let researchBtn = document.getElementById('btn');
let url = 'https://low-carb-recipes.p.rapidapi.com/search?name=cake&tags=keto%3Bdairy-free&includeIngredients=egg%3Bbutter&excludeIngredients=cinnamon&maxPrepareTime=10&maxCookTime=20&maxCalories=500&maxNetCarbs=5&maxSugar=3&maxAddedSugar=0&limit=10';
const cards = document.querySelector('.cards');
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

async function apiResponse() {
	const response = await fetch(url, input);
	const result = await response.text();
	console.log(result);}
	catch (error) 
	{console.error(error);
}




function getMeal(recipe){
	let card = document.createElement('section');
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
}
