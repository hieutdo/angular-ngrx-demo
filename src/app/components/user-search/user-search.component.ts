import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PartialObserver } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit, OnDestroy {
  @Input() public observer: PartialObserver<string>;
  @Input() public users: any[];

  public form: FormGroup;
  private _subscription: Subscription;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: [],
    });
  }

  ngOnInit() {
    this._subscription = this.form.valueChanges
      .map(val => val.username)
      .subscribe(this.observer);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
