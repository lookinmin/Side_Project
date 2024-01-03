import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { TodoList } from "../components/TodoList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 1000, // react-query에선 cacheTime, @tanstack 에선 gcTime
    },
  },
});

export const Todo = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <TodoList />
      </QueryClientProvider>
    </div>
  );
};
