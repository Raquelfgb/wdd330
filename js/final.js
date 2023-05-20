
const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyrightyear');

copyrightyear.textContent =`${new Date().getFullYear()}`;

const lastModified = document.querySelector('#lastmodified');
lastModified.textContent = new Date(document.lastModified);

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

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


let search = document.getElementById('search');







