console.log("hiya, i'm here (〜￣▽￣)〜");

const key = "i don\'t get the reference :(";
localStorage.setItem("It\'s a secret to everybody.", key);

const hours = new Date().getHours();

const isMorning = hours >= 4 && hours < 12;
const isAfternoon = hours >= 12 && hours < 17;
const isEvening = hours >= 17 || hours < 4;

const greeting = document.querySelector("#replace");
if (isMorning) {
    greeting.textContent = "hello and good morning to you!";
    }
else if (isAfternoon) {
    greeting.textContent = "good afternoon, my friend ☀️";
    }
else if (isEvening) {
    greeting.textContent = "it's awfully late, isn't it?";
    }