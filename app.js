// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Paso 1 de Trello: Crear un array para almacenar los nombres de los amigos.
let amigos = [];

// Paso 2 de Trello: Implementar una función para agregar amigos al array.
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(amigo);
        actualizarLista();
        document.getElementById('amigo').value = '';
    }
    console.log(amigos);
}

// Paso 3 de Trello: Implementar una función para mostrar la lista de amigos.
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}