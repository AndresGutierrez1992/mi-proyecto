
let promociones = [
  {
    imagen: "assets/images/salchicho.png",
    titulo: "Alimento Premium",
    descripcion: "Nutrición completa sabor pollo y arroz."
  },
  {
    imagen: "assets/images/salchicho.png",
    titulo: "Rascador para Gatos",
    descripcion: "Entretenimiento para tu michi."
  },
  {
    imagen: "assets/images/salchicho.png",
    titulo: "Collar Reflectante",
    descripcion: "Mayor seguridad nocturna."
  },
  {
    imagen: "assets/images/salchicho.png",
    titulo: "Juguete Interactivo",
    descripcion: "Para jugar todo el día."
  },
  {
    imagen: "assets/images/salchicho.png",
    titulo: "Transportadora Deluxe",
    descripcion: "Viajes cómodos y seguros."
  },
  {
    imagen: "assets/images/salchicho.png",
    titulo: "Shampoo Antipulgas",
    descripcion: "Limpieza profunda y protección."
  }
];

const carouselInner = document.getElementById("carouselItems");

if (carouselInner) {
  for (let i = 0; i < promociones.length; i += 3) {
    const grupo = promociones.slice(i, i + 3);
  
    const item = document.createElement("div");
    item.className = `carousel-item ${i === 0 ? "active" : ""}`;
  
    const row = document.createElement("div");
    row.className = "row justify-content-center";
  
    grupo.forEach(promociones => {
      const col = document.createElement("div");
      col.className = "col-md-4";
  
      col.innerHTML = `
     
          <div class="card mx-auto mb-2" style="width: 18rem;">
                    <img src="${promociones.imagen}" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">${promociones.titulo}</h5>
                      <p class="card-text">${promociones.descripcion}.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
        `;
  
      row.appendChild(col);
    });
  
    item.appendChild(row);
    carouselInner.appendChild(item);
  }
}






const tablaPromociones = document.getElementById("tablaPromociones");

if (tablaPromociones) {
  function renderPromociones() {
    tablaPromociones.innerHTML = "";
    promociones.forEach((promo, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${index + 1}</td>
          <td><input class="form-control" value="${promo.titulo}" disabled></td>
          <td><input class="form-control" value="${promo.descripcion}" disabled></td>
          <td><input class="form-control" value="${promo.imagen}" disabled></td>
          <td class="text-center">
            <button class="btn btn-warning btn-sm me-1" onclick="editarPromocion(${index})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="eliminarPromocion(${index})">Eliminar</button>
          </td>
        `;
      tablaPromociones.appendChild(row);
    });
  }
  
  function editarPromocion(index) {
    const row = tablaPromociones.rows[index];
    const inputs = row.querySelectorAll("input");
    const boton = row.querySelector("button.btn-warning");
  
    if (inputs[0].disabled) {
      inputs.forEach(input => input.disabled = false);
      boton.textContent = "Guardar";
    } else {
      promociones[index].titulo = inputs[0].value;
      promociones[index].descripcion = inputs[1].value;
      promociones[index].imagen = inputs[2].value;
      inputs.forEach(input => input.disabled = true);
      boton.textContent = "Editar";
    }
  }
  
  function eliminarPromocion(index) {
    if (confirm("¿Eliminar esta promoción?")) {
      promociones.splice(index, 1);
      renderPromociones();
    }
  }
  
  document.getElementById("formPromocion").addEventListener("submit", function (e) {
    e.preventDefault();
    const titulo = document.getElementById("tituloNuevo").value.trim();
    const descripcion = document.getElementById("descripcionNueva").value.trim();
    const imagen = document.getElementById("imagenNueva").value.trim();
  
    if (titulo && descripcion && imagen) {
      promociones.push({ titulo, descripcion, imagen });
      renderPromociones();
      this.reset();
    }
  });
  
  renderPromociones();
  
  
  window.editarPromocion = editarPromocion;
  window.eliminarPromocion = eliminarPromocion;
  
}

