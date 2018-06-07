import { RI } from 'npm-redux-interfaces';

// Import the interfaces:
import App_interface from './App/App_index';
import Todo_interface from './Todo/Todo_index';

// Mount the interfaces:
RI.mountInterface('app', App_interface);
RI.mountInterface('todo', Todo_interface);

// Export the root_reducer:
export const rootReducer = RI.getRootReducer();
