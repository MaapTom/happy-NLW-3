const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// get values from html
const latitude = document.querySelector('span[data-lat]').dataset.lat
const longitude = document.querySelector('span[data-long]').dataset.long

const map = L.map('mapid', options).setView([latitude,longitude], 16);

// create and add titlelayer+
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/img/map-marker.svg",
    iconsSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create and add marker

L.marker([latitude, longitude], {icon}).addTo(map)

/* Image galery*/

function selectImage(event) {
    const button = event.currentTarget;
    const buttons = document.querySelectorAll(".images button");

    buttons.forEach((button) => {
        button.classList.remove("active");
    })

    button.classList.add("active");

    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    imageContainer.src = image.src;
}