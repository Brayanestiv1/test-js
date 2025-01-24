const columnas = document.getElementById('columnas');
const columna = document.getElementById('columna');
const tareas = document.getElementById('tareas');
const tarea = document.getElementById('tarea');
const asignar = document.getElementById('asignar');
const button = document.getElementById('button');
const tituloInput = document.getElementById('titulo');
const descripcionInput = document.getElementById('descripcion');
const fechaIniInput = document.getElementById('fechaIni');
const fechaFinInput = document.getElementById('fechaFin');
const asignadoInput = document.getElementById('asignado');

// Evento para mostrar las columnas
columnas.addEventListener('click', async () => {
    try {
    const response = await fetch('https://json-server-uqwi.onrender.com');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error al obtener las columnas:', error);
  }
});

// Evento para mostrar las tareas

tareas.addEventListener('click', async () => {
    try {
        const response = await fetch('https://json-server-uqwi.onrender.com');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
    }
    });

// Evento para mostrar las tareas asignadas
asignar.addEventListener('click', async () => {
    try {
        const response = await fetch('https://json-server-uqwi.onrender.com');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error al obtener las tareas asignadas:', error);
    }
});

        
// Evento para guardar los datos del formulario
    button.addEventListener('click', async () => {
  const titulo = tituloInput.value.trim();
  const descripcion= descripcionInput.value.trim();
  const fechaIni = fechaIniInput.value.trim();
  const fechaFin = fechaFinInput.value.trim();
  const asignado = asignadoInput.value.trim();


  if (titulo && descripcion && fechaIni && fechaFin && asignado) {
    // Crear objeto de usuario
    const tarea = { titulo, descripcion, fechaIni, fechaFin, asignado };

    // Guardar el usuario en JSON Server
    try {
      await fetch("https://json-server-uqwi.onrender.com", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tarea),
      });
    
      alert('Usuario guardado correctamente!');
      // Limpiar los inputs
      nameInput.value = '';
      foodInput.value = '';
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
    }

  } else {
    alert('Por favor, completa ambos campos.');
  }
});

