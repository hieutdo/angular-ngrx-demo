import { LoadUserThreadsAction } from '../../store/actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { ApplicationState } from '../../store/application-state';
import {
  selectThreadSummaries,
  selectUnreadMessagesCount,
  selectUsername,
} from './selectors';
import { ThreadSummaryVM } from './thread-summary-vm';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css'],
})
export class ThreadSectionComponent implements OnInit {
  username$: Observable<string>;
  unreadMessagesCount$: Observable<number>;
  threadSummaryList$: Observable<ThreadSummaryVM[]>;

  constructor(private store: Store<ApplicationState>) {
    this.username$ = store.skip(1).map(selectUsername);
    this.unreadMessagesCount$ = store.skip(1).map(selectUnreadMessagesCount);
    this.threadSummaryList$ = store.select(selectThreadSummaries);
  }

  ngOnInit() {
    this.store.dispatch(new LoadUserThreadsAction());
  }
}
