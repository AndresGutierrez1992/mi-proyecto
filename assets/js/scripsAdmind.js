let usuarios = [
  { correo: "admin@petmarket.com", contrasena: "admin123" },
  { correo: "cliente1@petmarket.com", contrasena: "cliente123" },
  { correo: "michi@petmarket.com", contrasena: "gato123" },
  { correo: "perrito@petmarket.com", contrasena: "doggo123" },
  { correo: "juan@example.com", contrasena: "juan123" }
];

let boto = document.getElementById("registro")
if (boto) {
  boto.addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const passwordVerify = document.getElementById("passwordVerify").value;
    const condiciones = document.getElementById("condiciones").checked;


    if (!email || !password || !passwordVerify) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (password !== passwordVerify) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    if (!condiciones) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    const nuevoUsuario = {
      correo: email,
      contraseña: password
    };


    usuarios.push(nuevoUsuario);

    console.log("Usuarios registrados:", usuarios);
    alert("Usuario registrado exitosamente ✅");


    document.querySelector(".formulario").reset();
  });

}


const tbody = document.getElementById("tablaUsuarios");

if (tbody) {
  function renderTabla() {
    tbody.innerHTML = "";

   
    usuarios.forEach((usuario, index) => {
      const fila = document.createElement("tr");

      fila.innerHTML = `
        <td>${index + 1}</td>
        <td><input type="text" class="form-control" value="${usuario.correo}" disabled></td>
        <td><input type="password" class="form-control" value="${usuario.contrasena}" disabled></td>
        <td>
          <button class="btn btn-warning btn-sm me-1" onclick="editarUsuario(${usuario.id})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="eliminarUsuario(${usuario.id})">Eliminar</button>
        </td>
      `;

      tbody.appendChild(fila);
    });
  }



  const form = document.getElementById("formAgregar");
  if (form) {
      form.addEventListener("submit", function (e) {
          e.preventDefault();
          const correo = document.getElementById("correoNuevo").value.trim();
          const contrasena = document.getElementById("contrasenaNueva").value;

          if (correo && contrasena) {
              usuarios.push({ correo,contrasena});

              console.log("Usuarios registrados:", usuarios);
              
              alert("Usuario registrado exitosamente ✅");
              renderTabla();
              this.reset();
          }
      });
  }

  function editarUsuario(id) {
    const fila = tbody.querySelectorAll("tr")[id - 1];
    const inputs = fila.querySelectorAll("input");

    const estaEditando = inputs[0].disabled === false;

    if (estaEditando) {

      usuarios[id - 1].correo = inputs[0].value;
      usuarios[id - 1].contrasena = inputs[1].value;
      inputs.forEach(input => input.disabled = true);
    } else {

      inputs.forEach(input => input.disabled = false);
    }
  }

  function eliminarUsuario(id) {
    if (confirm("¿Seguro que deseas eliminar este usuario?")) {
      usuarios.splice(id - 1, 1);
      usuarios.forEach((u, i) => u.id = i + 1);
      renderTabla();
    }
  }

  renderTabla();


}




let empleados = [
  {
    nombre: "Laura",
    apellido: "Gómez",
    cedula: "12345678",
    correo: "laura@example.com",
    telefono: "3001234567",
    direccion: "Cra 10 #20-30",
    password: "laura123"
  },
  {
    nombre: "Carlos",
    apellido: "Ramírez",
    cedula: "87654321",
    correo: "carlos@example.com",
    telefono: "3017654321",
    direccion: "Cll 45 #56-78",
    password: "carlos456"
  }
];

function mostrarEmpleados() {
  const tbodyE = document.getElementById("bodyEmpleados");

  tbodyE.innerHTML = "";
  empleados.forEach((empleado, index) => {
    tbodyE.innerHTML += `
        <tr>
          <td>${empleado.nombre}</td>
          <td>${empleado.apellido}</td>
          <td>${empleado.cedula}</td>
          <td>${empleado.correo}</td>
          <td>${empleado.telefono}</td>
          <td>${empleado.direccion}</td>
          <td>${empleado.password}</td>
          <td>
            <button class="btn btn-warning btn-sm" onclick="editarEmpleado(${index})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="eliminarEmpleado(${index})">Eliminar</button>
          </td>
        </tr>
      `;
  });
}

function eliminarEmpleado(index) {
  if (confirm("¿Estás seguro de eliminar este empleado?")) {
    empleados.splice(index, 1);
    mostrarEmpleados();
  }
}

function editarEmpleado(index) {
  const empleado = empleados[index];
  const nombre = prompt("Nuevo nombre:", empleado.nombre);
  const apellido = prompt("Nuevo apellido:", empleado.apellido);
  const cedula = prompt("Nueva cédula:", empleado.cedula);
  const correo = prompt("Nuevo correo:", empleado.correo);
  const telefono = prompt("Nuevo teléfono:", empleado.telefono);
  const direccion = prompt("Nueva dirección:", empleado.direccion);
  const password = prompt("Nueva contraseña:", empleado.password);


  if (!nombre || !apellido || !cedula || !correo || !telefono || !direccion || !password) {
    window.alert("informacion no valida campos en blanco")
  } else {
    empleados[index] = { nombre, apellido, cedula, correo, telefono, direccion, password };
    mostrarEmpleados();
  }


}



function agregarEmpleado() {
  const nombre = prompt("Nombre:");
  const apellido = prompt("Apellido:");
  const cedula = prompt("Cédula:");
  const correo = prompt("Correo:");
  const telefono = prompt("Teléfono:");
  const direccion = prompt("Dirección:");
  const password = prompt("Contraseña:");


  if (!nombre || !apellido || !cedula || !correo || !telefono || !direccion || !password) {
    window.alert("informacion no valida campos en blanco")
  } else {

    empleados.push({ nombre, apellido, cedula, correo, telefono, direccion, password });
    mostrarEmpleados();
  }
}

document.addEventListener("DOMContentLoaded", mostrarEmpleados);






