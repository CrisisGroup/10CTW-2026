mapboxgl.accessToken = "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw";

const chapterConfig = {
  "world-order": {
    initialView: {
      center: [33.37291, 25.14727],
      zoom: 4.5,
      pitch: 0,
      bearing: 0
    },
    layers: {
      "sudan-countries": "sudan-countries",           // Studio layer id (line/fill)
      "sudan-country-labels": "sudan-country-labels"  // Studio layer id (symbol)
    },

    steps: [
      {
        id: "world-order-1",
        camera: {
          center: [33.37291, 25.14727],
          zoom: 4.5,
          pitch: 0,
          bearing: 0
        },
        opacityTransitions: [
          { layerKey: "sudan-countries", to: 1 }
        ]
      },
      {
        id: "world-order-2",
        camera: {
          center: [33.37291, 25.14727],
          zoom: 5.2,
          pitch: 20,
          bearing: -10
        },
        opacityTransitions: [
          { layerKey: "sudan-country-labels", to: 1 }
        ]
      }
    ]
  }
};

// --- Map setup ---

const map = new mapboxgl.Map({
  container: "map-world-order",
  style: "mapbox://styles/daltonwb/cmj7ju0xv001y01ry823s1gmh",
  center: chapterConfig["world-order"].initialView.center,
  zoom: chapterConfig["world-order"].initialView.zoom,
  pitch: chapterConfig["world-order"].initialView.pitch,
  bearing: chapterConfig["world-order"].initialView.bearing,
  projection: "mercator",
  interactive: false
});

// Helper: tween any paint property (opacity etc.)
function animateLayerOpacity(map, layerId, target, duration = 700) {
  const paintProps = getOpacityPaintProperty(map, layerId);
  if (!paintProps) return;

  const props = Array.isArray(paintProps) ? paintProps : [paintProps];
  const start = performance.now();

  const initials = props.map((prop) => ({
    prop,
    value: map.getPaintProperty(layerId, prop) ?? 0
  }));

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic

    initials.forEach(({ prop, value }) => {
      const next = value + (target - value) * eased;
      map.setPaintProperty(layerId, prop, next);
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

function getOpacityPaintProperty(map, layerId) {
  const layer = map.getLayer(layerId);
  if (!layer) return null;

  switch (layer.type) {
    case "fill":
      return "fill-opacity";
    case "symbol":
      // fade both; harmless if one isn't used
      return ["text-opacity", "icon-opacity"];
    default:
      return null;
  }
}

function activateStep(stepEl) {
  const chapterEl = stepEl.closest(".map-scene");
  if (!chapterEl) return;

  const chapterId = chapterEl.dataset.chapterId;
  const config = chapterConfig[chapterId];
  if (!config) return;

  const stepId = stepEl.dataset.stepId;
  const stepConfig = config.steps.find((s) => s.id === stepId);
  if (!stepConfig) return;

  console.log("ACTIVATE STEP:", stepId);

  // Camera
  if (stepConfig.camera) {
    const cam = { center: config.initialView.center, ...stepConfig.camera };
    flyCamera(map, cam);
  }

  // Opacity transitions
  if (stepConfig.opacityTransitions) {
    stepConfig.opacityTransitions.forEach((t) => {
      const layerId = config.layers[t.layerKey];

      console.log(
        "[opacityTransitions]",
        "layerKey:", t.layerKey,
        "-> layerId:", layerId,
        "target:", t.to
      );

      if (!layerId) {
        console.warn("❌ No layerId for layerKey:", t.layerKey, "registry keys:", Object.keys(config.layers));
        return;
      }

      const layer = map.getLayer(layerId);
      console.log("Layer exists in style?", !!layer, "type:", layer?.type);

      if (!layer) {
        console.warn("❌ Layer not found in loaded style:", layerId);
        return;
      }

      const paintProps = getOpacityPaintProperty(map, layerId);
      console.log("Resolved paint props:", paintProps);

      animateLayerOpacity(map, layerId, t.to);
    });
  }
}




map.on("load", () => {
  const config = chapterConfig["world-order"];

  // Start with borders + overlay invisible
  Object.entries(config.layers).forEach(([key, layerId]) => {
    const layer = map.getLayer(layerId);
    if (!layer) {
      console.warn("Layer not found:", layerId);
      return;
    }

    const type = layer.type;
    const defaultProp =
      type === "line"
        ? "line-opacity"
        : type === "fill"
          ? "fill-opacity"
          : type === "circle"
            ? "circle-opacity"
            : type === "symbol"
              ? "icon-opacity"
              : null;

    if (defaultProp) {
      map.setPaintProperty(layerId, defaultProp, 0);
    }
  });

  // Observe invisible steps inside the map scene
  const steps = document.querySelectorAll(
    '.map-scene[data-chapter-id="world-order"] .step'
  );

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("INTERSECT:", entry.target.dataset.stepId, entry.intersectionRatio);
        activateStep(entry.target);
      }
    });
  },
  { threshold: [0.25] }
);


  steps.forEach((step) => observer.observe(step));
});
