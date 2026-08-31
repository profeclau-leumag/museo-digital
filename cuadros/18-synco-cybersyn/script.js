document.addEventListener("DOMContentLoaded", function () {

  const inicio = document.getElementById("inicio");

  const botonQueEs = document.querySelector(".recuadro");
  const paginaQueEs = document.getElementById("paginaQueEs");
  const volver = document.getElementById("volver");

  const botonContexto = document.getElementById("botonContexto");
  const paginaContexto = document.getElementById("paginaContexto");
  const volverContexto = document.getElementById("volverContexto");

  const botonFuncionamiento = document.getElementById("botonFuncionamiento");
  const paginaFuncionamiento = document.getElementById("paginaFuncionamiento");
  const volverFuncionamiento = document.getElementById("volverFuncionamiento");

  const botonProblemas = document.getElementById("botonProblemas");
  const paginaProblemas = document.getElementById("paginaProblemas");
  const volverProblemas = document.getElementById("volverProblemas"); 
  const botonLegado = document.getElementById("botonLegado");
  const paginaLegado = document.getElementById("paginaLegado");
  const volverLegado = document.getElementById("volverLegado");

  botonQueEs.addEventListener("click", function () {
    inicio.style.display = "none";
    paginaQueEs.style.display = "block";
  });


  volver.addEventListener("click", function () {
    paginaQueEs.style.display = "none";
    inicio.style.display = "block";
  });


  botonContexto.addEventListener("click", function () {
    inicio.style.display = "none";
    paginaContexto.style.display = "block";
  });


  volverContexto.addEventListener("click", function () {
    paginaContexto.style.display = "none";
    inicio.style.display = "block";
  });


  botonFuncionamiento.addEventListener("click", function () {
    inicio.style.display = "none";
    paginaFuncionamiento.style.display = "block";
  });


  volverFuncionamiento.addEventListener("click", function () {
    paginaFuncionamiento.style.display = "none";
    inicio.style.display = "block";
  });
  
  botonProblemas.addEventListener("click", function () {

  inicio.style.display = "none";
  paginaProblemas.style.display = "block";

 });


  volverProblemas.addEventListener("click", function () {

  paginaProblemas.style.display = "none";
  inicio.style.display = "block";

 });
 botonLegado.addEventListener("click", function () {

  inicio.style.display = "none";
  paginaLegado.style.display = "block";

});


volverLegado.addEventListener("click", function () {

  paginaLegado.style.display = "none";
  inicio.style.display = "block";

});

});