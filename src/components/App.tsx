import { useState } from "react";
import styled from "styled-components";
import bgImage from "../assets/pattern-bg.png";
import useFetchIP from "../hooks/useFetchIP";
import Info from "./Info";
import InputSearch from "./InputSearch";
import Map from "./Map";

function App() {
  const [params, setParams] = useState("");
  const { data, isError,loading } = useFetchIP(params);

  return (
    <>
      <UpperSection>
        <h1>IP Adress Tracker</h1>
        <InputSearch submitParam={setParams}/>
        <Info info={data} isError={isError} isLoading={loading}/>
      </UpperSection>
      <LowerSection>
        <Map location={data?.location} isError={isError} isLoading={loading}/>
      </LowerSection>
    </>
  );
}

export default App;

const UpperSection = styled.div`
  padding: 0 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: url(${bgImage});
  background-size: cover;
  height: 35vh;
  box-shadow: 0px 5px 19px -3px rgba(218, 160, 160, 0.75);
  z-index: 1000;

  h1 {
    padding: 25px 0;
    color: #ffffff;
    @media screen and (max-width: 900px) {
      font-size: 24px;
      font-weight: 400;
      padding: 15px 0;
    }
  }
`;

const LowerSection = styled.div`
  height: 65vh;
`;
