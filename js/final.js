const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyrightyear');

copyrightyear.textContent = `${new Date().getFullYear()}`;

// Date

const date = document.querySelector('#date');

const daynames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
date.textContent = fulldate;
//console.log(date.value);

// Writing to Local Storage

const button = document.querySelector('.btn');
const list = document.querySelector('.list');
// let input = document.getElementById('input').value;

//const storage = getLocalStorage();
//console.log(storage);
//renderRecipe(storage);
//getMeal(recipe);

button.addEventListener('click', () => {
  // let storageArray = getLocalStorage();
  // console.log(storageArray);
  // if (storageArray === null) {
  // 	storageArray = [];
  // }
  // storageArray.push(input.value);
  // setLocalStorage(storageArray);
  // location.reload();
  console.log('click');
  const ingredient = document.getElementById('input').value;
  getRecipes(ingredient).then(getMeal);
});

//API
let resultElement = document.getElementById('result');

const meal = document.getElementById('meal');
const details = document.querySelector('.detail');
const close = document.getElementById('close');

async function getRecipes(ingredients) {
  const url = `https://low-carb-recipes.p.rapidapi.com/search?includeIngredients=${ingredients}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd574b71761mshd6036c941960d4cp13806ejsn7f8ba0da29ce',
      'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com',
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

function getMeal(recipes) {
  recipes.forEach((recipe) => {
    console.log(recipe);
    const card = document.createElement('section');
    const name = document.createElement('h2');
    const photo = document.createElement('img');
    const tags = document.createElement('h3');
    const description = document.createElement('h3');
    const prepareTime = document.createElement('h3');
    const cookTime = document.createElement('h3');
    const ingredients = document.createElement('h3');
    const steps = document.createElement('h3');
    const servings = document.createElement('h3');
    const servingSize = document.createElement('h3');
    const nutrients = document.createElement('h3');

    const ingredientsArray = recipe.ingredients.map(
      (ingredient) => ingredient.name
    );
    // console.log(ingredientsArray);
    const ingredientsList = ingredientsArray.join(', ');
    // console.log(ingredientsList);

    const nutrientsArray = Object.keys(recipe.nutrients);
    // console.log(nutrientsArray);
    const nutrientsList = nutrientsArray.join(', ');
    // console.log(nutrientsList);

    name.textContent = recipe.name;
    description.textContent = `DESCRIPTION: ${recipe.description}`;
    tags.textContent = recipe.tag;
    prepareTime.textContent = `PREPARE TIME IN MINUTES: ${recipe.prepareTime}`;
    cookTime.textContent = `COOK TIME IN MINUTES: ${recipe.cookTime}`;
    // ingredients.textContent = `INGREDIENTS: ${recipe.ingredients}`;
    ingredients.textContent = `INGREDIENTS: ${ingredientsList}`;
    steps.textContent = `STEPS: ${recipe.steps}`;
    servings.textContent = `SERVINGS: ${recipe.servings}`;
    // servingSize.textContent = `SERVING SIZE: ${recipe.servingSize}`;
    // servingSize.textContent = `SERVING SIZE: ${recipe.servingSizes[0].qty}`;
    // nutrients.textContent = `NUTRIENTS: ${recipe.nutrients}`;
    nutrients.textContent = `NUTRIENTS: ${nutrientsList}`;

    photo.setAttribute('src', recipe.image);
    photo.setAttribute('alt', `Recipe of ${recipe.name}`);
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
  });
}

//apiResponse();


