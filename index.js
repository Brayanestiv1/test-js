const columnas = document.getElementById('columnas');
const pendientes = document.getElementById('pendientes');
const enProceso = document.getElementById('enProceso');
const completadas = document.getElementById('completadas');
const tareas = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const fechaIni = document.getElementById('fechaIni');
const fechaFin = document.getElementById('fechaFin');
const titulo = document.getElementById('tarea');
const asignar = document.getElementById('asignar');
const button = document.getElementById('button');
const form = document.getElementById('form');
const input = document.getElementById('input');
const registrar = document.getElementById('registrar');
const login = document.getElementById('login');

//menu amburguesa
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-item');



button.addEventListener('click', async () => {
    const titulo = titulo.value;
    const descripcionTitulo = descripcionTitulo.value;
    const fechaIni = fechaIni.value;
    const fechaFin = fechaFin.value;
    const asignar = asignar.value;

    try {
        const response = await fetch('https://json-server-uqwi.onrender.com/${asignar}', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                titulo,
                descripcionTitulo,
                fechaIni,
                fechaFin,
                asignar,
            }),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error al registrar la tarea:', error);
    }


    if (asignar === pendientes) {

  try {
    const response = await fetch('https://json-server-uqwi.onrender.com/pendiente');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error al obtener las columnas:', error);
  }
} else if (asignar === enProceso) {
    try {
        const response = await fetch('https://json-server-uqwi.onrender.com/en_proceso');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error al obtener las columnas:', error);
      }
} else if (asignar === completas) {
    try {
        const response = await fetch('https://json-server-uqwi.onrender.com/completada');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error al obtener las columnas:', error);
      }
}
});


        
