import typeStash from 'type-stash';

export default (item) => {
  return {
    type: typeStash.use('Todo_ADD_ITEM'),
    payload: item
  };
};
