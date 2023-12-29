import { SunInfoResponse } from "@/types";
import tz from "tz-lookup";

export async function sunClient(
  latLng: [number, number]
): Promise<SunInfoResponse> {
  const tzid = tz(latLng[0], latLng[1]);
  const resp = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${latLng[0]}&lng=${latLng[1]}&tzid=${tzid}`
  );
  const data = await resp.json();

  return {
    tzid: tzid.replace("_", " "),
    rise: data.results.sunrise,
    set: data.results.sunset,
    latlng: latLng,
  };
}
