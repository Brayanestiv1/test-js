const apiUrl = "http://localhost:3000/tasks";

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  document.getElementById("addTaskBtn").addEventListener("click", openModal);
  document
    .getElementById("closeModalBtn")
    .addEventListener("click", closeModal);
});

function loadTasks() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((tasks) => {
      tasks.forEach((task) => {
        addTaskToColumn(task, task.column);
      });
    })
    .catch((error) => console.error("Error al cargar las tareas:", error));
}

function addTaskToColumn(task, column) {
  const columnElement = document.getElementById(column);
  if (columnElement) {
    const taskElement = createTaskElement(task);
    columnElement.appendChild(taskElement);
  } else {
    console.error(`La columna ${column} no existe en el DOM.`);
  }
}

function createTaskElement(task) {
  const taskElement = document.createElement("div");
  taskElement.id = task.id;
  taskElement.classList.add("task");

  taskElement.innerHTML = `
    <h3 class="task-title">${task.title}</h3>
    <p class="task-description">${task.description}</p>
    <p class="task-start-date">${task.startDate}</p>
    <p class="task-end-date">${task.endDate}</p>
    <button class="edit-task-btn">Editar</button>
    <button class="move-task-btn">Mover</button>
    <button class="delete-task-btn">Eliminar</button>
  `;

  taskElement
    .querySelector(".delete-task-btn")
    .addEventListener("click", () => deleteTask(task.id));
  taskElement
    .querySelector(".edit-task-btn")
    .addEventListener("click", () => openEditModal(task));
  taskElement
    .querySelector(".move-task-btn")
    .addEventListener("click", () => moveTask(task));

  return taskElement;
}

function openModal() {
  document.getElementById("modal-tarea").style.display = "block";
}

function closeModal() {
  document.getElementById("modal-tarea").style.display = "none";
  document.getElementById("formulario-tarea").reset();
}

function validateForm() {
  const title = document.getElementById("titulo-tarea").value.trim();
  const description = document.getElementById("descripcion-tarea").value.trim();
  const startDate = document.getElementById("fecha-inicio").value;
  const endDate = document.getElementById("fecha-fin").value;
  const column = document.getElementById("columna-tarea").value;

  if (!title || !description || !startDate || !endDate || !column) {
    alert("Todos los campos son obligatorios.");
    return false;
  }

  if (new Date(startDate) > new Date(endDate)) {
    alert("La fecha de inicio no puede ser posterior a la fecha de fin.");
    return false;
  }

  return true;
}

document
  .getElementById("formulario-tarea")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const title = document.getElementById("titulo-tarea").value;
    const description = document.getElementById("descripcion-tarea").value;
    const startDate = document.getElementById("fecha-inicio").value;
    const endDate = document.getElementById("fecha-fin").value;
    const column = document.getElementById("columna-tarea").value;

    const newTask = {
      title,
      description,
      startDate,
      endDate,
      column,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((task) => {
        addTaskToColumn(task, task.column);
        closeModal();
      })
      .catch((error) => console.error("Error al guardar la tarea:", error));
  });

function deleteTask(taskId) {
  fetch(`${apiUrl}/${taskId}`, {
    method: "DELETE",
  })
    .then(() => {
      const taskElement = document.getElementById(taskId);
      taskElement.remove();
    })
    .catch((error) => console.error("Error al eliminar la tarea:", error));
}

function moveTask(task) {
  const newColumn = prompt(
    "Ingresa la nueva columna (pendientes, en-progreso, completadas):"
  );

  if (newColumn) {
    const updatedTask = { ...task, column: newColumn };

    fetch(`${apiUrl}/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => response.json())
      .then((task) => {
        const taskElement = document.getElementById(task.id);
        taskElement.remove();
        addTaskToColumn(task, task.column);
      })
      .catch((error) => console.error("Error al mover la tarea:", error));
  }
}

let taskBeingEdited = null;

function openEditModal(task) {
  document.getElementById("modal-tarea").style.display = "block";
  document.getElementById("titulo-tarea").value = task.title;
  document.getElementById("descripcion-tarea").value = task.description;
  document.getElementById("fecha-inicio").value = task.startDate;
  document.getElementById("fecha-fin").value = task.endDate;
  document.getElementById("columna-tarea").value = task.column;

  taskBeingEdited = task;

  const formulario = document.getElementById("formulario-tarea");
  formulario.onsubmit = function (e) {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    updateTask();
  };
}

function updateTask() {
  const title = document.getElementById("titulo-tarea").value;
  const description = document.getElementById("descripcion-tarea").value;
  const startDate = document.getElementById("fecha-inicio").value;
  const endDate = document.getElementById("fecha-fin").value;
  const column = document.getElementById("columna-tarea").value;

  const updatedTask = {
    title,
    description,
    startDate,
    endDate,
    column,
  };

  fetch(`${apiUrl}/${taskBeingEdited.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  })
    .then((response) => response.json())
    .then((task) => {
      const taskElement = document.getElementById(task.id);
      taskElement.querySelector(".task-title").textContent = task.title;
      taskElement.querySelector(".task-description").textContent =
        task.description;
      taskElement.querySelector(".task-start-date").textContent =
        task.startDate;
      taskElement.querySelector(".task-end-date").textContent = task.endDate;

      closeModal();
    })
    .catch((error) => console.error("Error al actualizar la tarea:", error));
}

function closeModal() {
  document.getElementById("modal-tarea").style.display = "none";
  document.getElementById("formulario-tarea").reset();
  taskBeingEdited = null;

  const formulario = document.getElementById("formulario-tarea");
  formulario.onsubmit = function (e) {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
  };
}


document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("registerBtn")
    .addEventListener("click", openRegisterModal);
  document.getElementById("loginBtn").addEventListener("click", openLoginModal);
  document
    .getElementById("closeRegisterModal")
    .addEventListener("click", closeRegisterModal);
  document
    .getElementById("closeLoginModal")
    .addEventListener("click", closeLoginModal);
  document
    .getElementById("registerForm")
    .addEventListener("submit", registerUser);
  document.getElementById("loginForm").addEventListener("submit", loginUser);
});

function openRegisterModal() {
  document.getElementById("registerModal").style.display = "block";
}

function closeRegisterModal() {
  document.getElementById("registerModal").style.display = "none";
  document.getElementById("registerForm").reset();
}

function openLoginModal() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
  document.getElementById("loginForm").reset();
}

function registerUser(event) {
  event.preventDefault();

  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  const user = {
    username,
    password,
  };

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Registro exitoso");
        closeRegisterModal();
      } else {
        alert("Error en el registro: " + data.message);
      }
    })
    .catch((error) => console.error("Error en el registro:", error));
}

function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const user = {
    username,
    password,
  };
  
}