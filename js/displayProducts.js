// Función para mostrar los productos en la página
function displayProducts(products) {
    const productList = document.getElementById('productList');
    while (productList.firstChild) {
        productList.removeChild(productList.firstChild);
    }

    // Iterar a través de los productos y agregarlos al HTML
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const imageElement = document.createElement('img');
        imageElement.src = product.image; //
        imageElement.alt = product.name;
        //agregar placeholder si la imagen no carga
        if (imageElement && imageElement.src) {
            var img = new Image();
            img.onerror = function() {
                imageElement.src = 'https://dummyimage.com/175.png?text=foto%20producto';
            };
            img.src = imageElement.src; // Set the source to trigger the events
        } else {
            // The src attribute is null or undefined
            imageElement.src = 'https://dummyimage.com/175.png?text=foto%20producto';
        }

        const infoElement = document.createElement('div');
        infoElement.classList.add('product-info');

        const titleElement = document.createElement('div');
        titleElement.classList.add('product-title');
        titleElement.textContent = product.name;

        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('product-description');
        descriptionElement.textContent = product.description;

        const priceElement = document.createElement('div');
        priceElement.classList.add('product-price');
        priceElement.textContent = `$${product.price.toFixed(2)}`;

        // Agregar elementos al producto
        infoElement.appendChild(titleElement);
        infoElement.appendChild(descriptionElement);
        productElement.appendChild(imageElement);
        productElement.appendChild(infoElement);
        productElement.appendChild(priceElement);

        // Agregar producto al contenedor
        productList.appendChild(productElement);
    });
}
