const latitude = document.querySelector('.orphanages span[data-lat]').dataset.lat
const longitude = document.querySelector('.orphanages span[data-long]').dataset.long

const map = L.map('mapid').setView([latitude,longitude], 16);

// create and add titlelayer+
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/img/map-marker.svg",
    iconsSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, long}) {
    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 250
    }).setContent(`${name} <a href='/orphanage?id=${id}'> <img src='/img/arrow-white.svg'></a>`)

    // create and add marker
    L.marker([lat,long], {icon}).addTo(map).bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');

orphanagesSpan.forEach((orphanageElement) => {
    const orphanage = {
        id: orphanageElement.dataset.id,
        name: orphanageElement.dataset.name,
        lat: orphanageElement.dataset.lat,
        long: orphanageElement.dataset.long
    }

    addMarker(orphanage)
})