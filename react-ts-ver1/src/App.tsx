import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { MainPage } from "./pages/MainPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import { House } from "./pages/House";
// React.FC == 해당 컴포넌트는 React Function Component를 리턴합니다.

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 1000, // react-query에선 cacheTime, @tanstack 에선 gcTime
    },
  },
});

const App: React.FC = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen /> */}
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/house/:houseID" element={<House />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default App;
