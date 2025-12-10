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
      borders: "country-borders-line",
      overlay: "world-risk-overlay-fill"
    },
    steps: [
      {
        id: "world-order-1",
        camera: {
          center: [10, 20],
          zoom: 1.7,
          pitch: 0,
          bearing: 0
        },
        paintTransitions: [
          {
            layerKey: "borders",
            paint: "line-opacity",
            to: 0.9
          }
        ]
      },
      {
        id: "world-order-2",
        camera: {
          center: [10, 20],
          zoom: 2.1,
          pitch: 20,
          bearing: -10
        },
        paintTransitions: [
          {
            layerKey: "overlay",
            paint: "fill-opacity", // or circle-opacity / symbol-opacity
            to: 0.8
          }
        ]
      }
    ]
  }
};

// --- Map setup ---

const map = new mapboxgl.Map({
  container: "map-world-order",
  style: "mapbox://styles/daltonwb/cmiqj0lh0000401qwbwt41s6e",
  center: chapterConfig["world-order"].initialView.center,
  zoom: chapterConfig["world-order"].initialView.zoom,
  pitch: chapterConfig["world-order"].initialView.pitch,
  bearing: chapterConfig["world-order"].initialView.bearing,
  projection: "mercator",
  interactive: false
});

// Helper: tween any paint property (opacity etc.)
function animatePaintProperty(map, layerId, paintProp, target, duration = 700) {
  const start = performance.now();
  const initial = map.getPaintProperty(layerId, paintProp) ?? 0;

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
    const value = initial + (target - initial) * eased;
    map.setPaintProperty(layerId, paintProp, value);

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

function activateStep(stepEl) {
  const chapterId = stepEl.closest(".map-scene").dataset.chapterId;
  const config = chapterConfig[chapterId];
  if (!config) return;

  const stepId = stepEl.dataset.stepId;
  const stepConfig = config.steps.find((s) => s.id === stepId);
  if (!stepConfig) return;

  if (stepConfig.camera) {
    const cam = {
      center: config.initialView.center,
      ...stepConfig.camera
    };
    flyCamera(map, cam);
  }

  if (stepConfig.paintTransitions) {
    stepConfig.paintTransitions.forEach((t) => {
      const layerId = config.layers[t.layerKey];
      if (!layerId) return;
      animatePaintProperty(map, layerId, t.paint, t.to);
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
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          activateStep(entry.target);
        }
      });
    },
    {
      threshold: [0.6],
      rootMargin: "-10% 0px -40% 0px"
    }
  );

  steps.forEach((step) => observer.observe(step));
});
