var card = "";

fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    var content = document.getElementById("content");

    if (Array.isArray(data.Villas)) {
      data.Villas.forEach((villa) => {
        //console.log(villa);

        card +=
          "<div class='col-lg-4 col-md-6'><div class='item shadow'><a href='#'><img class='shadow' src='" +
          villa.img +
          "' loading='lazy'></a><span class='category'>" +
          villa.tipo +
          "</span><h6>US " +
          villa.precio_original +
          "<span><p class='h5 text-center text-dark'>" +
          villa.precio_descuento +
          "</p></span></h6><h4><a href='#'>" +
          villa.nombre +
          "</a></h4><ol><li>Capacidad: <span>" +
          villa.capacidad +
          "</span></li><li>Habitaciones: <span>" +
          villa.habitaciones +
          "</span></li><li>Baños: <span>" +
          villa.banos +
          "</span></li><li>Cocina completa</li></ol><div class='main-button'><a href='#'><i class='fa fa-eye m-1'></i> ver</a>  <a href='https://wa.me/18097919841?text=Me%20interesa%20la%20villa%20" +
          villa.nombre +
          "!'><i class='bi bi-whatsapp m-2'></i>Reserva ya</a></div></div></div>";

        content.innerHTML = card;
      });
    }
  })
  .catch((error) => console.error("Error al cargar el JSON:", error));
