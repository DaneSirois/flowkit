import typeStash from 'type-stash';

export default (route) => {
  return {
    type: typeStash.use('App_SET_CURRENT_ROUTE'),
    payload: route
  };
};
