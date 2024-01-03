## React-Query

@tanstack/react-Query with React TS , React-Query with React JS

<hr />

### TODO-LIST with React-query - 1 no Axios

1. QueryClient 객체 생성 in [ pages > Example.tsx ] (parent)

```
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // 화면이 잡혔을 때, refetch 하는 지 여부
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
```

2. useQueryClient() & useQuery() 객체 생성 in [ components > Demo.tsx ] (child Component)

```
  const queryClient = useQueryClient();

  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(search),
    queryKey: ["todos", { search }], // key로 데이터를 캐싱함
  });
  // todos 라는 이름으로 data 받음
```

3. Mutation 함수 : Function() 동작 in [ components > Demo.tsx ] (child Component)

```
  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      // todos라는 key를 가진 query가 re-fetch 되어야 함
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isLoading) {
    return <div>...is Loading</div>;
  }

  // 버튼 클릭시 addTodoMutation() 함수 실행
    <button
        onClick={async () => {
            try {
            await addTodoMutation({ title });
            setTitle("");
            } catch (err) {
            console.log(err);
            }
        }}
    >
    ADD
    </button>
  // todos data 출력
    {todos?.map((todo) => {
      return <TodoCard key={todo.id} todo={todo} />;
    })}
```

4. [ api > index.ts ] : TODO List fetch & add TODO

```
export const fetchTodos = async (query = ""): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // 강제적으로 1초 기다리기 -> isLoading 출력

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );

  return [...filteredTodos];
};

// add TODO

export const addTodo = async (todo: Pick<Todo, "title">): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newTodo = {
    id: todos.length + 1,
    title: todo.title,
    completed: false,
  };

  // Todo is stored in memory and cleared on page reload
  todos.push(newTodo);

  return newTodo;
};
```

<hr />

1. queryClient 생성 시, default options들에 대해 공부해 볼 필요성
2. react-query의 queryKey에 데이터를 캐싱하고 queryFn의 함수를 호출한다.


<hr />



### TODO-LIST with React-query - 2 with Axios

#### ReactQueryDevtools 사용해 볼 것

1. JSON Data -> localhost : 3500 OPEN [data > db.json] = JSON-SERVER

```
npm i json-server -g
json-server -w data/db.json -p 3500
```

2. Axios로 Data fetching [src > api > todosApi.js]

```
import axios from "axios";

const todosApi = axios.create({
  baseURL: "http://localhost:3500",
});

export const getTodos = async () => {
  const response = await todosApi.get("/todos");
  return response.data;
};

export const addTodo = async (todo) => {
  return await todosApi.post("/todos", todo);
};

export const updateTodo = async (todo) => {
  return await todosApi.patch(`/todos/${todo.id}`, todo);
};

export const deleteTodo = async ({ id }) => {
  return await todosApi.delete(`/todos/${id}`, id);
};

export default todosApi;
```

3. QueryClient 객체 생성 in [ pages > Todo.jsx ] (parent)

```
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

```

4. useQueryClient(), useQuery() 객체 생성 in [ components > TodoList.jsx ] (child)

```
const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery("todos", getTodos, {
    select: (data) => data.sort((a, b) => b.id - a.id),
  });
```

5. CRUD에 해당하는 Mutation 함수 선언

```
  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      // cache 유효성 판단 -> refetch
      queryClient.invalidateQueries("todos");
    },
  });

  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      // cache 유효성 판단 -> refetch
      queryClient.invalidateQueries("todos");
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      // cache 유효성 판단 -> refetch
      queryClient.invalidateQueries("todos");
    },
  });
```
