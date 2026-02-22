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

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const previous = document.querySelector('#prev')
const next = document.querySelector('#next')

previous.addEventListener('click', () => {
    currentImage--
    showImages()
})

next.addEventListener('click', () => {
    currentImage++
    showImages()
})

setInterval(() => {
    currentImage++
    showImages()
}, 5000)