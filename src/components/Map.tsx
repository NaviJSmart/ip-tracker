import { MapContainer, TileLayer } from "react-leaflet";
import styled from "styled-components";
const Map = () => {
  return (
    <Wrapper>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`;

export default Map;
