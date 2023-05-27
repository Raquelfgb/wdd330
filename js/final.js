// Copyright and last modified function
const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyrightyear');

copyrightyear.textContent =`${new Date().getFullYear()}`;

const lastModified = document.querySelector('#lastmodified');
lastModified.textContent = new Date(document.lastModified);

//Nav

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// Banner

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
if (dayName === 'Monday', dayName === 'Saturday') {
	banner.classList.add('bannershow');
}
else{
	banner.classList.add('bannerhidden');
}

// Writing to Local Storage

const button = document.querySelector('.btn');
const list = document.querySelector('.list');
const input = document.querySelector('.input');

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

let search = document.getElementById('search');

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://low-carb-recipes.p.rapidapi.com/recipes/2807982c-986a-4def-9e3a-153a3066af7a',
  headers: {
    'X-RapidAPI-Key': 'd574b71761mshd6036c941960d4cp13806ejsn7f8ba0da29ce',
    'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}