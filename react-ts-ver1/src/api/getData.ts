import axios from "axios";
import { House } from "../model/house";

const data = axios.create({
  baseURL: "https://wizard-world-api.herokuapp.com",
});

export const getHouse = async () => {
  const response = await data.get("/Houses");
  return response.data;
};

export const getHouseName = async () => {
  const response = await data.get("/Houses");
  console.log(response.data.map((item: House) => item.name));
  return response.data.map((item: House) => item.name);
};

// id 통해서 해당 기숙사 정보 가져오기

export const getHouseById = async (id: string) => {
  const response = await data.get(`/Houses/${id}`);
  return response.data;
};
