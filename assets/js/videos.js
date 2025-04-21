


let videos = [
    { url: "https://www.youtube.com/embed/P8JyNuYSAWM?si=O0-JnJt5PI1REko3" },
    { url: "https://www.youtube.com/embed/P8JyNuYSAWM?si=O0-JnJt5PI1REko3" },
    { url: "https://www.youtube.com/embed/P8JyNuYSAWM?si=O0-JnJt5PI1REko3" },
    
  ];
  

  const contenedor = document.getElementById("contenedorVideos");

videos.forEach(video => {
  const col = document.createElement("div");
  col.className = "col-sm-12 col-md-4";

  col.innerHTML = `
    <div class="ratio ratio-16x9">
      <iframe src="${video.url}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  `;

  contenedor.appendChild(col);
});




  













