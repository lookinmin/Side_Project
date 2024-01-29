import React from "react";
import styled from "styled-components";

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div>
        <a href="https://www.instagram.com/lookin_min/">@lookin_min</a>
        <a href="https://velog.io/@lookin_min">@velog</a>
        <a href="https://github.com/lookinmin">@GitHub</a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: #353535;
  position: absolute;
  bottom: 0px;
  width: 100%;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: row;
    gap: 10vw;
    padding: 2vh 0;

    & > a {
      text-decoration: none;
      color: #f7f7f7;
      cursor: pointer;
      &:hover {
        color: #77d8ff !important;
      }
    }
  }
`;
