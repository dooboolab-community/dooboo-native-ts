import React, { useReducer } from 'react';
import { AppContext } from '../contexts';
import { IUser } from '../types';

const AppConsumer = AppContext.Consumer;

interface IAction {
  type: 'reset-user' | 'set-user' | 'change-theme-mode';
  payload: any;
}

interface IProps {
  navigation?: any;
  children?: any;
}

export interface IState {
  user: IUser;
}

const initialState: IState = {
  user: {
    displayName: '',
    age: 0,
    job: '',
  },
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'reset-user':
      return { ...state, user: initialState.user };
    case 'set-user':
      return { ...state, user: action.payload };
    case 'change-theme-mode':
      return { ...state, theme: action.payload.theme };
    default:
      return null;
  }
};

function AppProvider(props: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppConsumer, AppProvider, AppContext };
