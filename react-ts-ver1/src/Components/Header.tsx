import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ImgHandler } from "./ImgHandler";
import { useQuery } from "react-query";
import { getHouseName } from "../api/getData";

export const Header: React.FC = () => {
  const [nameArray, setNameArray] = useState<string[]>([]);

  const { data, isLoading, error } = useQuery<string[]>(["house"], () =>
    getHouseName()
  );

  useEffect(() => {
    if (data) {
      setNameArray(data);
    }
  }, [data]);

  if (isLoading) return <div>now in Loading...</div>;
  if (error) return <div>ERROR OCCURED</div>;

  return (
    <StyledHeader>
      {nameArray.map((item) => {
        return (
          <menu key={item}>
            <ImgHandler name={item} height="33px" />
            {item}
          </menu>
        );
      })}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: #353535;

  & > menu {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    font-weight: 500;
    font-size: 1.3rem;
    cursor: pointer;
    align-items: center;
    padding: 0 !important;
    font-family: "KCCPakKyongni";
  }

  & > menu:nth-child(1):hover {
    color: #b8161c;
  }

  & > menu:nth-child(2):hover {
    color: #008080;
  }
  & > menu:nth-child(3):hover {
    color: #f6e80f;
  }
  & > menu:nth-child(4):hover {
    color: #2e8b57;
  }
`;
