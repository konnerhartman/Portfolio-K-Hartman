import { useReducer } from 'react';
import { UPDATE_PROJECTS } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PROJECTS:
      return {
        ...state,
        projects: [...action.projects],
      };

    default:
      return state;
  }
};

export function useProjectReducer(initialState) {
  return useReducer(reducer, initialState);
}
