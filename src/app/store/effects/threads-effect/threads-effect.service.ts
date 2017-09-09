import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { ThreadsService } from '../../../services/threads/threads.service';
import { LOAD_USER_THREADS, UserThreadsLoadedAction } from '../../actions';

@Injectable()
export class ThreadsEffectService {
  constructor(
    private actions$: Actions,
    private threadService: ThreadsService
  ) {}

  @Effect()
  userThreads$ = this.actions$
    .ofType(LOAD_USER_THREADS)
    .switchMap(() => this.threadService.loadUserThreads(1))
    .map(allUserData => new UserThreadsLoadedAction(allUserData));
}
