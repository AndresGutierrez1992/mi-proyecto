
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




  