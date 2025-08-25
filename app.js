// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Paso 1 de Trello: Crear un array para almacenar los nombres de los amigos.
let amigos = [];
let amigo = [];
let parrafo = document.createElement('p');
let sorteado = document.createElement('h3');
let contenedor = document.getElementById('contenedor');
let lista = document.getElementById('listaAmigos');
let sorteados = []; // Array para almacenar los amigos ya sorteados.

// Paso 2 de Trello: Implementar una función para agregar amigos al array.
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        parrafo.textContent = 'Por favor, ingresa un nombre.';
        contenedor.appendChild(parrafo);
        return;
    } else {
        amigos.push(amigo);
        parrafo.innerHTML = '';
        actualizarLista();
        document.getElementById('amigo').value = '';
    }
    console.log(amigos);
}

// Paso 3 de Trello: Implementar una función para mostrar la lista de amigos.
function actualizarLista() {
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.style.textAlign = 'center';
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Paso 4 de Trello: Implementar una función para sortear los amigos.
function sortearAmigo() {
    if (amigos.length == 0) {
        sorteado.innerHTML = '';
        parrafo.innerHTML = 'No hay amigos en la lista para sortear.';
        contenedor.appendChild(parrafo);
        // lista.innerHTML = '';
        return;
    } else {
        parrafo.innerHTML = '';
        contenedor.appendChild(parrafo);

        let index = Math.floor(Math.random() * amigos.length);
        amigo = amigos.splice(index, 1)[0];

        sorteados.push(amigo);
        console.log(`Amigo sorteado: ${amigo}`);
        console.log(amigos);
        console.log(sorteados);
        sorteado.innerHTML = `¡Tu amigo secreto es ${amigo}!`;
        contenedor.appendChild(sorteado);
    }
}

// Paso 5: Implementar una función para reiniciar el sorteo.
function reiniciar() {
    amigos = sorteados.concat(amigos); // Vuelve a agregar los amigos sorteados al array original amigos.
    sorteado.innerHTML = '';
    sorteados = [];
    parrafo.innerHTML = '';
    contenedor.appendChild(parrafo);
    // lista.innerHTML = '';
    actualizarLista();
    document.getElementById('amigo').value = '';
}

function repetirUltimoSorteo() {
    if (sorteado.innerHTML == '') {
        parrafo.textContent = 'No hay un sorteo previo para repetir.';
        contenedor.appendChild(parrafo);
        return;
    } else {
        sorteados.pop(); // Elimina el último amigo sorteado del array de sorteados.
        amigos.push(amigo);
        sorteado.innerHTML = '';
        console.log(amigos);
    }
}

function terminar() {
    amigos = [];
    sorteados = [];
    sorteado.innerHTML = '';
    parrafo.innerHTML = 'El sorteo ha terminado. Gracias por participar.';
    contenedor.appendChild(parrafo);
    lista.innerHTML = '';
    document.getElementById('amigo').value = '';
}