import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  filteredTodoListState,
  todoListFilterState,
  todoListState,
  todoListStatsState,
} from "../atoms";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import styled from "styled-components";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

let id = 1;
const getId = () => {
  return id++;
};

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((prev) => [
      ...prev, // 기존 todo 기반 추가 형식, updater 형식을 사용해야함
      {
        id: getId(), // 고유 ID 부여 Utility
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue(""); // 초기화
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <StyledAdd>
      <WhiteBorderTextField
        id="outlined-basic"
        value={inputValue}
        variant="outlined"
        onChange={onChange}
        placeholder="WRITE YOUR TODO LIST"
        fullWidth
      />
      <Button
        onClick={addItem}
        variant="outlined"
        size="large"
        style={{ padding: "15px 0" }}
      >
        ADD
      </Button>
    </StyledAdd>
  );
};

const WhiteBorderTextField = styled(TextField)`
  & .MuiOutlinedInput-notchedOutline {
    border-color: #4b7c8f;
  }
`;

const StyledAdd = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: start;
  gap: 15px;
  font-size: 1.2em;
`;

const replaceItemAtIndex = (arr, idx, newValue) => {
  return [...arr.slice(0, idx), newValue, ...arr.slice(idx + 1)];
};

const removeItem = (arr, idx) => {
  return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
};

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);
  // 배열의 요소에 대해 item 값이 배열에 있으면 index를 반환, 없으면 -1

  const editItemText = ({ target: { value } }) => {
    // 리스트의 값 수정
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value, // 새로 입력되는 값으로 수정
    });
    setTodoList(newList); // set
  };

  const toggleItem = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete, // ok거나 not yet으로 전환
    });

    setTodoList(newList);
  };

  const delItem = () => {
    const newList = removeItem(todoList, index); // 제거하고 남은 리스트
    setTodoList(newList); // set
  };

  return (
    <StyledRow
      style={
        item.isComplete
          ? { backgroundColor: "#525252", borderColor: "skyblue" }
          : {}
      }
    >
      <TextField
        variant="standard"
        //label={item.text}
        value={item.text}
        onChange={editItemText}
        fullWidth="true"
        sx={{
          "& .MuiInput-underline:before": { borderBottomColor: "#818181" },
          "& .MuiInput-underline:after": { borderBottomColor: "skyblue" },
        }}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={item.isComplete}
            onChange={toggleItem}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            sx={{
              [`&, &.${checkboxClasses.checked}`]: {
                color: "magenta",
              },
            }}
          />
        }
        label="Complete"
      />
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        color="error"
        onClick={delItem}
      >
        Delete
      </Button>
    </StyledRow>
  );
};

const StyledRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 30px;
  justify-content: start;
  align-items: center;
  border: 1px solid lightgray;
  padding: 1em;
  border-radius: 15px;
`;

const TodoListFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const update = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <Styledrow>
      <p>Filter : </p>
      <FormControl>
        <WhiteBorder
          value={filter}
          onChange={update}
          style={{ color: "#f7f7f7" }}
        >
          <MenuItem value="Show All">Show All</MenuItem>
          <MenuItem value="Show Completed">Completed</MenuItem>
          <MenuItem value="Show Uncompleted">UnCompleted</MenuItem>
        </WhiteBorder>
      </FormControl>
    </Styledrow>
  );
};

const WhiteBorder = styled(Select)`
  & .MuiOutlinedInput-notchedOutline {
    border-color: magenta;
  }
`;

const Styledrow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  align-items: center;
  justify-content: end;
`;

const TodoListStats = () => {
  const { totalNum, completedNum, uncompletedNum, percentage } =
    useRecoilValue(todoListStatsState); // 변수명이 동일해야 온다.

  return (
    <ul
      style={{
        borderTop: "1px solid #838383",
        borderBottom: "1px solid #838383",
        padding: "2em 2em",
      }}
    >
      <li>Total tasks : {totalNum}</li>
      <li>Item Completed : {completedNum}</li>
      <li>Item not Completed : {uncompletedNum}</li>
      <li>Complete Percentage : {percentage}%</li>
    </ul>
  );
};

export const Todo = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <StyledWrapper>
      <h2 style={{ margin: 0 }}>TODO-LIST</h2>

      <TodoListStats />
      <StyledTop>
        <TodoItemCreator />
        <TodoListFilter />
      </StyledTop>

      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </StyledWrapper>
  );
};

const StyledTop = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 1vw;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid #616161;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  padding: 0 3rem;
`;
