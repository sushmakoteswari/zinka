import React from "react";
import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";

// Replace this with your actual Google Maps API key
const GOOGLE_MAPS_API_KEY = "AIzaSyByEOOomzOYVpB9TaGke1SmkgM0qyNAiFA";

const defaultProps = {
  center: {
    lat: 17.4401,
    lng: 78.3489,
  },
  zoom: 13,
};

const mapOptions = {
  styles: [
    {
      featureType: "landscape.man_made",
      elementType: "geometry",
      stylers: [
        {
          color: "#f7f1df",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#d0e3b4",
        },
      ],
    },
    {
      featureType: "landscape.natural.terrain",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.medical",
      elementType: "geometry",
      stylers: [
        {
          color: "#fbd3da",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#bde6ab",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffe15f",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#efd151",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "black",
        },
      ],
    },
    {
      featureType: "transit.station.airport",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#cfb2db",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#a2daf2",
        },
      ],
    },
  ],
};

const branches = {
  hyderabad: {
    lat: 17.4401,
    lng: 78.3489,
  },
};

interface CustomerMarkerProps {
  lat: number;
  lng: number;
  text: string;
}

const CustomMarker = (props: CustomerMarkerProps): JSX.Element => {
  return (
    <Box
      p={1}
      sx={{
        background: "rgba(255, 255, 255, 0.8)",
        borderRadius: "5px",
        width: "150px",
        textAlign: "center",
        fontWeight: "bold",
        position: "relative",
        left: "-70px",
      }}
    >
      {props.text}
    </Box>
  );
};

const MapSection = (): JSX.Element => {
  const renderMarkers = (
    map: google.maps.Map,
    maps: typeof google.maps
  ): void => {
    new maps.Marker({
      position: branches.hyderabad,
      map,
    });
  };

  return (
    <Box w={["280px", "300px", "450px"]} h={["280px", "300px", "600px"]}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        options={mapOptions}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        <CustomMarker
          lat={branches.hyderabad.lat}
          lng={branches.hyderabad.lng}
          text="zinka-me"
        />
      </GoogleMapReact>
    </Box>
  );
};

export default MapSection;
