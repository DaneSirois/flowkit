import typeStash from 'type-stash';

export default (state = [], action) => {
  switch (action.type) {
    case typeStash.use('Todo_SET_LIST'):
      return action.payload;
    case typeStash.use('Todo_ADD_ITEM'):
      return state.concat(action.payload);
    case typeStash.use('Todo_REMOVE_ITEM'):
      return state.filter((item) => item.id !== action.payload);
    case typeStash.use('Todo_CHECK_ITEM'):
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: true };
        }
        return item;
      });
    case typeStash.use('Todo_UNCHECK_ITEM'):
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: false };
        }
        return item;
      });
    default:
      return state;
  };
};
