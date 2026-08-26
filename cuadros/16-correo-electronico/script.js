// Botón "Explorar información"


const boton = document.getElementById("btnExplorar");
const contenido = document.getElementById("contenido");


boton.addEventListener("click", function () {


   contenido.scrollIntoView({
       behavior: "smooth"
   });


});




// Animación de elementos cuando aparecen
// en la pantalla


const elementos = document.querySelectorAll(
   ".seccion, .tarjeta, .mini-card, .evento, .paso"
);


const observador = new IntersectionObserver(


   function (entradas) {


       entradas.forEach(function (entrada) {


           if (entrada.isIntersecting) {


               entrada.target.classList.add("visible");


           }


       });


   },


   {
       threshold: 0.15
   }


);




// Preparar elementos para la animación


elementos.forEach(function (elemento) {


   elemento.classList.add("animar");


   observador.observe(elemento);


});
