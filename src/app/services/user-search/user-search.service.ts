import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserSearchService {
  constructor(private _http: Http) {}

  searchUsers(username: string): Observable<any[]> {
    return this._http
      .get(`https://api.github.com/search/users?q=${username}`)
      .map(res => res.json())
      .map(content => content.items);
  }
}
