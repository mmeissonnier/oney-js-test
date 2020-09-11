import { USER_SET } from './actions';
import { Store, Action } from '../types';

export const reducer = (state: Store, action: Action) => {
  switch (action.type) {
    case USER_SET: {
      console.log('set user', action);
      if (action.payload.id && action.payload.email && action.payload.name) {
        return {
          user: {
            id: action.payload.id,
            email: action.payload.email,
            name: action.payload.name,
          },
        };
      }
      return state;
    }
    default:
      return state;
  }
};
