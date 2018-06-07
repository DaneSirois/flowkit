import typeStash from 'type-stash';

export default (itemId) => {
  return {
    type: typeStash.use('Todo_REMOVE_ITEM'),
    payload: itemId
  }
};
