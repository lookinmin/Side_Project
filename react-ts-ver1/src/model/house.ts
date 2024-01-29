export interface House {
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
