import { Action } from '@ngrx/store';

import { AllUserData } from '../../../shared/to/all-user-data';

export const LOAD_USER_THREADS = 'LOAD_USER_THREADS';

export class LoadUserThreadsAction implements Action {
  readonly type = LOAD_USER_THREADS;

  constructor(public payload: AllUserData) {}
}

export type All = LoadUserThreadsAction;
