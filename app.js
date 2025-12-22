mapboxgl.accessToken = "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw";

const scenes = {
  "world-order": {
    container: "map-world-order",
    style: "mapbox://styles/daltonwb/cmjd7spdl004k01ru6u2zca04",
    initialView: { center: [30.08953, 13.76454], zoom: 4.3, pitch: 0, bearing: 0 },
    layers: {
      "sudan-countries": "sudan-countries",
      "sudan-country-labels": "sudan-country-labels",
      "refugee_data": "refugee_data",
      "eth-city-labels": "eth-city-labels",
      "eth-city-dots": "eth-city-dots",
      "massawa-assab": "massawa-assab",
      "ether-labels": "ether-labels",
      "eth-provinces": "eth-provinces",
      "ether-countries": "ether-countries"
    },
    steps: {
      "world-order-1": {
        camera: { center: [30.08953, 13.76454], zoom: 4.3, pitch: 0, bearing: 0 },
        opacity: [
          { layerKey: "sudan-countries", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "sudan-country-labels", to: 1, transition: { duration: 900, delay: 250 } }
        ]
      },
      "world-order-2": {
        camera: { center: [30.08953, 13.76454], zoom: 4.3, pitch: 0, bearing: 0 },
        opacity: [{ layerKey: "refugee_data", to: .4 },
        { layerKey: "eth-city-labels", to: 0 },
        { layerKey: "eth-city-dots", to: 0 },
        { layerKey: "massawa-assab", to: 0 },
        { layerKey: "ether-labels", to: 0 },
        { layerKey: "eth-provinces", to: 0 },
        { layerKey: "ether-countries", to: 0 }
        ]
      },
      "world-order-3": {
        camera: {
          center: [39.77721, 8.63561],
          zoom: 5,
          pitch: 0,
          bearing: 0
        },
        opacity: [
          { layerKey: "refugee_data", to: 0 },
          { layerKey: "sudan-countries", to: 0, transition: { duration: 900, delay: 0 } },
          { layerKey: "sudan-country-labels", to: 0, transition: { duration: 900, delay: 0 } },
          { layerKey: "eth-city-labels", to: 1 },
          { layerKey: "eth-city-dots", to: 1 },
          { layerKey: "massawa-assab", to: 1 },
          { layerKey: "ether-labels", to: 1 },
          { layerKey: "eth-provinces", to: 1 },
          { layerKey: "ether-countries", to: 1 }
        ]
      }
    }
  },

  "scene-2": {
    container: "map-scene-2",
    style: "mapbox://styles/daltonwb/cmjd7spdl004k01ru6u2zca04",
    initialView: { center: [-5.23010, 12.53354], zoom: 4.5, pitch: 0, bearing: 0 },
    layers: {
      "niger_label": "niger_label",
      "burkina-niger_label": "burkina-niger_label",
      "coup-belt": "coup-belt",
      "bamako_dot": "bamako_dot",
      "bamako_label": "bamako_label",
      "abidjan": "abidjan",
      "mali_road": "mali_road",
      "dakar": "dakar",
      "city_labels_mali": "city_labels_mali",
      "other_label_mali": "other_label_mali",
      "atlantic": "atlantic",
      "mali_label": "mali_label",
      "Mali": "Mali"
    },
    steps: {
      "scene-2-1": {
        camera: { center: [-5.23010, 12.53354], zoom: 4.5, pitch: 0, bearing: 0 },
        opacity: [
          { layerKey: "mali_label", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "Mali", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "atlantic", to: 1, transition: { duration: 900, delay: 250 } }
        ]
      },
      "scene-2-2": {
        camera: { center: [-5.23010, 12.53354], zoom: 4.5, pitch: 0, bearing: 0 },
        callback: ({ map }) => {
          if (map.getLayer("mali_road") && map.getLayer("bamako_dot")) {
            map.moveLayer("mali_road", "bamako_dot");
          }
        },
        opacity: [
          { layerKey: "mali_road", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "other_label_mali", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "city_labels_mali", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "dakar", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "abidjan", to: 1, transition: { duration: 900, delay: 250 } },
          { layerKey: "bamako_label", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "bamako_dot", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "coup-belt", to: 1, transition: { duration: 900, delay: 250 } },
          { layerKey: "burkina-niger_label", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "niger_label", to: 1, transition: { duration: 900, delay: 250 } }
        ]
      },
    }
  },

  "scene-3": {
    container: "map-scene-3",
    style: "mapbox://styles/daltonwb/cmjd7spdl004k01ru6u2zca04",
    initialView: { center: [67.83852, 31.68396], zoom: 5.1, pitch: 0, bearing: 0 },
    layers: {
      "arabian-sea": "arabian-sea",
      "clashes": "clashes",
      "afgpak-border": "afgpak-border",
      "airstrikes": "airstrikes",
      "afgh_label": "afgh_label",
      "pakistan_label": "pakistan_label",
      "city_dots": "city_dots",
      "city_labels": "city_labels",
      "pak-adm1": "pak-adm1",
      "other_label_afgh-pak": "other_label_afgh-pak",
      "pakistan": "pakistan",
      "afghanistan": "afghanistan"
    },
    steps: {
      "scene-3-1": {
        camera: { center: [67.83852, 31.68396], zoom: 5.1, pitch: 0, bearing: 0 },
        opacity: [
          { layerKey: "afghanistan", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "pakistan", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "other_label_afgh-pak", to: 1, transition: { duration: 900, delay: 250 } },
          { layerKey: "city_labels", to: 1, transition: { duration: 900, delay: 250 } },
          { layerKey: "city_dots", to: 1, transition: { duration: 900, delay: 250 } },
          { layerKey: "pakistan_label", to: 1, transition: { duration: 900, delay: 250 } },
          { layerKey: "afgh_label", to: 1, transition: { duration: 900, delay: 250 } },
          { layerKey: "arabian-sea", to: 1, transition: { duration: 900, delay: 250 } },
        ]
      },
      "scene-3-2": {
        camera: { center: [67.83852, 31.68396], zoom: 5.1, pitch: 0, bearing: 0 },
        opacity: [
          { layerKey: "pak-adm1", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "afgpak-border", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "airstrikes", to: 1, transition: { duration: 900, delay: 250 } },
          { layerKey: "clashes", to: 1, transition: { duration: 900, delay: 250 } }
        ]
      },
    }
  }
};

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function toNumber(v, fallback = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function animateLayerOpacity(map, layerId, target, duration = 700) {
  const props = getOpacityPaintProps(map, layerId);
  if (!props || !map.getLayer(layerId)) return;

  // Most Mapbox opacity props are 0..1
  const tgt = clamp(toNumber(target, 0), 0, 1);

  const start = performance.now();
  const initials = props.map((p) => {
    const current = map.getPaintProperty(layerId, p);
    return { p, v: clamp(toNumber(current, 0), 0, 1) };
  });

  function frame(now) {
    // Layer might get removed / style swapped mid-animation
    if (!map.getLayer(layerId)) return;

    const t = clamp((now - start) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - t, 3);

    for (const { p, v } of initials) {
      const next = clamp(v + (tgt - v) * eased, 0, 1);
      map.setPaintProperty(layerId, p, next);
    }

    if (t < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}


function flyCamera(map, camera, duration = 1400) {
  map.flyTo({
    ...camera,
    duration,
    essential: true
  });
}

function getOpacityPaintProps(map, layerId) {
  const layer = map.getLayer(layerId);
  if (!layer) return null;

  switch (layer.type) {
    case "fill": return ["fill-opacity"];
    case "line": return ["line-opacity"];
    case "circle": return ["circle-opacity"];
    case "symbol": return ["text-opacity", "icon-opacity"];
    default: return null;
  }
}

function initScene(sceneId) {
  const cfg = scenes[sceneId];
  const map = new mapboxgl.Map({
    container: cfg.container,
    style: cfg.style,
    center: cfg.initialView.center,
    zoom: cfg.initialView.zoom,
    pitch: cfg.initialView.pitch,
    bearing: cfg.initialView.bearing,
    projection: "mercator",
    interactive: false
  });

  function flyCamera(camera, duration = 1400) {
    map.flyTo({ ...camera, duration, essential: true });
  }

  function updateWorldOrderLegend(activeStepId) {
  const legend = document.getElementById("legend-world-order");
  if (!legend) return;

  // show only on world-order-2
  legend.classList.toggle("is-visible", activeStepId === "world-order-2");
}


  function activateStep(stepEl) {
    const stepId = stepEl.dataset.step;
    console.log("ACTIVATE", stepId);
    const step = cfg.steps[stepId];
    if (!step) return;

    if (step.camera) flyCamera(step.camera);

    if (step.opacity) {
      step.opacity.forEach((o) => {
        const layerId = cfg.layers[o.layerKey];
        if (!layerId) return;
        animateLayerOpacity(map, layerId, o.to);
      });
    }
  }

  map.on("load", () => {
    Object.values(cfg.layers).forEach((layerId) => {
      const props = getOpacityPaintProps(map, layerId);
      if (!props) return;
      props.forEach((p) => map.setPaintProperty(layerId, p, 0));
    });

    const sceneEl = document.querySelector(`.map-scene[data-scene="${sceneId}"]`);
    const steps = sceneEl?.querySelectorAll(".map-scene__steps > .step") ?? [];

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && activateStep(e.target)),
      { threshold: 0.2 }
    );

    steps.forEach((s) => observer.observe(s));
  });


  return map;
}

Object.keys(scenes).forEach(initScene);
