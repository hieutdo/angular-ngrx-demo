import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ThreadListComponent } from './components/thread-list/thread-list.component';
import { ThreadSectionComponent } from './components/thread-section/thread-section.component';
import { ThreadsService } from './services/threads/threads.service';
import { INITIAL_APPLICATION_STATE } from './store/application-state';
import { storeReducer, uiReducer } from './store/reducers';

const reducersMap = { uiState: uiReducer, storeData: storeReducer };

@NgModule({
  declarations: [AppComponent, ThreadSectionComponent, ThreadListComponent],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot(reducersMap, {
      initialState: INITIAL_APPLICATION_STATE,
    }),
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
