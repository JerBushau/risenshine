import "./SunInfo.css";
import { useState } from "react";

interface InfoLabelProps {
  text: string;
  tooltip: string;
  icon: string;
}

function InfoLabel({ text, tooltip, icon }: InfoLabelProps) {
  const [tooltipActive, setTooltipActive] = useState(false);

  return (
    <p>
      <span className="icon-container">
        {tooltipActive && <span className="icon-tooltip">{tooltip}</span>}
        <span
          className="icon"
          onMouseEnter={() => setTooltipActive(true)}
          onMouseLeave={() => setTooltipActive(false)}
        >
          {" "}
          {icon}{" "}
        </span>
      </span>{" "}
      {text}
    </p>
  );
}

export default InfoLabel;
