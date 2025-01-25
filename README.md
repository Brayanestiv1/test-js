# test-js

Tablero Kanban para la Agencia de Eventos "Momentum"


Instrucciones
·        Desarrolle el ejercicio de forma individual. Evite la copia o plagio en cualquiera de sus formas.
·        No consulte internet, ni asistentes de código
·        Entregue el trabajo antes de la fecha y hora indicado.
·        No use tecnología alguna de asistencia de código. 
·        No se permite el uso del celular
 

Enunciado
La agencia de eventos "Momentum" requiere una aplicación web para gestionar tareas y eventos. El objetivo de este examen es construir un tablero Kanban utilizando HTML, CSS y JavaScript que permita gestionar estas tareas de manera dinámica. A continuación, se detallan los requerimientos que deben cumplirse:

1.     Interfaz de Tablero Kanban: El tablero debe estar dividido en tres columnas principales, que representen el flujo de las tareas. Las columnas son:

o   Pendientes
o   En progreso
o   Completadas


2.     Gestión de Tareas: Cada tarea debe tener la siguiente información:

o   Título de la tarea.
o   Descripción de la tarea.
o   Imagen relacionada con la tarea (opcional).
o   Fecha de inicio.
o   Fecha de finalización.
o   Asignación a una de las tres columnas mencionadas anteriormente.


3.     Creación de Tareas: El tablero debe permitir la creación de nuevas tareas. Al agregar una tarea, esta debe aparecer automáticamente en la columna correspondiente según la asignación realizada por el usuario.



4.     Edición de Tareas: Las tareas deben poder ser editadas en cualquier momento, permitiendo al usuario modificar la información de la tarea, como el título, la descripción, la fecha de inicio y fin, o la imagen.



5.     Movimiento de Tareas: Las tareas deben poder ser movidas entre columnas. Cuando una tarea cambie de columna, debe desaparecer de su columna original y aparecer en la nueva columna seleccionada.



6.     Eliminación de Tareas: Cada tarea debe contar con un botón de eliminación. Cuando el usuario haga clic en este botón, la tarea debe ser eliminada de la vista.



7.     Registro e Inicio de Sesión de Usuario: El tablero debe permitir el registro e inicio de sesión de usuarios.

o   Los usuarios no necesitan estar registrados ni iniciar sesión para crear tareas, pero estas tareas se perderán cuando el usuario cierre la ventana del navegador.
o   Si un usuario está registrado e inicia sesión, todas las tareas que gestione deben ser almacenadas en un servidor. Para este propósito, se usarán medios de almacenamiento en navegadores web como medio de almacenamiento (opcional json-server).


8.     Persistencia de Tareas: Cuando un usuario inicie sesión, el tablero debe cargar todas las tareas que el usuario haya guardado previamente, manteniendo las tareas en la columna en la que se encontraban en su último acceso.



9. Validación de Entradas: El sistema debe validar que los campos de la tarea (título, descripción, fechas) sean completos antes de permitir su creación o edición.



10. Estilo y Diseño Responsivo: La interfaz debe ser sencilla, clara y con un diseño responsivo que se adapte a distintos tamaños de pantalla, especialmente en dispositivos de escritorio, luego en dispositivos móviles (tablets y celulares).

 

Los estudiantes deben implementar las funcionalidades mencionadas sin recibir ayuda externa, respetando las indicaciones de diseño y la lógica de funcionamiento descrita. Es fundamental que el código sea modular y fácil de entender, y que la aplicación sea completamente funcional en la ejecución de todas las tareas descritas.

 

Recuerda que el objetivo es construir una aplicación que no solo cumpla con los requisitos técnicos, sino que también proporcione una experiencia de usuario fluida y eficiente.

Resultado esperado

Desarrollar el tablero Kanban:

Crear un tablero Kanban con tres columnas: Pendientes, En Progreso y Completadas.
Implementar funcionalidades para agregar, editar, eliminar y mover tareas entre columnas.
Implementar persistencia de tareas:

Usar mecanismos de almacenamiento navegadores web para guardar y cargar tareas. (opcional Fetch API y API REST con json-server).
Asegurar que las tareas se almacenen en el servidor y se recuperen correctamente al iniciar sesión.
Implementar sistema de registro de usuarios:

Permitir el registro e inicio de sesión de usuarios.
Asegurar que las tareas de cada usuario persistan entre sesiones.
Diseño responsivo y estéticamente atractivo:

Asegurar que el tablero sea completamente responsivo y funcione bien en diferentes dispositivos.
Aplicar estilos CSS para hacer el diseño visualmente atractivo.
Organizar y modularizar el código:

Mantener el código bien organizado y modularizado, separando funcionalidades en archivos distintos según su función.
Seguir buenas prácticas de programación:

Escribir código limpio y eficiente, aplicando buenas prácticas de programación y utilizando JavaScript de manera adecuada.
Documentar el proyecto:

Crear un archivo Readme detallado en Markdown que explique la estructura del proyecto y los elementos utilizados.
Manejo de Git y GitHub

Inicio del proyecto en GitHub con push continuos durante el examen. Al final entregan el link y hash del último commit del proyecto (no se recibe por ningún otro medio los archivos de test)