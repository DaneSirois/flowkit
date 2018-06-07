import typeStash from 'type-stash';

export default (itemId) => {
  return {
    type: typeStash.use('Todo_UNCHECK_ITEM'),
    payload: itemId
  }
};
