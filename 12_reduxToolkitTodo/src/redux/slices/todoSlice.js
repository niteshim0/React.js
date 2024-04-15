import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos.map((todo) => (todo.id === id ? (todo.text = text) : todo.text));
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleComplete: (state, action) => {
      const { id } = action.payload;
      state.todos.map((todo) => (todo.id === id ? (todo.completed = !todo.completed) : todo.completed));
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
