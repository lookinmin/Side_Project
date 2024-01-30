import React, { useState, useEffect } from "react";
import { ImgHandler } from "../Components/ImgHandler";
import styled from "styled-components";
import { getHouseById } from "../api/getData";
import { HouseData } from "../model/house";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const House: React.FC = () => {
  const { houseID } = useParams();

  const { data, isLoading, error } = useQuery<HouseData>(
    ["houseDetail", houseID],
    () => getHouseById(houseID!),
    {
      enabled: !!houseID, // houseID가 있을 때만 쿼리를 실행합니다.
    }
  );
  if (isLoading) return <div>now in Loading...</div>;
  if (error) return <div>ERROR OCCURED</div>;

  if (data) {
    return (
      <StyledWrapper>
        <h2>Welcome {data.name}</h2>
        <StyledGrid>
          <ImgHandler name={data.name} height="150px" />
          <InfoArea>
            <p>Founder : {data.founder}</p>
            <p>Animal : {data.animal}</p>
            <p>Color : {data.houseColours}</p>
            <p>Element : {data.element}</p>
          </InfoArea>
          <InfoArea>
            <p style={{ fontSize: "1.8rem" }}>Heads History</p>
            {data.heads.reverse().map((item, idx) => {
              return (
                <p key={item.id}>
                  {idx + 1}. {item.firstName} {item.lastName}
                </p>
              );
            })}
          </InfoArea>

          <InfoArea>
            <p style={{ fontSize: "1.6rem" }}>{data.name}'s Traits</p>
            <TextGrid>
              {data.traits.map((item, idx) => {
                return (
                  <p key={item.id}>
                    {idx + 1}. {item.name}
                  </p>
                );
              })}
            </TextGrid>
          </InfoArea>
        </StyledGrid>
        <InfoArea style={{ alignItems: "center" }}>
          <p>Room : {data.commonRoom}</p>
          <p>Ghost : {data.ghost}</p>
        </InfoArea>
      </StyledWrapper>
    );
  }

  return <>ERR</>;
};

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: clamp(750px, 90%, 1100px);
  align-items: center;
  padding: 4vh 0;
  align-self: center;
  gap: 7vh;

  & > h2 {
    margin: 0 !important;
    font-family: "KCCPakKyongni";
    font-size: 3rem;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 3vw;
  width: 100%;
  row-gap: 5vh;
  justify-items: center;
  align-items: center;
`;

const InfoArea = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;

  & > p {
    margin: 0 !important;
    font-family: "KCCPakKyongni";
    font-size: 1.4rem;
  }
`;

const TextGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 15px;
  column-gap: 25px;
  & > p {
    margin: 0 !important;
    font-family: "KCCPakKyongni";
    font-size: 1.3rem;
  }
`;
