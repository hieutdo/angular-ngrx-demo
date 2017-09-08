import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AllUserData } from '../../../../shared/to/all-user-data';
import { commonHttpHeaders } from '../commonHttpHeaders';

@Injectable()
export class ThreadsService {

  constructor(private http: Http) { }

  loadUserThreads(userId: number): Observable<AllUserData> {
    return this.http.get('/api/threads', commonHttpHeaders(userId)).map(res => res.json());
  }
}
