import { useState } from "react";
import SunInfo from "./components/SunInfoArea/SunInfo";
import MapArea from "./components/MapArea/MapArea";
import { SunInfoResponse } from "./types";
import "./App.css";

function App() {
  const [sunInfo, setSunInfo] = useState<SunInfoResponse>({
    rise: "none",
    set: "none",
    tzid: "none",
  });

  return (
    <>
      <SunInfo sunInfo={sunInfo} />
      <MapArea setSunInfo={setSunInfo} />
    </>
  );
}

export default App;
