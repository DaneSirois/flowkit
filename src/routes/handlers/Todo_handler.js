import { RI } from 'npm-redux-interfaces';

export default {
  handleEnter: (_nextState) => {
    RI.todo.SET_LIST([
      { id: 1, task: 'Set your own theme in "@src/theme.css"', completed: false },
      { id: 2, task: 'Remove loading simulator in "@src/index.js"', completed: false },
      { id: 3, task: 'Remove or modify "LocalStorage_middleware.js" in "@middleware"', completed: false },
      { id: 4, task: 'Remove "Todo_handler.js" in "@src/routes/handlers"', completed: false }
    ]);
  }
};
