//programacion sincrónica 
/*
function two () {
    console.log("dos");
}

function one (){
    console.log("uno");
    two();
    console.log("tres");
}
one();
console.log("************");
//programación asincrona 
//set time out, recibe una funcion anonima, tiempo de ejecucion.

const twoAsync = () => {
    setTimeout( () => {
        console.log("dos Async");
    }, 5000);   
}

const oneAsync = () => {
    setTimeout(function(){
        console.log("uno Async");
    }, 2000);
    twoAsync();
    console.log("tres Async");
}

oneAsync();
*/
//zona de promesas fetch API
const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
    .then(data => data.json())
    .then(data => {
        console.log(data[0].name);
    })
    .catch(error => console.error("algo salio mal", error));
    // usando fetch para mostrar navegador
    const botonInfo = document.querySelector("#btn-mensaje");
    const info = document.querySelector("#mensaje");
    // variable null para guardar la informacion de la api
    let post = null;
//consumiendo API con fetch
botonInfo.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/6")
        .then(response => response.json()) // Corregir aquí
        .then(response => {
            post = response;
            mostrarDatos(post);
        })
        .catch(error => console.error("algo salió mal", error)); 
});

const mostrarDatos = (post) => {
    // Creando nodos (elementos) mediante DOM Manipulation
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");
    // Ponerlos en HTML
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;
    // Hacer que aparezcan en el navegador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}



//store
const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonProductos.addEventListener ("click", () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => {
            productos = response
            //Productos a definir
            mostrarProductos(productos);
        })
        .catch(error => console.error("¡Cuidado!", error))
})
//Función para crear, agreagr y mostrar elementos en el DOM
const mostrarProductos = (productos) => {
    //mostrando title, price, description, category
    productos.map((productos) => {

    
    const imagen = document.createElement("img");
    const titulo = document.createElement("h2");
    const precio = document.createElement("h3");
    const descripcion = document.createElement("p");
    const categoria = document.createElement("p");
    const separador = document.createElement("hr");

    //Inner HTML
    imagen.src = productos.image;
    imagen.width = 200;
    titulo.innerHTML = productos.title;
    precio.innerHTML = productos.price;
    descripcion.innerHTML = productos.description;
    categoria.innerHTML = document.category;

    //Mostrarlos en navegador al agregarlos a su padre
    tienda.appendChild(imagen);
    tienda.appendChild(titulo);
    tienda.appendChild(precio);
    tienda.appendChild(descripcion);
    tienda.appendChild(categoria);
    tienda.appendChild(separador);
})
}



fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", // Corregir aquí
    body: JSON.stringify({
        userId: 1986,
        title: "¿Sueñan los androides con ovejas eléctricas?",
        body: "Author: Philip K. Dick"
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error("Algo salió mal", error);
    });


// programacion asincrona (promise)
const getUser = async () =>{
    try{
        await new Promise(resolve => setTimeout(resolve, 3000));
        const url =  "https://jsonplaceholder.typicode.com/users/4";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.error("Error inexplicable", error)   
    }
}
getUser();
//Local Storage
const user = {
    id: 1,
    name: "Ibarra",
    apellido: "Maldonado",
    email: "ibarra@gmail.com",
    posicion: "instructor",
    empresa:"Generation"
}
//convertir el objeto a local storage
localStorage.setItem("usuario", JSON.stringify(user));
//traer el objeto desde el local storage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);
