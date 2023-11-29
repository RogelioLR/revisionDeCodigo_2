const formulario = document.querySelector(".formulario");
// Se hizo uso del selector de clase "." y se corrigio el nombre de la clase
// asociada al formulario.

formulario.onsubmit = function(e) {

  // Hacer la invocación correcta del metodo .preventDefault()
  e.preventDefault();
  
  // Se cambio la declaración "var" de las variables a "const"
  // Se añadieron nombres descriptivos de las variables
  // Se recopilan los valores de las variables directamente del formulario sin variables auxiliares

  const nombreF = formulario.elements[0];
  const edadF = formulario.elements[1];
  const nacionalidadF = formulario.elements[2];

  let nombre = nombreF.value;
  let edad = edadF.value;
  let nacionalidad = nacionalidadF.value;

  if (nombre.length === 0) {
    nombreF.classList.add("error");
  } else if ((edad < 18 || edad > 120 || edad =="")) {
    edadF.classList.add("error");
  } else {
    agregarInvitado(nombre, edad, nacionalidad);
    // Limpieza del Formulario
    nombreF.value = "";
    edadF.value = "";
  }
}

// Añadieron punto y coma, y declaracion a "const"
const corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);

function agregarInvitado(nombre, edad, nacionalidad) {

  // Se cambio las declaracions if-else por SWITCH
  switch (nacionalidad) {
    case "ar":
      nacionalidad = "Argentina";
      break;
    case "mx":
      nacionalidad = "Mexicana";
      break;
    case "vnzl":
      nacionalidad = "Venezolana";
      break;
    case "per":
      nacionalidad = "Peruana";
      break;
  }

  const lista = document.getElementById("lista-de-invitados");

  const elementoLista = document.createElement("div");
  elementoLista.setAttribute("class", "elemento-lista");
  lista.appendChild(elementoLista);

  // Se elimino codigo que repetia la accion de crearElemento en el nombre

  function crearElemento(descripcion, valor) {
    const spanNombre = document.createElement("span");
    const inputNombre = document.createElement("input");
    const espacio = document.createElement("br");

    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  const corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    botonBorrar.parentNode.remove()
  }
}