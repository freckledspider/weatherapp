const searchWeather = document.getElementById("searchButton");
const weatherSearch = document.getElementById("weatherSearch");
const result = document.getElementById("results")


// converting temperature to F and get rid of decimal places

const convertTemp = K => (1.8 * (K - 273) + 32).toFixed(0);

const getWeatherResults = () => {

	let city = weatherSearch.value;
	let apiKey = `a956d83233e262ee0bb7c490cc4ad988`;
	let apiCall = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

// fetch() did not know how else to get this to work for me

	fetch(apiCall)
		.then(response => response.json())

		.then(data => {


			const {temp} = data.list[0].main; 
            const {humidity} = data.list[0].main;
			const {description} = data.list[0].weather[0];


			weatherResults.innerHTML = `

<h2>Weather for ${city}</h2>
Currently: ${description} <br/ >
Temperature: ${convertTemp(temp)}° F <br />
Humidity: ${humidity}% <br /><br />
<button onClick="window.location.reload();">New Search</button>
`
;})
};

// onclick function to get weather search results

searchWeather.onclick = function() {
	getWeatherResults();
};
