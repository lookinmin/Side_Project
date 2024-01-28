// 타입은 model 폴더내에
// 타입은 type vs interface

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type OnlyName = Pick<Restaurant, "name">;
// 이름 속성값만 가져오는 type

export type Address = {
  city: string;
  detail: string;
  zipCode?: number; // Omit 대용 가능, 코드 작성에 주의해야함
};

export type AddressWithoutZip = Omit<Address, "zipCode">;
// zipCode는 제외한 address 타입

export type Menu = {
  name: string;
  price: number;
  category: string;
};

// type, interface 지정은 Pascal Case

// API 콜 Type 지정
export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type RestaurantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;
