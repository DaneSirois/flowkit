import typeStash from 'type-stash';

export default (bool) => {
  return {
    type: typeStash.use('App_SET_LOADING'),
    payload: bool
  }
};
