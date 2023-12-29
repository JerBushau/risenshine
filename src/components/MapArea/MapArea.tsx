import "./MapArea.css";
import { Map, Marker } from "pigeon-maps";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { sunClient } from "@/client/sunClient";
import { SunInfoResponse } from "@/types";

interface MapAreaProps {
  setSunInfo: Dispatch<SetStateAction<SunInfoResponse>>;
}

function MapArea({ setSunInfo }: MapAreaProps) {
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    38.252526923276655, -85.7569432454018,
  ]);
  const [markerAnchor, setMarkerAnchor] = useState<[number, number]>(mapCenter);

  useEffect(() => {
    const getInitData = async () => {
      const initData = await sunClient(markerAnchor);
      setSunInfo(initData);
    };

    getInitData();
  }, []);

  return (
    <div className="map-container">
      <Map
        center={mapCenter}
        zoom={11}
        onClick={async (data) => {
          setMarkerAnchor(data.latLng);
          const sunInfo = await sunClient(data.latLng);
          setSunInfo(sunInfo);
        }}
      >
        <Marker anchor={markerAnchor} width={50} />
      </Map>
    </div>
  );
}

export default MapArea;
