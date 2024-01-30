import React, { Suspense, useEffect, useState } from "react";
import { getHouseName } from "../api/getData";
import { useQuery } from "react-query";
import styled from "styled-components";
import { ImgHandler } from "../Components/ImgHandler";
import { useNavigate } from "react-router-dom";
import { GetNameAndId } from "../model/house";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    data = [],
    isLoading,
    error,
  } = useQuery<GetNameAndId[]>(["house"], () => getHouseName());

  if (isLoading) return <div>now in Loading...</div>;
  if (error) return <div>ERROR OCCURED</div>;

  console.log(data);

  return (
    <StyledDiv>
      <h2>Choose Your House</h2>
      <HouseGrid>
        {data.map((item) => {
          return (
            <div key={item.id} onClick={() => navigate(`/house/${item.id}`)}>
              <ImgHandler name={item.name} height="130px" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </HouseGrid>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 5vh;
  padding: 10px;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 70vh;

  & > h2 {
    font-family: "SOGANGUNIVERSITYTTF";
    font-weight: 500;
    color: #acacac;
  }
`;

const HouseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2vw;
  width: 95%;

  & > div {
    width: 100%;
    border: 1px solid #787878;
    border-radius: 15px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 3vh;
    cursor: url("/cursor.cur") 20 30, auto;
    padding: 3vh 0;

    & > p {
      font-family: "SOGANGUNIVERSITYTTF";
      font-size: 1.1rem;
      margin: 0 !important;
    }
  }
`;
