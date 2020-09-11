import { SignInData } from '../types';
import { USER_SET } from './actions';

let _dispatch: React.Dispatch<any>;

export const setDispatcher = (value: React.Dispatch<any>) => {
  _dispatch = value;
};

export const setUser = (data: SignInData & { id: number }) => {
  if (_dispatch) {
    _dispatch({ type: USER_SET, payload: data });
  }
};
