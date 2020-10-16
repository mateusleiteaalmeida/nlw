// create map
const map = L.map("mapid").setView([-27.222633,-49.6455874], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon })
  .addTo(map);
});

// add photo field
function addPhotoField() {

  // get photo container #images
  const container = document.querySelector('#images');

  // get container to duplicate .new-upload
  const fieldsContainer = document.querySelectorAll('.new-upload');

  // clone the last selected image
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

  // check if field is empty, if it is, do not add
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // clean field before adding images container
  input.value = "";

  // add clone to container #images
  container.appendChild(newFieldContainer);
}

// delete photo field
function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer.length < 2) {
    // clean field value
    span.parentNode.children[0].value = "";
    return;
  }

  // delete field
  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {

  // remove the .active class from the buttons
  document.querySelectorAll('.button-select button')
  .forEach(function (button) {
    button.classList.remove('active')
  })

  // add .active class to the clicked button
  const button = event.currentTarget
  button.classList.add('active')

  // update input hidden with the selected value
  const input = document.querySelector('[name="open_on_weekends"]')

  // check if it is yes or no
  input.value = button.dataset.value
}
