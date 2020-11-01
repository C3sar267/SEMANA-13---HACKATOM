const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');//lista de botones voy crear un evento click

const ListaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');




initApp()//para agregar varias funciones

function initApp(){

    cursos.addEventListener('click', comprarCurso)//hagouna funcion que llame comprar curso
    carrito.addEventListener('click', eliminarProducto)
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito)

}

//function eliminar del menu boton X

function eliminarProducto(e){
    e.preventDefault();

    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        producto = e.target.parentElement.parentElement.parentElement;
    }
}
////////////////BOTON VACIAR CARRITO/////////////////

function vaciarCarrito(e){
    e.preventDefault();
    while(ListaCarrito.firstChild){
        ListaCarrito.removeChild(ListaCarrito.firstChild);
    }
    return false;


}



//Funciones

function comprarCurso(e){
        e.preventDefault();

        if(e.target.classList.contains('agregar-carrito')){
            let curso = e.target.parentElement.parentElement; //aqui cree una variable diciendole que e.target contiene una lista de classe mandame ala consola cada cada card

            leerDatosCurso(curso) //creamos una funcion para enviar datos literal

        }
}

function leerDatosCurso(curso){
    let infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent
    }

    inserCarrito(infoCurso);
}

function inserCarrito(curso){

    const ancho = document.createElement('tr');

    ancho.innerHTML =
    
    `
    
            <td> <img src='${curso.imagen}' style='width:100%;'/> </td>

            <td>${curso.titulo}</td>

            <td>${curso.precio} </td>

            <td>
            <a href='#'class='borrar-curso'> x </a>
            </td>


    `

    //agregar los elementos creados  a la variable lista carrito

        ListaCarrito.appendChild(ancho);

        
  
   /*     
        
//este espara iteracion de botom cerrar

    let i;
    for (i = 0; i < close.length; i++) {
        
    close[i].onclick = function() {
    let div = this.parentElement.parentElement;
    div.style.display = "none";
    }

    }
    

  */

  //MODAL




  if(document.getElementById("btnModal")){


    const modal = document.getElementById("tvesModal");
    const cancelar = document.getElementById("cerrar");
    const clickAceptar = document.getElementById("aceptar");
    const btn = document.getElementById("btnModal");
    const span = document.getElementsByClassName("close")[0];
    const body = document.getElementsByTagName("body")[0];

    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }


    //AQUI  SON LOPS BOTONES CANCELAR
    cancelar.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }


     //AQUI  SON LOPS BOTONES ACEPTAR
     clickAceptar.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

  }


  

    
}


