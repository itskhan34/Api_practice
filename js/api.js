function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data));
}
loadUsers();

function displayUsers(info) {
    const ul = document.getElementById('users')
    for (const user of info) {
        //console.log(user.name);
        const li = document.createElement('li')
        li.innerText = `Name: ${user.name} Email: ${user.email}`;
        ul.appendChild(li);
    }
}

