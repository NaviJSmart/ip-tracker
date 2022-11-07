import { IGeoAPI } from "../types/GeoTypes";
import { ReactComponent as Infinity } from "../assets/Infinity.svg";
import styled from "styled-components";

type TInfoProps = {
  info: IGeoAPI | null;
  isError: {
    code: number;
    messages: string;
  } | null;
  isLoading: boolean;
};

const Info = ({ info, isError, isLoading }: TInfoProps) => {
  console.log(isLoading);
  const ErrorHappend = isError ? <div>{isError.messages}</div> : null;

  return (
    <Wrapper>
      {isError ? (
        ErrorHappend
      ) : (
        <>
          <div className="content">
            <h4>ip adress</h4>
            {isLoading ? <Infinity /> : <p>{info?.ip}</p>}
          </div>
          <div className="content">
            <h4>location</h4>
            {isLoading ? (
              <Infinity />
            ) : (
              <p>
                {info?.location.country}, {info?.location.city}
              </p>
            )}
          </div>
          <div className="content">
            <h4>timezone</h4>
            {isLoading ? <Infinity /> : <p>{info?.location.timezone}</p>}
          </div>
          <div className="content">
            <h4>isp</h4>
            {isLoading ? <Infinity /> : <p>{info?.isp}</p>}
          </div>
        </>
      )}
    </Wrapper>
  );
};
export default Info;

const Wrapper = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  padding: 30px;
  box-shadow: 0px 5px 19px -10px rgba(0, 0, 0, 0.75);
  .content {
    
    width: 100%;
    padding: 0 20px 0 10px;
    min-height: 100%;
    svg {
      background: transparent;
      height: 100px;
      margin-left: -10px;
      @media screen and (max-width: 900px) {
        margin: -15px;
        height: 70px;
      }
    }
    h4 {
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 2px;
      color: #989898;
    }
    p {
      font-size: 22px;
      font-weight: 600;
      padding-top: 15px;
      padding-bottom: 10px;
      letter-spacing: 1px;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 15px 30px;
    .content {
      min-height: 0px;
      width: 250px;
      padding: 5px 45px 5px 30px;
      text-align: center;
      h4 {
        font-size: 10px;
      }
      p {
        letter-spacing: 1px;
        padding-top: 5px;
        font-size: 18px;
      }
    }
  }
`;
