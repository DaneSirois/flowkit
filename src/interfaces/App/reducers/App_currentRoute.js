import typeStash from 'type-stash';

export default (state = '/', action) => {
  switch(action.type) {
    case typeStash.use('App_SET_CURRENT_ROUTE'):
      return action.payload;
    default:
      return state;
  };
};
