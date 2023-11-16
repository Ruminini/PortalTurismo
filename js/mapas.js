var map;
var marcadoresID =[];
function cargarMapa(coordenadas) {

    var coord;

    if (map) {
        map.remove();
        map = null;
    }


    if (coordenadas == undefined || coordenadas == null) {
        coord = [-34.5221554, -58.7000067];
    } else
        coord = coordenadas;

    if (map == undefined || map == null) {

        map = new L.map('mapid');
        map.setView(coord, 15);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }

    var marker = L.marker(coord);
    marker.addTo(map);

}

function cargarMultiplesCoordMapa(locations, callback) {

    var coord = [-34.532905839922215, -58.701842607716195];

    if (map) {
        map.remove();
        map = null;
    }

    if (map == undefined || map == null) {

        map = new L.map('mapid');
        map.setView(coord, 14);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }
    for (var i = 0; i < locations.length; i++) {
        marker = new L.marker([locations[i][1], locations[i][2]])
            .bindPopup(i+"-"+locations[i][0])
            .on("click", callback)
            .addTo(map);
        
        marcadoresID.push({index:i, idLeaf:marker._leaflet_id});
        
    }
}

function getMarkers() {
    var markerList = [];
    map.eachLayer(function(layer) {
        if ((layer instanceof L.Marker)){
            markerList.push(layer);
        };
    });
return markerList;
}
function getMarkerById(id) {
    let layerAux;
    map.eachLayer(function(layer) {
        if ((layer instanceof L.Marker && layer._leaflet_id == id)){
            layerAux = layer;
        };
    });

    return layerAux;
}

function centrarVista(marker){
    map.setView(marker._latlng,15);
}

function removeMap(){
    if (map != null) {
        map.remove();
        map = null;
    }
}

function removeMarkers(){
    if(map != null){
        let list = getMarkers();
        list.forEach(marker => {
            map.removeLayer(marker)  
        });
        marcadoresID = [];
    }
}