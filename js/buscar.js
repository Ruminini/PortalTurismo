// Cargar productos desde el archivo JSON
fetch('js/productos.json')
    .then(response => response.json())
    .then(data => {
        // Llamar a la función para mostrar los productos
        displayProducts(data);
    })
    .catch(error => console.error('Error al cargar los productos:', error));

document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencia al campo de búsqueda y a los productos
    const searchField = document.getElementById('searchField');
    const productList = document.getElementById('productList');

    // Agregar evento de cambio al campo de búsqueda
    searchField.addEventListener('input', function () {
        const searchTerm = searchField.value.toLowerCase();

        // Iterar sobre los productos y mostrar/ocultar según el término de búsqueda
        Array.from(productList.children).forEach(product => {
            const title = product.querySelector('.product-title').textContent.toLowerCase();
            const description = product.querySelector('.product-description').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                // Mostrar el producto
                product.style.display = 'block';
            } else {
                // Ocultar el producto
                product.style.display = 'none';
            }
        });
    });
});

// Función para mostrar las cotizaciones
function displayCurrencyInfo() {
    fetch('https://api.bluelytics.com.ar/v2/latest')
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        })
        .then(data => {
            const usdBlock = document.getElementById('usdBlock');
            const eurBlock = document.getElementById('eurBlock');
            usdBlock.querySelector('.oficial').textContent = '$' + data.oficial.value_avg;
            usdBlock.querySelector('.blue').textContent = '$' + data.blue.value_avg;
            eurBlock.querySelector('.oficial').textContent = '$' + data.oficial_euro.value_avg;
            eurBlock.querySelector('.blue').textContent = '$' + data.blue_euro.value_avg;
        });
}

document.addEventListener('DOMContentLoaded', function() {
    displayCurrencyInfo();
});