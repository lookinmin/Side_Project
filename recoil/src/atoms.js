import { atom, selector } from "recoil";

export const countState = atom({
  key: "count", // atom의 이름, 구분되어야 함
  default: 10,
});

export const todoListState = atom({
  key: "todo",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoFilter",
  default: "Show All",
  // Show All, Show Completed, Show Uncompleted
});

// selector - fliter
// 파생된 상태 = 주어진 상태를 수정하는 함수에 전달된 상태의 결과물

export const filteredTodoListState = selector({
  key: "filteredTodos", // 고유한 식별자
  get: ({ get }) => {
    const filter = get(todoListFilterState); // todoListFilterState, todoListState 중 하나의 상태라도 변하면
    const list = get(todoListState); // 재실행, todo page는 re-render

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

// selector - ListStat

export const todoListStatsState = selector({
  key: "listStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    var totalNum = todoList.length;
    var completedNum = todoList.filter((item) => item.isComplete).length;

    // isComplete 상태인 것들의 개수를 누적해서 더해줌
    var uncompletedNum = totalNum - completedNum;
    var percentage =
      totalNum === 0 ? 0 : Math.round((completedNum / totalNum) * 100);

    return {
      totalNum,
      completedNum,
      uncompletedNum,
      percentage,
    };
  },
});
