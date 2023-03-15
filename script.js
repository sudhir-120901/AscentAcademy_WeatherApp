const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '061f0b4ff2msh3055f110a92e501p1ae8b5jsn6c463fd997d1', 
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
cityName.innerHTML=city	
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.wind_speed
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		one_temp.innerHTML = response.temp
		one_humidity.innerHTML = response.humidity
		one_min_temp.innerHTML = response.min_temp
		one_max_temp.innerHTML = response.wind_speed
		one_wind_speed.innerHTML = response.wind_speed
		one_wind_degrees.innerHTML = response.wind_degrees
		one_sunrise.innerHTML = response.sunrise
		one_sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
	  two_temp.innerHTML = response.temp
	  two_humidity.innerHTML = response.humidity
	  two_min_temp.innerHTML = response.min_temp
	  two_max_temp.innerHTML = response.wind_speed
	  two_wind_speed.innerHTML = response.wind_speed
	  two_wind_degrees.innerHTML = response.wind_degrees
	  two_sunrise.innerHTML = response.sunrise
	  two_sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
	
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
.then(response => response.json())
.then((response) => {
	console.log(response)
  three_temp.innerHTML = response.temp
  three_humidity.innerHTML = response.humidity
  three_min_temp.innerHTML = response.min_temp
  three_max_temp.innerHTML = response.wind_speed
  three_wind_speed.innerHTML = response.wind_speed
  three_wind_degrees.innerHTML = response.wind_degrees
  three_sunrise.innerHTML = response.sunrise
  three_sunset.innerHTML = response.sunset
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
	    four_temp.innerHTML = response.temp
	    four_humidity.innerHTML = response.humidity
	    four_min_temp.innerHTML = response.min_temp
	    four_max_temp.innerHTML = response.wind_speed
	    four_wind_speed.innerHTML = response.wind_speed
	    four_wind_degrees.innerHTML = response.wind_degrees
	    four_sunrise.innerHTML = response.sunrise
	    four_sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Rourkela")

