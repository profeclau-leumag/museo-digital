// 1. BASE DE DATOS DE LOS CUADROS EXPOSITIVOS
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

// 2. FUNCIÓN PARA LIMPIAR TEXTO (Genera URLs amigables eliminando tildes y caracteres especiales)
const slug = texto => texto
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '') // Remueve acentos gráficos
  .replace(/[^a-z0-9]+/g, '-')     // Reemplaza espacios y símbolos por guiones
  .replace(/(^-|-$)/g, '');        // Limpia guiones sobrantes al inicio o final

// 3. CAPTURA DE ELEMENTOS DEL HTML
const galeria = document.querySelector('#galeria');
const contador = document.querySelector('#contador');

// 4. FUNCIÓN PRINCIPAL PARA RENDERIZAR LAS TARJETAS (CUADROS)
function mostrar(filtro = 'todos') {
  // Filtra los cuadros basados en la categoría seleccionada
  const visibles = cuadros.filter(c => filtro === 'todos' || c[2] === filtro);
  
  // Inserta dinámicamente las tarjetas estructuradas dentro del contenedor CSS Grid
  galeria.innerHTML = visibles.map(([numero, titulo, sala, frase]) => {
    const numeroFormateado = String(numero).padStart(2, '0');
    return `
      <article class="cuadro" data-sala="${sala}">
        <a href="cuadros/${numeroFormateado}-${slug(titulo)}/index.html">
          <div class="obra" aria-hidden="true"></div>
          <span class="numero">Cuadro ${numeroFormateado} · ${sala}</span>
          <h3>${titulo}</h3>
          <p>${frase}</p>
        </a>
      </article>
    `;
  }).join('');
  
  // Actualiza el número total de cuadros visibles si el elemento contador existe en el HTML
  if (contador) {
    contador.textContent = visibles.length;
  }
}

// 5. CONTROLADOR DE EVENTOS PARA LOS BOTONES DE FILTRADO
document.querySelectorAll('[data-filtro]').forEach(boton => {
  boton.addEventListener('click', () => {
    // Busca el botón que tenía la clase activa previamente y se la quita
    document.querySelector('.filtros .activo')?.classList.remove('activo');
    
    // Añade el estilo activo al botón presionado
    boton.classList.add('activo');
    
    // Ejecuta la función mostrando solo el grupo correspondiente
    mostrar(boton.dataset.filtro);
  });
});

// 6. INICIALIZACIÓN AUTOMÁTICA
// Muestra todos los cuadros por defecto en cuanto la página se carga
mostrar();

});

mostrar();

