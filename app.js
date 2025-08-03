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