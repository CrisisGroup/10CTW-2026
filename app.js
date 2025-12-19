mapboxgl.accessToken = "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw";

const scenes = {
  "world-order": {
    container: "map-world-order",
    style: "mapbox://styles/daltonwb/cmjd26b2j000i01qv9hj9hf0f",
    initialView: { center: [30.08953, 13.76454], zoom: 4.3, pitch: 0, bearing: 0 },
    layers: {
      "sudan-countries": "sudan-countries",
      "sudan-country-labels": "sudan-country-labels",
      "refugee_data": "refugee_data",
      "eth-city-labels": "eth-city-labels",
      "eth-city-dots": "eth-city-dots",
      "massawa-assab": "massawa-assab",
      "etter-labels": "etter-labels",
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
        opacity: [{ layerKey: "refugee_data", to: 1 }]
      },
      "world-order-3": {
        camera: {
          center: [37.85272, 11.26549],
          zoom: 5.5,
          pitch: 0,
          bearing: 0
        },
        opacity: [
          { layerKey: "eth-city-labels", to: 1 },
          { layerKey: "eth-city-dots", to: 1 },
          { layerKey: "massawa-assab", to: 1 },
          { layerKey: "etter-labels", to: 1 },
          { layerKey: "eth-provinces", to: 1 },
          { layerKey: "ether-countries", to: 1 }
        ]
      }
    }
  },

  "scene-2": {
    container: "map-scene-2",
    style: "mapbox://styles/daltonwb/cmjd26b2j000i01qv9hj9hf0f",
    initialView: { center: [-5.23010, 12.53354], zoom: 5, pitch: 0, bearing: 0 },
    layers: {
      "niger_label": "niger_label",
      "burkina-niger_label": "burkina-niger_label",
      "coup-belt": "coup-belt",
      "bamako_dot": "bamako_dot",
      "bamako_label": "bamako_label",
      "abidjan": "abidjan",
      "dakar": "dakar",
      "other_label_mali": "other_label_mali",
      "atlantic": "atlantic",
      "mali_label": "mali_label",
      "Mali": "Mali"
    },
    steps: {
      "scene-2-1": {
        camera: { center: [-5.23010, 12.53354], zoom: 5, pitch: 0, bearing: 0 },
        opacity: [
          { layerKey: "mali_label", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "Mali", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "atlantic", to: 1, transition: { duration: 900, delay: 250 } }
        ]
      },
      "scene-2-2": {
        camera: { center: [-5.23010, 12.53354], zoom: 5, pitch: 0, bearing: 0 },
        opacity: [
          { layerKey: "other_label_mali", to: 1, transition: { duration: 900, delay: 0 } },
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
    style: "mapbox://styles/daltonwb/cmjd26b2j000i01qv9hj9hf0f",
    initialView: { center: [67.83852, 31.68396], zoom: 5.1, pitch: 0, bearing: 0 },
    layers: {
      "arabian-sea": "arabian-sea",
      "clashes": "clashes",
      "afgpak-border": "afgpak-border",
      "airstrikes": "airstrikes",
      "pak-adm1": "pak-adm1",
      "afgh_label": "afgh_label",
      "pakistan_label": "pakistan_label",
      "city_dots": "city_dots",
      "city_labels": "city_labels",
      "other_label_afgh-pak": "other_label_afgh-pak",
      "pakistan": "pakistan",
      "afghanistan": "afghanistan"
    },
    steps: {
      "scene-3-1": {
        camera: { center: [67.83852, 31.68396], zoom: 5.1, pitch: 0, bearing: 0  },
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
        camera: { center: [67.83852, 31.68396], zoom: 5.1, pitch: 0, bearing: 0  },
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

// Helper: tween any paint property (opacity etc.)
function animateLayerOpacity(map, layerId, target, duration = 700) {
  const props = getOpacityPaintProps(map, layerId);
  if (!props) return;

  const start = performance.now();
  const initials = props.map((p) => ({ p, v: map.getPaintProperty(layerId, p) ?? 0 }));

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);

    initials.forEach(({ p, v }) => {
      map.setPaintProperty(layerId, p, v + (target - v) * eased);
    });

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
      { threshold: 0.25 }
    );

    steps.forEach((s) => observer.observe(s));
  });


  return map;
}

Object.keys(scenes).forEach(initScene);
