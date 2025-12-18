mapboxgl.accessToken = "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw";

const scenes = {
  "world-order": {
    container: "map-world-order",
    style: "mapbox://styles/daltonwb/cmjbicaml004c01qrhj9z731x",
    initialView: { center: [33.37291, 25.14727], zoom: 4.5, pitch: 0, bearing: 0 },
    layers: {
      "sudan-countries": "sudan-countries",
      "sudan-country-labels": "sudan-country-labels"
    },
    steps: {
      "world-order-1": {
        camera: { center: [33.37291, 25.14727], zoom: 4.5, pitch: 0, bearing: 0 },
        opacity: [{ layerKey: "sudan-countries", to: 1 }]
      },
      "world-order-2": {
        camera: { center: [33.37291, 25.14727], zoom: 5.2, pitch: 20, bearing: -10 },
        opacity: [{ layerKey: "sudan-country-labels", to: 1 }]
      }
    }
  },

  "scene-2": {
    container: "map-scene-2",
    style: "mapbox://styles/daltonwb/cmjbicaml004c01qrhj9z731x",
    initialView: { center: [0, 20], zoom: 2, pitch: 0, bearing: 0 },
    layers: { /* ... */ },
    steps: { /* "scene-2-1": {...}, "scene-2-2": {...} */ }
  },

  "scene-3": {
    container: "map-scene-3",
    style: "mapbox://styles/daltonwb/cmjbicaml004c01qrhj9z731x",
    initialView: { center: [-75, 10], zoom: 3, pitch: 0, bearing: 0 },
    layers: { /* ... */ },
    steps: { /* "scene-3-1": {...}, "scene-3-2": {...} */ }
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
