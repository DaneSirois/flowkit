import typeStash from 'type-stash';

export default (itemId) => {
  return {
    type: typeStash.use('Todo_CHECK_ITEM'),
    payload: itemId
  }
};
