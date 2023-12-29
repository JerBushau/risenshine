import "./SunInfo.css";
import InfoLabel from "./InfoLabel";
import { SunInfoResponse } from "@/types";

interface sunInfoProps {
  sunInfo: SunInfoResponse;
}

function SunInfo({ sunInfo }: sunInfoProps) {
  return (
    <div className="sun-info-container">
      <div className="location-header">
        <InfoLabel tooltip={"Time Zone"} text={sunInfo.tzid} icon={"🕐"} />
        <InfoLabel
          tooltip={"Latitude/Longitude"}
          text={sunInfo.latlng.join(", ")}
          icon={"🗺️"}
        />
        <InfoLabel tooltip={"Sun Rise"} text={sunInfo.rise} icon={"🌅"} />
        <InfoLabel tooltip={"Sun Set"} text={sunInfo.set} icon={"🌇"} />
      </div>
    </div>
  );
}

export default SunInfo;
