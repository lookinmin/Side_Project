import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ImgHandler } from "./ImgHandler";
import { useQuery } from "react-query";
import { getHouseName } from "../api/getData";
import { useNavigate } from "react-router-dom";
import { GetNameAndId } from "../model/house";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const {
    data = [],
    isLoading,
    error,
  } = useQuery<GetNameAndId[]>(["head"], () => getHouseName());

  if (isLoading) return <div>now in Loading...</div>;
  if (error) return <div>ERROR OCCURED</div>;

  return (
    <StyledHeader>
      <menu onClick={() => navigate("/")}>
        <img
          alt="호그와트"
          height="33px"
          src="https://i.namu.wiki/i/qMLLC4S0FjxRioypSBSr4n_0oRu6C6_JR0p22tfSIsIN4J51R7uY8rmTOdMzSbbVXuZcGGKFkDcoslIMnBxfzFej5uZqij0svfAf2PqJAke1N-bqjA4hxlh5nICqiNNxWLldfGUfNdHAliaUy4ayXQ.webp"
        />
        Hogwarts
      </menu>
      {data.map((item) => {
        return (
          <menu key={item.id} onClick={() => navigate(`/house/${item.id}`)}>
            <ImgHandler name={item.name} height="33px" />
            {item.name}
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
    cursor: url("/cursor.cur") 20 30, auto;
    align-items: center;
    padding: 0 !important;
    font-family: "KCCPakKyongni";
  }

  & > menu:nth-child(1):hover {
    color: #8f8f8f;
  }

  & > menu:nth-child(2):hover {
    color: #b8161c;
  }

  & > menu:nth-child(3):hover {
    color: #008080;
  }
  & > menu:nth-child(4):hover {
    color: #f6e80f;
  }
  & > menu:nth-child(5):hover {
    color: #2e8b57;
  }
`;
