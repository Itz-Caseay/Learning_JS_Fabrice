

const socket = io();
const usernameid=document.getElementById('username')
let username = localStorage.removeItem('username');
console.log(username)
if (!username) {
    const user=prompt('Enter Your name:');
    
    usernameid.textContent = `${user}`;
    localStorage.setItem('username', user);
}
else{
    usernameid.textContent=username
}

const form = document.getElementById('chat-form');
const input = document.getElementById('msg');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', (msg) => {
    const li = document.createElement('span');
    li.textContent = msg;
    messages.appendChild(li);
    window.scrollTo(0, document.body.scrollHeight);
});