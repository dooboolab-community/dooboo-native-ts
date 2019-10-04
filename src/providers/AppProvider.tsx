import React, { useReducer } from 'react';

import { User } from '../types';
import createCtx from '../utils/createCtx';

interface Context {
  state: State;
  setUser: (user: User) => void;
  resetUser: () => void;
}
const [useCtx, Provider] = createCtx<Context>();

enum ActionType {
  ResetUser = 'reset-user',
  SetUser = 'set-user',
}

export interface State {
  user: User;
}

const initialState: State = {
  user: {
    displayName: '',
    age: 0,
    job: '',
  },
};

interface Action {
  type: ActionType;
  payload: State;
}

interface Props {
  children?: React.ReactElement;
}

type Reducer = (state: State, action: Action) => State;

const setUser = (dispatch: React.Dispatch<Action>) => (user: User): void => {
  dispatch({
    type: ActionType.SetUser,
    payload: { user },
  });
};

const resetUser = (dispatch: React.Dispatch<Action>) => (): void => {
  dispatch({
    type: ActionType.ResetUser,
    payload: initialState,
  });
};

// prettier-ignore
const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'reset-user':
  case 'set-user':
    return { ...state, user: action.payload.user };
  default:
    return state;
  }
};

function AppProvider(props: Props): React.ReactElement {
  const [state, dispatch] = useReducer<Reducer>(reducer, initialState);

  const actions = {
    setUser: setUser(dispatch),
    resetUser: resetUser(dispatch),
  };

  return <Provider value={{ state, ...actions }}>{props.children}</Provider>;
}

export { useCtx as useAppContext, AppProvider };
