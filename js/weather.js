
const API_KEY="f8735368f3660b08d7a5ae8308df75cd";

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lng=position.coords.longitude;
    console.log(lat+" "+lng);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(Response=>Response.json()
    .then(date=>{
        const weatherConstainer=document.querySelector("#weather span:first-child");
        const cityConstainer=document.querySelector("#weather span:last-child");
        cityConstainer.innerText=date.name;
        weatherConstainer.innerText=`${date.weather[0].main}/ ${date.main.temp}`;
    }));

}
function onGeoError(){

    alert("Can't find you. no weather for you")
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);