export interface HouseData {
  animal: string;
  commonRoom: string;
  element: string;
  founder: string;
  ghost: string;
  heads: Head[];
  houseColours: string;
  id: string;
  name: string;
  traits: Trait[];
}

export type Head = {
  id: string;
  firstName: string;
  lastName: string;
};

export type Trait = {
  id: string;
  name: string;
};

export type GetNameAndId = Pick<HouseData, "id" | "name">;
