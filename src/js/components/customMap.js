import mapboxgl from "mapbox-gl";

export const initCustomMap = (container) => {
  const { mapLat, mapLng } = container.dataset;

  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

  const map = new mapboxgl.Map({
    container: container,
    style: "mapbox://styles/andrew-dreamer/cmsohob9k00sh01sabxf33rpc",
    center: [parseFloat(mapLng), parseFloat(mapLat)],
    zoom: 12,
  });

  map.addControl(new mapboxgl.FullscreenControl());
  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(
    new mapboxgl.ScaleControl({
      maxWidth: 80,
      unit: "metric",
    }),
  );

  new mapboxgl.Marker({
    color: "#E5A51A",
  })
    .setLngLat([parseFloat(mapLng), parseFloat(mapLat)])
    .addTo(map);

  container.classList.add("_is-loaded");
};
