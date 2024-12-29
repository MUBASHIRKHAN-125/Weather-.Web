function result(){
   let cityUser = document.getElementById("Weatherinp").value;

   axios.get(`https://api.weatherapi.com/v1/current.json?key=d347dfb1a00b4f86add45435242510&q=${cityUser}`)
.then(function(response){
console.log("Response" , response.data);
document.getElementById("imgweather").src = `https:${response.data.current.condition.icon}`;
document.getElementById("tem").innerText = `${response.data.current.temp_c
}°C`
document.getElementById("item1").innerText = `${response.data.current.feelslike_c}°C (Centigrade Feel)`; 
document.getElementById("item2").innerText = `${response.data.current.feelslike_f}°F (Fahrenheit Feel)`;
document.getElementById("item3").innerText = `${response.data.current.humidity}% Humidity`;
document.getElementById("item4").innerText = `${response.data.current.pressure_mb}mb Pressure`;
document.getElementById("item5").innerText = `${response.data.current.vis_km} km Visibility`;
document.getElementById("item6").innerText = `${response.data.current.wind_kph} kph Wind Speed`;
 })
 .catch(function(error){
    console.log("Error" , error);
 });

}
