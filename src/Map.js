import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const DEFAULT_LOCATION = [-74.006, 40.7128]; // NYC coordinates

const pulsingDot = `
@keyframes pulsate {
  0% {
    transform: translate(-50%, -50%) scale(0.1);
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}

.pulsing-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #007cbf;
  border: 2px solid white;
  position: relative;
}

.pulsing-dot::after {
  content: '';
  position: absolute;
  width: 300%;
  height: 300%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: rgba(0, 124, 191, 0.3);
  animation: pulsate 2s ease-out infinite;
}
`;

// Set Mapbox access token
if (!mapboxgl.accessToken) {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoia3lyaXR6YiIsImEiOiJja3QyMTl2NTYwa3dxMnZxb2hsdHU3Y2wzIn0.baCC6r6kCtj9JHY5xvXO7Q";
}

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const userMarkerRef = useRef(null);
  const watchId = useRef(null);

  // Initialize Map
  useEffect(() => {
    if (!mapboxgl.supported()) {
      console.error("Your browser does not support Mapbox GL");
      return;
    }

    if (!mapboxgl.accessToken) {
      console.error("Mapbox access token is not set.");
      return;
    }

    if (mapContainerRef.current && !mapRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        center: DEFAULT_LOCATION,
        zoom: 12,
      });

      mapRef.current = map;

      console.log("LOgged geolocation");

      map.on("load", () => {
        // Setup geolocation after the map has loaded
        setupGeolocation(map);
      });
    }

    console.log("LOgged geolocation");

    // Cleanup on unmount
    return () => {
      if (watchId.current !== null) {
        navigator.geolocation.clearWatch(watchId.current);
      }
      if (userMarkerRef.current) {
        userMarkerRef.current.remove();
      }
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  // Add pulsing dot style
  useEffect(() => {
    if (!document.head.querySelector("#pulsing-dot-style")) {
      const style = document.createElement("style");
      style.id = "pulsing-dot-style";
      style.textContent = pulsingDot;
      document.head.appendChild(style);
    }
  }, []);

  // Geolocation Setup
  const setupGeolocation = (map) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLoc = [position.coords.longitude, position.coords.latitude];

          map.flyTo({
            center: userLoc,
            zoom: 13,
            speed: 0.8,
            curve: 1,
          });

          // Add or update user marker
          if (userMarkerRef.current) {
            userMarkerRef.current.remove();
          }

          const el = document.createElement("div");
          el.className = "pulsing-dot";
          userMarkerRef.current = new mapboxgl.Marker(el)
            .setLngLat(userLoc)
            .addTo(map);
        },
        (error) => {
          console.error("Geolocation error:", error);
          map.setCenter(DEFAULT_LOCATION);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
      );

      // Watch position for updates
      watchId.current = navigator.geolocation.watchPosition(
        (position) => {
          const userLoc = [position.coords.longitude, position.coords.latitude];
          if (userMarkerRef.current) {
            userMarkerRef.current.setLngLat(userLoc);
          }
        },
        (error) => {
          console.error("Geolocation watch error:", error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
      );
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        id="map"
        style={{ width: "100%", height: "100%" }}
        ref={mapContainerRef}
      />
    </div>
  );
};

export default MapComponent;
