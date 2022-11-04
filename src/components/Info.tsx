import styled from "styled-components";

interface Ititle {
  title: string;
}

const arr = ["ip adress", "location", "timezone", "isp"];

const Info = () => {
  return (
    <Wrapper>
      {arr.map((item: string) => (
        <DisplayInfo title={item} />
      ))}
    </Wrapper>
  );
};
export default Info;

const DisplayInfo = ({ title }: Ititle) => {
  return (
    <div className="content">
      <h4>{title}</h4>
      <p>SpacX Starlik</p>
    </div>
  );
};

const Wrapper = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  padding: 30px;
  .content {
    width: 200px;
    padding: 0 10px;
    min-height: 100%;

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
