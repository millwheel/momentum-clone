const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");
const greetingText = greeting.querySelector("span");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

greetingSentence = [
    "Time is gold. Don't blow it away", 
    "Time never come back. Use it wisely",
    "To-do job first, free time next"
];

function loginSubmit(event){
    event.preventDefault();
    const inputname = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, inputname);
    paintGreetings(inputname);
}

function logout(event){
    if(confirm("It removes all To-Do list. Are you sure?") == true){
        localStorage.clear();
    }else{
        event.preventDefault();
    }
}

function paintGreetings(username){
    document.getElementById("todo-form").classList.remove(HIDDEN_CLASSNAME);
    document.getElementById("todo-list").classList.remove(HIDDEN_CLASSNAME);
    const number = Math.floor(Math.random()*greetingSentence.length);
    greetingText.innerText = `${greetingSentence[number]}, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    const button = document.createElement("button");
    button.innerHTML = "log out";
    button.addEventListener("click", logout);
    greeting.appendChild(button);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    document.getElementById("login-form").classList.remove(HIDDEN_CLASSNAME);
    document.getElementById("login-form").addEventListener("submit", loginSubmit);
}else{
    paintGreetings(savedUsername);
}


