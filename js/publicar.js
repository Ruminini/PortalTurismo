// Cargar productos desde el archivo JSON
function compararPrecios() {
  // Obtener los valores del formulario
  var nombre = document.getElementById('nombre').value;

  // Construir la URL de búsqueda en MercadoLibre
  var url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + nombre;

  // Realizar la solicitud a la API de MercadoLibre
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Extraer la información de los primeros 4 resultados
      var primerosCuatroResultados = data.results.slice(0, 4);

      // Extraer la primera información del resultado
      var primerResultado = data.results[0];
      var imagen = primerResultado.thumbnail;
      var titulo = primerResultado.title;
      var precio = primerResultado.price;

      // Llamar a la función displayProducts con la información obtenida
      displayProducts(
        primerosCuatroResultados.map((result) => ({
          name: '',
          description: result.title,
          price: result.price,
          image: result.thumbnail,
        }))
      );
    })
    .catch((error) => console.error('Error:', error));
}