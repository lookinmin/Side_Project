import React from "react";
import styled from "styled-components";
import { Restaurant } from "../model/resturant";

interface OwnProps extends Pick<Restaurant, "name" | "address"> {}

export const Introduce: React.FC<OwnProps> = ({ name, address }) => {
  return (
    <IntroDiv>
      <h3>{name}</h3>
      <p>{address.city}</p>
      <p>{address.detail}</p>
    </IntroDiv>
  );
};

const IntroDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
