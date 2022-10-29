import styled from "styled-components";
import bgImage from "../assets/pattern-bg.png";
import InputSearch from "./InputSearch";
import Map from "./Map";

function App() {
  return (
    <>
      <UpperSection>
        <h1>IP Adress Tracker</h1>
        <InputSearch />
      </UpperSection>
      <LowerSection>
        <Map />
      </LowerSection>
    </>
  );
}

export default App;

const UpperSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: url(${bgImage});
  background-size: cover;
  height: 35vh;
  box-shadow: 0px 5px 19px -3px rgba(0, 0, 0, 0.75);
  z-index: 1000;

  h1 {
    padding: 25px 0;
    color: #ffffff;
  }
`;

const LowerSection = styled.div`
  height: 65vh;
`;
