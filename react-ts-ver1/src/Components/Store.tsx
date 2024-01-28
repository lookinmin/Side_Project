import React from "react";
import { Address, Restaurant } from "../model/resturant";

interface OwnProps {
  info: Restaurant;
  changeAddress(address: Address): void;
  // 함수의 리턴 타입
}

export const Store: React.FC<OwnProps> = ({ info }) => {
  return <div>{info.name}</div>;
};
