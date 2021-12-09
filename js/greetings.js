
const loginForm=document.querySelector("#login-form");
const loginInput =document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username"

function onLoginSubmit(event){
    event.preventDefault();                    //기본동작 막기
    const username=loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const saveUsernmae = localStorage.getItem(USERNAME_KEY);

if(saveUsernmae===null){                 //localStorage에 username이 null인가? 
    //show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);                   //그럴경우 form hiden속성제거후 
    loginForm.addEventListener("submit",onLoginSubmit);             //username값 받아오는 절차를 밟아보자
}else{ 
    //hiden form
    paintGreetings(saveUsernmae);

}
