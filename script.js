const cuadros = [
  [1, 'Ábaco', 'origenes', 'Contar antes de las máquinas'],
  [2, 'Pascalina', 'origenes', 'Automatizar la suma'],
  [3, 'Telar de Jacquard', 'origenes', 'Instrucciones en tarjetas'],
  [4, 'Máquina Analítica', 'origenes', 'Imaginar un computador general'],
  [5, 'Ada Lovelace', 'origenes', 'Pensar el primer algoritmo'],
  [6, 'Álgebra de Boole', 'origenes', 'Convertir lógica en operaciones'],
  [7, 'Hollerith', 'maquinas', 'Procesar datos a gran escala'],
  [8, 'Máquina de Turing', 'maquinas', 'Definir qué significa computar'],
  [9, 'Z3', 'maquinas', 'Programar una máquina automática'],
  [10, 'ENIAC', 'maquinas', 'Programar con cables y tablas'],
  [11, 'Transistor', 'maquinas', 'Hacer pequeño lo electrónico'],
  [12, 'Circuito integrado', 'maquinas', 'Integrar miles de componentes'],
  [13, 'ER-56 en Chile', 'maquinas', 'Iniciar la computación universitaria'],
  [14, 'Mouse', 'conexiones', 'Interactuar de otra manera'],
  [15, 'ARPANET', 'conexiones', 'Conectar computadores distantes'],
  [16, 'Correo electrónico', 'conexiones', 'Enviar mensajes por una red'],
  [17, 'Intel 4004', 'maquinas', 'Un procesador en un chip'],
  [18, 'Synco / Cybersyn', 'conexiones', 'Información para decidir'],
  [19, 'Xerox Alto', 'conexiones', 'Ventanas, íconos y escritorio'],
  [20, 'World Wide Web', 'conexiones', 'Enlazar información pública'],
  [21, 'Primera web chilena', 'conexiones', 'Chile entra a la Web'],
  [22, 'Smartphone', 'actualidad', 'Computación en el bolsillo'],
  [23, 'Buscador de Google', 'actualidad', 'Ordenar una Web creciente'],
  [24, 'Arquitectura Transformer', 'actualidad', 'Aprender relaciones en los datos']
];

const slug = texto => texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const galeria = document.querySelector('#galeria');
const contador = document.querySelector('#contador');

function mostrar(filtro = 'todos') {
  const visibles = cuadros.filter(c => filtro === 'todos' || c[2] === filtro);
  galeria.innerHTML = visibles.map(([numero, titulo, sala, frase]) => `
    <article class="cuadro" data-sala="${sala}">
      <a href="cuadros/${String(numero).padStart(2, '0')}-${slug(titulo)}/index.html">
        <div class="obra" aria-hidden="true"></div>
        <span class="numero">Cuadro ${String(numero).padStart(2, '0')} · ${sala}</span>
        <h3>${titulo}</h3>
        <p>${frase}</p>
      </a>
    </article>`).join('');
  contador.textContent = visibles.length;
}

document.querySelectorAll('[data-filtro]').forEach(boton => {
  boton.addEventListener('click', () => {
    document.querySelector('.filtros .activo')?.classList.remove('activo');
    boton.classList.add('activo');
    mostrar(boton.dataset.filtro);
  });
});

mostrar();

