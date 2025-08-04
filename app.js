// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaramos una variable de tipo array que almacenará los nombres de los amigos ingresados
let amigos = [];
//Creamos una función para agregar amigos al array
function agregarAmigo(){
    //1.- Capturamos el valor del la entrada del cuadro de texto
    let nombreAmigo = document.getElementById("amigo");
    
    //2.- Validamos que el cuadro de texto donde se ingresará el nombre no se encuentre vacío
    if(nombreAmigo.value === ""){
        alert("Por favor, inserte un nombre");
        return;
    }

    //3.- Agregamos el nombre del amigo al array
    amigos.push(nombreAmigo.value);

    //4.- Limpiamos el cuadro de texto
    nombreAmigo.value = "";
    console.log(amigos);

    //5.- Llamamos a la función para mostrar la lista de amigos
    mostrarLista();

    //6.- Limpiamos el resultado anterior
    document.getElementById("resultado").innerHTML = ""; // Limpiar resultado del juago anterior

}   

function mostrarLista() {
    //1.- Capturamos el elemento donde se mostrarán los amigos
    let lista = document.getElementById("listaAmigos");
    
    //2.- Limpiamos la lista antes de mostrar los amigos
    lista.innerHTML = "";

    //3.- Iteramos sobre el array de amigos y los mostramos en la lista
    for (let i = 0; i < amigos.length; i++) {
        //4.- Creamos un nuevo elemento de lista
        let li = document.createElement("li");
        //5.- Asignamos el nombre del amigo al elemento de lista
        li.textContent = amigos[i];
        //6.- Agregamos el elemento de lista a la lista
        lista.appendChild(li);
    }
    
}

function sortearAmigo() {
    //1.- Verificamos si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    //2.- Generamos un índice alaetorio para seleccionar un amigo
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //3.- Obtenemos el amigo seleccionado
    let amigoSeleccionado = amigos[indiceAleatorio];

    //4.- Mostramos el amigo seleccionado en el ul = resultado
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpiamos el resultado anteriorl

    let li = document.createElement("li");
    li.textContent = `Tu amigo secreto es: ${amigoSeleccionado}`;
    listaResultado.appendChild(li);

    //5.- Limpiamos el array de amigos para que no se pueda sortear más de una vez
    amigos = [];
    console.log(amigos);    
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar lista de amigos
}