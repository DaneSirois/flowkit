// Actions:
import App_SET_LOADING from './actions/App_SET_LOADING';
import App_SET_CURRENT_ROUTE from './actions/App_SET_CURRENT_ROUTE';

// Reducers:
import App_loading from './reducers/App_loading';
import App_currentRoute from './reducers/App_currentRoute';

// Interface:
export default {
  actions: {
    SET_LOADING: (bool) => App_SET_LOADING(bool),
    SET_CURRENT_ROUTE: (route) => App_SET_CURRENT_ROUTE(route)
  },
  reducers: {
    loading: App_loading,
    currentRoute: App_currentRoute
  }
};
