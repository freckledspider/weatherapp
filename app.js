// ------------------------------------------------------
// simple weather app to search current weather by city
// ------------------------------------------------------

const searchWeather = document.getElementById("searchButton");
const weatherSearch = document.getElementById("weatherSearch");
const result = document.getElementById("results")

// converting temperature to F and get rid of decimal places

const convertTemp = K => (1.8 * (K - 273) + 32).toFixed(0);

// function to get the weather results to appear

const getWeatherResults = () => {

// setting up the apiCall with the correct URL and api key

	let city = weatherSearch.value;
	let apiKey = `a956d83233e262ee0bb7c490cc4ad988`;
	let apiCall = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

// used fetch() because i did not know how else to get this to work for me
// ajax was not working for me, not sure why

	fetch(apiCall)

		.then(response => response.json())
		.then(data => {

			const {temp} = data.list[0].main; 
            const {humidity} = data.list[0].main;
			const {description} = data.list[0].weather[0];

// insert results in HTML into the weaterResults div
// plus a refresh button to create a new search

			weatherResults.innerHTML = `

<h3>Weather for ${city}</h3>
Currently: ${description} <br/ >
Temperature: ${convertTemp(temp)}° F <br />
Humidity: ${humidity}% <br /><br />
<button onClick="window.location.reload();" class="newsearch">New Search</button>
`
;})
};

// onclick function to get weather search results

searchWeather.onclick = function() {
	getWeatherResults();
};
