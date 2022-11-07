import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../assets/arrow.svg";


type TSubmitProp = {
  submitParam: React.Dispatch<React.SetStateAction<string>>;
};

const InputSearch = ({ submitParam }: TSubmitProp): JSX.Element => {
  const [term, setTerm] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitParam(term)
    setTerm("");
  };

  return (
    <InputWrapper>
      <form onSubmit={onSubmitHandler}>
        <div className="input_search">
          <InputUI
            type="text"
            placeholder="Search for any IP adress or domain"
            onChange={onChangeHandler}
            value={term}
          />
          <Button type="submit">
            <Arrow />
          </Button>
        </div>
      </form>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  .input_search {
    display: flex;
    align-items: center;
    padding-bottom: 40px;
    @media screen and (max-width: 900px) {
      padding-bottom: 15px;
    }
  }
`;

const InputUI = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  border: none;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  cursor: pointer;
  &::placeholder {
    font-size: 16px;
  }
  @media screen and (max-width: 900px) {
    &::placeholder {
      font-size: 14px;
    }
  }
`;

const Button = styled.button`
  background-color: #000000;
  padding: 18px;
  border: none;
  cursor: pointer;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default InputSearch;
