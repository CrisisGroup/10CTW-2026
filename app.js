mapboxgl.accessToken = "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw";

const scenes = {
  "world-order": {
    container: "map-world-order",
    style: "mapbox://styles/daltonwb/cmjbub4q6001101s86par7uz8",
    initialView: { center: [33.37291, 25.14727], zoom: 4.5, pitch: 0, bearing: 0 },
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
        camera: { center: [33.37291, 25.14727], zoom: 4.5, pitch: 0, bearing: 0 },
        opacity: [
          { layerKey: "sudan-countries", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "sudan-country-labels", to: 1, transition: { duration: 900, delay: 250 } }
        ]
      },
      "world-order-2": {
        camera: { center: [23.02624, 14.68850], zoom: 5.75, pitch: 0, bearing: 0 },
        opacity: [{ layerKey: "refugee_data", to: 1 }]
      },
      "world-order-3": {
        camera: {
          center: [37.85272, 11.26549],
          zoom: 5.8,
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
    style: "mapbox://styles/daltonwb/cmjbub4q6001101s86par7uz8",
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
    style: "mapbox://styles/daltonwb/cmjbub4q6001101s86par7uz8",
    initialView: { center: [96.07952, 19.48481], zoom: 5.4, pitch: 0, bearing: 0 },
    layers: {
      "mandalay_label": "mandalay_label",
      "mandalay_dot": "mandalay_dot",
      "myanmar_label": "myanmar_label",
      "naypyidaw_dot": "naypyidaw_dot",
      "naypyidaw_label": "naypyidaw_label",
      "road": "road",
      "road-under": "road-under",
      "shan_state": "shan_state",
      "myanmar_border": "myanmar_border",
      "myanmar": "myanmar"
    },
    steps: {
      "scene-3-1": {
        camera: { center: [96.07952, 19.48481], zoom: 5.4, pitch: 0, bearing: 0 },
        opacity: [
          { layerKey: "myanmar_label", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "myanmar", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "myanmar_border", to: 1, transition: { duration: 900, delay: 250 } }
        ]
      },
      "scene-3-2": {
        camera: { center: [96.07952, 19.48481], zoom: 5.4, pitch: 0, bearing: 0 },
        opacity: [
          { layerKey: "shan_state", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "road", to: 1, transition: { duration: 900, delay: 250 } },
          { layerKey: "road-under", to: 1, transition: { duration: 900, delay: 250 } }
        ]
      },
      "scene-3-3": {
        camera: { center: [96.07952, 19.48481], zoom: 5.4, pitch: 0, bearing: 0 },
        opacity: [
          { layerKey: "naypyidaw_label", to: 1, transition: { duration: 900, delay: 0 } },
          { layerKey: "naypyidaw_dot", to: 1, transition: { duration: 900, delay: 250 } },
          { layerKey: "mandalay_label", to: 1, transition: { duration: 900, delay: 250 } },
          { layerKey: "mandalay_dot", to: 1, transition: { duration: 900, delay: 250 } }
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
