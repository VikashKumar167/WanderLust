// let mapToken=mapToken;
  // let mapToken = "<%=process.env.MAP_TOKEN%>";
    // console.log(mapToken);
    // var myAPIKey = "6dc7fb95a3b246cfa0f3bcef5ce9ed9a";

// import { Marker } from 'https://cdn.skypack.dev/maplibre-gl';
    var map = new maplibregl.Map({
      container: 'my-map',
      style: `https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=${mapToken}`,
      center: coordinates, // [longitude, latitude]
      zoom: 12
    });
    map.addControl(new maplibregl.NavigationControl());

console.log(coordinates);
console.log(title);

map.on("load", () => {
  console.log("Map loaded", coordinates);
  const markerIcon = document.createElement("div");
  markerIcon.innerHTML = `<i class="fa-solid fa-location-dot"></i>`;
  markerIcon.className = "my-marker";
  markerIcon.style.width = "18px";
  markerIcon.style.height = "18px";

  const popup = new maplibregl.Popup({
    closeOnClick: true,
    offset: 25
  }).setHTML(`
    <div class="pop-up">
      <h5>${title}</h5>
      <p>Exact location will be provided after booking</p>
    </div>
  `);


  new maplibregl.Marker({
    element: markerIcon,
    anchor: "center"
  })
    .setLngLat(coordinates)
    .setPopup(popup) 
    .addTo(map)
    // map.setCenter(coordinates);
});


