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

    console.log(amigos);
}