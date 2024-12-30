function result(){
   let cityUser = document.getElementById("Weatherinp").value;

   axios.get(`https://api.weatherapi.com/v1/current.json?key=d347dfb1a00b4f86add45435242510&q=${cityUser}`)
.then(function(response){
console.log("Response" , response.data);
let responseCurrent = response.data.current;
let  responseLocation = response.data.location;
document.getElementById("imgweather").src = `https:${responseCurrent.condition.icon}`;

document.getElementById("tem").innerText = `${responseCurrent.temp_c
}°C`;
document.getElementById("location").innerText = `Location:${responseLocation.country}`
document.getElementById("item1").innerText = `${responseCurrent.feelslike_c}°C (Centigrade Feel)`; 

document.getElementById("item2").innerText = `${responseCurrent.feelslike_f}°F (Fahrenheit Feel)`;

document.getElementById("item3").innerText = `${responseCurrent.humidity}% Humidity`;

document.getElementById("item4").innerText = `${responseCurrent.pressure_mb}mb Pressure`;

document.getElementById("item5").innerText = `${responseCurrent.vis_km} km Visibility`;

document.getElementById("item6").innerText = `${responseCurrent.wind_kph} kph Wind Speed`;
 })
 .catch(function(error){
    console.log("Error" , error);
 });

}

function cross(){
   document.getElementById("Weatherinp").value = "";
}

function refresh(){
   document.getElementById("Weatherinp").value = "";
   document.getElementById("imgweather").src = "";
   document.getElementById("location").innerText = "";
   document.getElementById("tem").innerText = "";
   document.getElementById("item6").innerText = "";
   document.getElementById("item5").innerText = "";
   document.getElementById("item4").innerText = "";
   document.getElementById("item3").innerText = "";
   document.getElementById("item2").innerText = "";
   document.getElementById("item1").innerText = "";
}
