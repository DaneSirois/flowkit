import typeStash from 'type-stash';

export default (state = true, action) => {
  switch(action.type) {
    case typeStash.use('App_SET_LOADING'):
      return action.payload;
    default:
      return state;
  };
};
