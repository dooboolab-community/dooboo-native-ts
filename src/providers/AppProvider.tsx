import React, { useReducer } from 'react';

import { AppContext } from '../contexts';
import { ThemeType } from '../theme';
import { User } from '../types';

const AppConsumer = AppContext.Consumer;

interface Action {
  type: 'reset-user' | 'set-user' | 'change-theme-mode';
  payload: {
    theme: ThemeType;
    user: {
      displayName: string;
      age: number;
      job: string;
    };
  };
}

interface Props {
  children?: React.ReactElement;
}

export interface State {
  user: User;
  theme: ThemeType;
}

const initialState: State = {
  theme: ThemeType.LIGHT,
  user: {
    displayName: '',
    age: 0,
    job: '',
  },
};

const reducer = (state: State, action: Action): State => {
  // prettier-ignore
  switch (action.type) {
  case 'change-theme-mode':
    return { ...state, theme: action.payload.theme };
  case 'reset-user':
    return { ...state, user: initialState.user };
  case 'set-user':
    return { ...state, user: action.payload.user };
  }
};

function AppProvider(props: Props): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export { AppConsumer, AppProvider, AppContext };
