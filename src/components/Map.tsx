import ReactDOMServer from "react-dom/server";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { Location } from "../types/GeoTypes";
import { ReactComponent as NotFound } from "../assets/Oops.svg";
import { ReactComponent as Infinity } from "../assets/Infinity.svg";
import { ReactComponent as LocationArr } from "../assets/LocationArr.svg";
import styled from "styled-components";
type TLocationProps = {
  location: Location | undefined;
  isError: { code: number; messages: string } | null;
  isLoading: boolean;
};

const GetIcon = () => {
  return L.divIcon({
    html: ReactDOMServer.renderToString(<LocationArr />),
    iconSize: [46, 56],
    iconAnchor: [12, 40],
  });
};
const Map = ({ location, isError, isLoading }: TLocationProps) => {
  const errorHappend = isError ? <NotFound /> : null;
  const loading = isLoading ? <Infinity /> : null;

  return (
    <Wrapper>
      {loading}
      {errorHappend}
      {location && (
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution=""
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            icon={GetIcon()}
            position={[location.lat, location.lng]}
          ></Marker>
        </MapContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  svg {
    width: inherit;
    height: inherit;
  }
  .leaflet-bar {
    display: none;
  }
  .leaflet-container {
    height: 100%;
    width: 100%;
  }
  .leaflet-marker-icon {
    background: transparent;
    border: none
  }
`;

export default Map;
