var datosCentros = [
    {
        "nombreSede": "Centro Médico San Martín",
        "direccion": "Calle Principal 123",
        "contacto": "+54 9 11 1234-5678",
        "horario": "Lunes a Viernes: 9:00 AM - 6:00 PM"
    },
    {
        "nombreSede": "Hospital de la Esperanza",
        "direccion": "Avenida de la Salud 456",
        "contacto": "+54 9 11 8765-4321",
        "horario": "Lunes a Sábado: 8:30 AM - 7:00 PM"
    },
    {
        "nombreSede": "Clínica Santa Rosa",
        "direccion": "Plaza de la Salud 789",
        "contacto": "+54 9 11 5555-1234",
        "horario": "Martes a Domingo: 10:00 AM - 8:00 PM"
    },
    {
        "nombreSede": "Centro Médico Belgrano",
        "direccion": "Calle de la Salud 234",
        "contacto": "+54 9 11 7777-8888",
        "horario": "Lunes a Jueves: 10:30 AM - 5:30 PM"
    },
    {
        "nombreSede": "Hospital Central Palermo",
        "direccion": "Avenida de la Salud 567",
        "contacto": "+54 9 11 3333-4444",
        "horario": "Miércoles a Sábado: 9:00 AM - 6:30 PM"
    },
    {
        "nombreSede": "Centro Médico Norte",
        "direccion": "Centro Comercial de la Salud 890",
        "contacto": "+54 9 11 2222-3333",
        "horario": "Lunes a Viernes: 8:00 AM - 7:00 PM"
    },
    {
        "nombreSede": "Clínica Los Tilos",
        "direccion": "Calle Tranquila de la Salud 123",
        "contacto": "+54 9 11 8888-9999",
        "horario": "Martes a Sábado: 11:00 AM - 6:00 PM"
    },
    {
        "nombreSede": "Hospital de la Ciudad",
        "direccion": "Avenida Animada de la Salud 456",
        "contacto": "+54 9 11 4444-5555",
        "horario": "Lunes a Domingo: 9:30 AM - 8:30 PM"
    },
    {
        "nombreSede": "Centro Médico San Juan",
        "direccion": "Plaza Tranquila de la Salud 789",
        "contacto": "+54 9 11 1111-2222",
        "horario": "Miércoles a Viernes: 10:00 AM - 5:00 PM"
    },
    {
        "nombreSede": "Hospital del Sol",
        "direccion": "Calle Peatonal de la Salud 234",
        "contacto": "+54 9 11 6666-7777",
        "horario": "Jueves a Sábado: 9:00 AM - 7:30 PM"
    }
];

var datosMoviles = [
    {
        "id":1,
        "lugarServicio": "Calle Saludable 123, Ciudad Salud",
        "diaAtencion": "Lunes",
        "horarioAtencion": "8:00 AM - 5:00 PM"
    },
    {
        "id":2,
        "lugarServicio": "Avenida de la Salud 456, Ciudad Bienestar",
        "diaAtencion": "Martes",
        "horarioAtencion": "9:00 AM - 6:30 PM"
    },
    {
        "id":3,
        "lugarServicio": "Plaza Dental 789, Ciudad Sonrisa",
        "diaAtencion": "Miércoles",
        "horarioAtencion": "10:30 AM - 4:30 PM"
    },
    {
        "id":4,
        "lugarServicio": "Calle Rehabilitación 234, Ciudad Saludable",
        "diaAtencion": "Jueves",
        "horarioAtencion": "8:30 AM - 7:00 PM"
    },
    {
        "id":5,
        "lugarServicio": "Avenida Nutrición 567, Ciudad Equilibrio",
        "diaAtencion": "Viernes",
        "horarioAtencion": "7:00 AM - 4:00 PM"
    },
    {
        "id":6,
        "lugarServicio": "Calle Mental 890, Ciudad Bienestar",
        "diaAtencion": "Sábado",
        "horarioAtencion": "11:00 AM - 6:00 PM"
    },
    {
        "id":7,
        "lugarServicio": "Plaza de la Vacuna 123, Ciudad Salud",
        "diaAtencion": "Domingo",
        "horarioAtencion": "9:30 AM - 1:30 PM"
    },
    {
        "id":8,
        "lugarServicio": "Avenida Farmacéutica 456, Ciudad Bienestar",
        "diaAtencion": "Lunes a Viernes",
        "horarioAtencion": "8:00 AM - 8:00 PM"
    },
    {
        "id":9,
        "lugarServicio": "Calle Visión 789, Ciudad Salud",
        "diaAtencion": "Miércoles a Sábado",
        "horarioAtencion": "10:00 AM - 6:00 PM"
    },
    {
        "id":10,
        "lugarServicio": "Avenida Prenatal 234, Ciudad Bienestar",
        "diaAtencion": "Jueves a Domingo",
        "horarioAtencion": "9:00 AM - 7:30 PM"
    }
];

// Función para cargar datos en la tabla
function cargarDatosEnTabla(datos, tablaId) {
    var tabla = document.getElementById(tablaId);
    var tbody = tabla.getElementsByTagName('tbody')[0];

    for (var i = 0; i < datos.length; i++) {
        var fila = tbody.insertRow(i);

        for (var key in datos[i]) {
            var celda = fila.insertCell();
            celda.innerHTML = datos[i][key];
        }
    }
}

// Cargar datos en las tablas
cargarDatosEnTabla(datosCentros, 'centrosTable');
cargarDatosEnTabla(datosMoviles, 'movilesTable');


// Coordenada central: Est. San Miguel
const center = [-34.5438, -58.7137];

function getLocations() {
    
    const center = { lat: -34.5438, lng: -58.7137 };

    const locations = [];
    for (let i = 1; i <= 10; i++) {
        // Generar una ubicación aleatoria en un radio de 5 km
        const randomLat = center.lat + (Math.random() - 0.5) * 0.045; // Aproximadamente 5 km en grados
        const randomLng = center.lng + (Math.random() - 0.5) * 0.045; // Aproximadamente 5 km en grados

        // Crear un objeto de ubicación con título
        const location = {
            coordinates: [randomLat, randomLng],
            title: `Movil ${i}`
        };

        locations.push(location);
    }

    return locations;
}

// Crear un nuevo mapa
const map = L.map('map').setView(center, 13); // El segundo parámetro es el nivel de zoom

// Añadir una capa de mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Colocar marcadores en el mapa
getLocations().forEach(location => {
    L.marker(location.coordinates).addTo(map)
        .bindPopup(location.title);
});