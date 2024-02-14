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

  &::before {
    content: "";
    background-image: url("https://i.namu.wiki/i/A8fxA1A3tOvgty8f6_4Qi-7sfpfaf45qUtLmfo9P9VifI8zYyK-a1OiFiZvbOo0C3hwk7LFygHS_26Sv73hSsrc-jsZ-2HQLnrAQKJhfOFePcfp-VL41tlc73pmLQXMbyGtgaWVU7uR8ShP0DiU0aw.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20%;
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

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
  position: relative;

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
    position: relative; /* 가상 요소를 위해 relative로 설정 */
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%; /* 초기 크기를 크게 설정하여 중앙에서 시작하도록 함 */
      height: 200%;
      background-color: rgba(90, 90, 90, 0.3);
      border-radius: 40%;
      transform: scale(0); /* 초기에는 보이지 않도록 설정 */
      transform-origin: center;
      transition: transform 0.7s ease-out; /* 부드러운 확장 효과 */
      z-index: 0;
    }

    &:hover::before {
      transform: scale(1); /* Hover 시에 원래 크기로 확장 */
    }

    & > p {
      font-family: "SOGANGUNIVERSITYTTF";
      font-size: 1.1rem;
      margin: 0 !important;
      position: relative;
      z-index: 1;
    }
  }
`;
