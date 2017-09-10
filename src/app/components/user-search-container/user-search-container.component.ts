import { PartialObserver } from 'rxjs/Observer';
import { Observable, Subject } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { UserSearchService } from '../../services/user-search/user-search.service';

@Component({
  selector: 'app-user-search-container',
  templateUrl: './user-search-container.component.html',
  styleUrls: ['./user-search-container.component.css'],
})
export class UserSearchContainerComponent implements OnInit {
  public observer: PartialObserver<string>;
  public users$: Observable<any[]>;
  private _subject: Subject<string>;

  constructor(service: UserSearchService) {
    this._subject = new Subject();
    this.observer = this._subject;
    this.users$ = this._subject
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap(
        username =>
          username ? service.searchUsers(username) : Observable.of([])
      );
  }

  ngOnInit() {}
}
