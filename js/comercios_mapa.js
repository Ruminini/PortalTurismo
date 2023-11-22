var dataComercios = comercios;

$(document).ready(function () {
    // esta atento a que dispare un evento nuevo de busqueda, y dispara buscador Comercios
    $('#buscador-comercio').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            buscadorComercios();
        }
    });

});

function buscadorComercios() {
    limpiarBusquedaYMarcadores();
    let comercio = $("#buscador-comercio").val().toLowerCase();

    let resultadosBusqueda = dataComercios.filter(item => filtrarPorNombre(item, comercio));
    let coordenadas = [];
    resultadosBusqueda.forEach(function (element, index) {
        dibujarComercio(element, index);
        let coord = [element.name, element.lat, element.lng];
        coordenadas.push(coord);
    }, this) 
    cargarMultiplesCoordMapa(coordenadas, comercioSeleccionado);
    $("#mapid").show();
    $("#titleCardComercio").show();
}
function filtrarPorNombre(elemento, nombre) {
    if (elemento.name.toLowerCase().includes(nombre)) {
        return true;
    }
    return false;
}

function comercioSeleccionado(e) {
    let nombreMarker = e.target._popup._content;
    let i = nombreMarker.substring(nombreMarker.length-1, nombreMarker.length);
    i = i-1;           
    let list = $("#listaComercios")[0].children;
    
    Array.from(list).forEach((element,index) => {
        if (element.id == "index-" + i) {
            
            $(element).addClass("destacarComercio")
            centrarVista(e.target);
		    
        }else {
            $(element).removeClass("destacarComercio")
        }
        
	})
    
}

function limpiarBusquedaYMarcadores(){
    $("#listaComercios").empty();
    removeMarkers();
}
// desquita recuadro de destacado
function destacarComercio(el){
    let list = $("#listaComercios")[0].children;
    Array.from(list).forEach(element => {
        $(element).removeClass("destacarComercio") 
        if (element.id == el.id) {
            $(element).addClass("destacarComercio")
        } else {
            $(element).removeClass("destacarComercio")
        }
        
    })
}

function centrar(element) {
    let id = element.id; //index-0
    let num = id.substring(id.length-1, id.length);
    let idLeaf = marcadoresID[num];
    let listadoMarkers = getMarkerById(idLeaf.idLeaf);
    centrarVista(listadoMarkers);
    destacarComercio(element);
    centrarEnLista(element);
}


//Dibuja un Comercio

function dibujarComercio(element, index) {
    $("#listaComercios").append(`
        <div class="card mb-3" onclick="centrar(this)" style="max-width: 540px;" id="index-${index}" lat="${element.lat}" lng="${element.lng}">
            <div class="row g-0">
            <div class="col-md-4">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text pie"><small class="text-muted">Horarios: ${element.hour}</small></p>
                <p class="card-text pie"><small class="text-muted">Direccion: ${element.direccion} | Tel.: ${element.telefone}</small></p>
            </div>
            </div>
            </div>
        </div>
    `);
}





