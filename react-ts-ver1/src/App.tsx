import React, { useEffect, useState } from "react";
import "./App.css";
import { Store } from "./Components/Store";
import { Address, Restaurant } from "./model/resturant";
import { BestMenu } from "./Components/BestMenu";
import styled from "styled-components";
import { Introduce } from "./Components/Introduce";
// React.FC == 해당 컴포넌트는 React Function Component를 리턴합니다.

let data: Restaurant = {
  name: "서진이네 파스타집",
  category: "Italian",
  address: {
    city: "청주 개신동",
    detail: "충북대학교 근처",
    zipCode: 23425634,
  },
  menu: [
    {
      name: "rose pasta",
      price: 20000,
      category: "PASTA",
    },
    {
      name: "steak",
      price: 50000,
      category: "STEAK",
    },
    {
      name: "wine",
      price: 15000,
      category: "DRINK",
    },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  const showBestMenuName = (name: string) => {
    return name;
  };

  useEffect(() => {
    setMyRestaurant(data);
    // 제네릭
  }, [data]);

  return (
    <div className="App">
      <StyledDiv>
        <Introduce name={myRestaurant.name} address={myRestaurant.address} />
        <BestMenu
          name="불고기피자"
          price={10000}
          showBestMenuName={showBestMenuName}
        />
        <Store info={data} changeAddress={changeAddress} />
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  padding: 10px;
  align-items: center;
`;

export default App;
