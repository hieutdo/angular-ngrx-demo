import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';

import { Thread } from '../../../../shared/model/thread';
import { ThreadsService } from '../../services/threads/threads.service';
import { LoadUserThreadsAction } from '../../store/actions';
import { ApplicationState } from '../../store/application-state';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css'],
})
export class ThreadSectionComponent implements OnInit {
  username$: Observable<string>;
  unreadMessagesCount$: Observable<number>;

  constructor(
    private store: Store<ApplicationState>,
    private threadsService: ThreadsService
  ) {
    this.username$ = store.skip(1).map(this.mapStateToUsername);
    this.unreadMessagesCount$ = store
      .skip(1)
      .map(this.mapStateToUnreadMessagesCount);
  }

  mapStateToUsername(state: ApplicationState): string {
    return state.storeData.participants[state.uiState.userId].name;
  }

  mapStateToUnreadMessagesCount(state: ApplicationState): number {
    const { userId } = state.uiState;
    const { threads } = state.storeData;

    return _.values<Thread>(threads).reduce(
      (acc, thread) => acc + thread.participants[userId],
      0
    );
  }

  ngOnInit() {
    this.threadsService
      .loadUserThreads(1)
      .subscribe(allUserData =>
        this.store.dispatch(new LoadUserThreadsAction(allUserData))
      );
  }
}
