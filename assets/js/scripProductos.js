



document.addEventListener("DOMContentLoaded", () => {
    // Array compartido de productos
    let productos = [
        {
            imagen: "assets/images/Gafas pincher.png",
            titulo: "Alimento Premium para Perros",
            descripcion: "Nutrición completa para tu mascota, sabor pollo y arroz."
        },
        {
            imagen: "assets/images/Gafas pincher.png",
            titulo: "Rascador para Gatos",
            descripcion: "Ideal para el entretenimiento y salud de las uñas de tu gato."
        },
        {
            imagen: "assets/images/Gafas pincher.png",
            titulo: "Collar Reflectante",
            descripcion: "Collar ajustable con tira reflectante para mayor seguridad nocturna."
        }
        ,
        {
            imagen: "assets/images/Casa gato.png",
            titulo: "Collar Reflectante",
            descripcion: "Collar ajustable con tira reflectante para mayor seguridad nocturna."
        },
        {
            imagen: "assets/images/Cuido Ringo.png",
            titulo: "Collar Reflectante",
            descripcion: "Collar ajustable con tira reflectante para mayor seguridad nocturna."
        },
        {
            imagen: "assets/images/Salchicho.png",
            titulo: "Collar Reflectante",
            descripcion: "Collar ajustable con tira reflectante para mayor seguridad nocturna."
        }
    ];

   
    const contenedor = document.getElementById("productosContainer");

    if (contenedor) {
        productos.forEach(producto => {
            const card = document.createElement("div");
            card.className = "col-md-4 mb-4";
            card.innerHTML = `
                <div class="card h-100 shadow">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.titulo}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <a href="#" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            `;
            contenedor.appendChild(card);
        });
    }

   
    const tablaProductos = document.getElementById("tablaProductos");

    if (tablaProductos) {
        function renderProductos() {
            tablaProductos.innerHTML = "";
            productos.forEach((producto, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td><input class="form-control" value="${producto.titulo}" disabled></td>
                    <td><input class="form-control" value="${producto.descripcion}" disabled></td>
                    <td><input class="form-control" value="${producto.imagen}" disabled></td>
                    <td class="text-center">
                        <button class="btn btn-warning btn-sm me-1" onclick="editarProducto(${index})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
                    </td>
                `;
                tablaProductos.appendChild(row);
            });
        }

        window.editarProducto = function(index) {
            const row = tablaProductos.rows[index];
            const inputs = row.querySelectorAll("input");
            const boton = row.querySelector("button.btn-warning");

            if (inputs[0].disabled) {
                inputs.forEach(input => input.disabled = false);
                boton.textContent = "Guardar";
            } else {
                productos[index].titulo = inputs[0].value;
                productos[index].descripcion = inputs[1].value;
                productos[index].imagen = inputs[2].value;
                inputs.forEach(input => input.disabled = true);
                boton.textContent = "Editar";
            }
        };

        window.eliminarProducto = function(index) {
            if (confirm("¿Eliminar este producto?")) {
                productos.splice(index, 1);
                renderProductos();
            }
        };

        const form = document.getElementById("formProducto");
        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();
                const titulo = document.getElementById("tituloNuevo").value.trim();
                const descripcion = document.getElementById("descripcionNueva").value.trim();
                const imagen = document.getElementById("imagenNueva").value.trim();

                if (titulo && descripcion && imagen) {
                    productos.push({ titulo, descripcion, imagen });
                    renderProductos();
                    this.reset();
                }
            });
        }

        renderProductos();
    }
});
