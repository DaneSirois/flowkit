import typeStash from 'type-stash';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case typeStash.use('YOUR_ACTION_HERE'):
      // do something
      return next(action);
    break;
    default:
      return next(action);
  }
};
