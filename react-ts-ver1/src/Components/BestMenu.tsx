import React from "react";
import { Menu } from "../model/resturant";
import styled from "styled-components";

interface Ownprops extends Omit<Menu, "category"> {
  showBestMenuName(name: string): string;
}

// Omit == interface(type)에서 특정 값 제외

export const BestMenu: React.FC<Ownprops> = ({
  name,
  price,
  showBestMenuName,
}) => {
  return <div>{name}</div>;
};
