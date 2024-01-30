import axios from "axios";
import { GetNameAndId } from "../model/house";

const data = axios.create({
  baseURL: "https://wizard-world-api.herokuapp.com",
});

export const getHouse = async () => {
  const response = await data.get("/Houses");
  return response.data;
};

export const getHouseName = async () => {
  try {
    const response = await data.get("/Houses");
    return response.data.map((item: GetNameAndId) => ({
      id: item.id,
      name: item.name,
    }));
  } catch (err) {
    console.log(err);
    return [];
  }
};

// id 통해서 해당 기숙사 정보 가져오기

export const getHouseById = async (id: string) => {
  try {
    const response = await data.get(`/Houses/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
