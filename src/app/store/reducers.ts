import * as _ from 'lodash';

import * as actions from './actions';
import { StoreData } from './store-data';
import { UiState } from './ui-state';

type Action = actions.All;

export function uiReducer(state: UiState, action: Action): UiState {
  return state;
}

export function storeReducer(state: StoreData, action: Action): StoreData {
  switch (action.type) {
    case actions.LOAD_USER_THREADS: {
      const newState = Object.assign({}, state);
      const { payload } = action;
      newState.messages = _.keyBy(payload.messages, 'id');
      newState.threads = _.keyBy(payload.threads, 'id');
      newState.participants = _.keyBy(payload.participants, 'id');
      return newState;
    }
    default: {
      return state;
    }
  }
}
