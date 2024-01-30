import React from "react";
import styled from "styled-components";
import { FaInstagram, FaGithub } from "react-icons/fa6";
import { SiVelog } from "react-icons/si";

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div>
        <FaInstagram
          onClick={() => window.open("https://www.instagram.com/lookin_min/")}
          size={25}
          style={{ cursor: "pointer" }}
          title="@lookin_min 인스타그램"
        />
        <FaGithub
          onClick={() => window.open("https://github.com/lookinmin")}
          size={25}
          style={{ cursor: "pointer" }}
          title="@lookinmin GitHub"
        />
        <SiVelog
          onClick={() => window.open("https://velog.io/@lookin_min")}
          size={25}
          style={{ cursor: "pointer" }}
          title="@lookin_min.log"
        />
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
    gap: 7vw;
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
