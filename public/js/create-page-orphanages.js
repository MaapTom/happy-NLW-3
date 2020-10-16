const map = L.map('mapid').setView([-23.4587827,-46.3741247], 16);
var noValid = true;

// create and add titlelayer+
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/img/map-marker.svg",
    iconsSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

let marker;

// create and add marker
map.on('click', (event) => {
    noValid = false;
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;

    document.querySelector('[name=lat]').value = latitude;
    document.querySelector('[name=long]').value = longitude;

    marker && map.removeLayer(marker); //Se existir remova ao contrário prossiga
    marker = L.marker([latitude, longitude], {icon}).addTo(map);
})

// adicionar o campo de fotos
function addPhotoField() {
    const container = document.querySelector('#images');
    const fieldsContainer = document.querySelectorAll('.new-upload');
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    const input = newFieldContainer.children[0];

    if (input.value == "") { // caso não esteja preenchido o código não prossiguirá
        return
    }

    input.value = "";
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = "";
        return
    }

    span.parentNode.remove();
}

function toggleSelect(event) {
    document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'));

    const button = event.currentTarget;
    button.classList.add('active');

    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;
}

function validate(event) {
    if(noValid) {
        alert('Preencha um ponto no mapa')
        event.preventDefault()
    }
}