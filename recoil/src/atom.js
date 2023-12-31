import { atom } from "recoil";

export const countState = atom({
  key: "count", // atom의 이름, 구분되어야 함
  default: 10,
});
