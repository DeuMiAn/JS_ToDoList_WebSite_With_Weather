const clock = document.querySelector("h2#clock");
function sayHello(){
    console.log("hello");
}
function getClock(){
    const date = new Date();
    const hours=date.getHours().toString().padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=(`${hours}:${minutes}:${seconds}`);

}
getClock();
setInterval(getClock, 1000);
window
//setTimeout(sayHello,5000);