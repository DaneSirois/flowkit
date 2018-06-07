// Actions:
import Todo_SET_LIST from './actions/Todo_SET_LIST';
import Todo_ADD_ITEM from './actions/Todo_ADD_ITEM';
import Todo_REMOVE_ITEM from './actions/Todo_REMOVE_ITEM';
import Todo_CHECK_ITEM from './actions/Todo_CHECK_ITEM';
import Todo_UNCHECK_ITEM from './actions/Todo_UNCHECK_ITEM';

// Reducers:
import Todo_items from './reducers/Todo_items';

// Interface:
export default {
  actions: {
    SET_LIST: (list) => Todo_SET_LIST(list),
    ADD_ITEM: (itemId) => Todo_ADD_ITEM(itemId),
    REMOVE_ITEM: (itemId) => Todo_REMOVE_ITEM(itemId),
    CHECK_ITEM: (itemId) => Todo_CHECK_ITEM(itemId),
    UNCHECK_ITEM: (itemId) => Todo_UNCHECK_ITEM(itemId)
  },
  reducers: {
    items: Todo_items
  }
};
