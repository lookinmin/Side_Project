import React, { useState } from "react";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Demo } from "../components/Demo";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: 1000, // 특정 쿼리 데이터가 캐시에 얼마나 오랫동안 비활성 상태로 남아있을 수 있는지
      staleTime: Infinity,
      // staleTime = 쿼리로 가져온 데이터의 Freshness를 정의
      // 기본값 : 0 == 데이터가 쿼리에서 가져온 직후, 낡은 데이터로 정의됨
      // 특정 데이터가 자주 변하지 않거나, 네트워크 요청을 최소화 시키고 싶다면 staleTime을 길게 정하면 된다.
      // staleTime이 정해진 기간 동안에는 쿼리가 다시 실행되어도 데이터를 새로 가져오지 않는다.
      // 적절한 staleTime을 설정 -> 네트워크 요청을 줄이고 성능의 최적화를 할 수 있음
      // 너무 길면 오래된 데이터만 사용자에게 전달함
    },
  },
});

export const Example = () => {
  const [showDemo, setShowDemo] = useState(true);

  return (
    <StyledContainer>
      <QueryClientProvider client={queryClient}>
        <button
          style={{ width: "fit-content", padding: "2em" }}
          onClick={() => setShowDemo(!showDemo)}
        >
          TOGGLE DEMO
        </button>
        {showDemo && <Demo />}
      </QueryClientProvider>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 3em;
`;
