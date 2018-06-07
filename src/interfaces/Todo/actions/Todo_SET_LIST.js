import typeStash from 'type-stash';

export default (list) => {
  return {
    type: typeStash.use('Todo_SET_LIST'),
    payload: list
  }
};
