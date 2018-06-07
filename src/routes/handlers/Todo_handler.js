import { RI } from 'npm-redux-interfaces';

export default {
  handleTodoEnter: (_nextState) => {
    RI.todo.SET_LIST([
      { id: 1, task: 'Remove "Todo_handler.js" in "@src/routes/handlers"', completed: false }
      { id: 2, task: 'Remove or modify "LocalStorage_middleware.js" in "@middleware/"', completed: false }
    ]);
  }
};
