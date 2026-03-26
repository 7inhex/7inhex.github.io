console.log("hiya, i'm here (〜￣▽￣)〜");

const hours = new Date().getHours();

const isMorning = hours >= 4 && hours < 12;
const isAfternoon = hours >= 12 && hours < 17;
const isEvening = hours >= 17 || hours < 4;

const greeting = document.querySelector("#replace");
if (isMorning) {
    greeting.textContent = "hello and good morning to you!";
} else if (isAfternoon) {
    greeting.textContent = "good afternoon, my friend ☀️";
} else if (isEvening) {
    greeting.textContent = "it's awfully late, isn't it?";
}

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => {
    (new Image()).src = url;
    return url
})

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

const todoList = document.querySelector('.todo-list');
const input = document.querySelector('#new-todo');
const addButton = document.querySelector('#add-button');

let todos = JSON.parse(localStorage.getItem('todo-list')) || [
    { text: "Buy milk", completed: false },
    { text: "Walk the dog", completed: false },
    { text: "Do homework", completed: false }
];

const renderTodos = () => {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        todoList.append(li);
    });
};

const addNewTodo = () => {
    if (!input.value) return;
    todos.push({ text: input.value, completed: false });
    localStorage.setItem('todo-list', JSON.stringify(todos));
    input.value = '';
    renderTodos();
};

addButton.addEventListener('click', addNewTodo);

const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150);

    try {
        const response = await fetch(url);
        const data = await response.json();
        const img = document.createElement('img');
        img.src = data.sprites.front_default;
        img.alt = `${data.name}`;
        document.getElementById('pokemon').append(img);
    } catch (error) {
        const response = await fetch(url);
        const data = await response.json();
        console.error(error, data.name);
    }
};

getRandomPokemon();

renderTodos();