import { Action } from '@ngrx/store';

import { AllUserData } from '../../../shared/to/all-user-data';

export const LOAD_USER_THREADS = 'LOAD_USER_THREADS';
export const USER_THREADS_LOADED = 'USER_THREADS_LOADED';

export class LoadUserThreadsAction implements Action {
  readonly type = LOAD_USER_THREADS;
}

export class UserThreadsLoadedAction implements Action {
  readonly type = USER_THREADS_LOADED;
  constructor(public payload: AllUserData) {}
}

export type All = LoadUserThreadsAction | UserThreadsLoadedAction;
