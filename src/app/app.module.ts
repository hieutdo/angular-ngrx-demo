import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ThreadsService } from './services/threads/threads.service';
import { ThreadSectionComponent } from './components/thread-section/thread-section.component';
import { INITIAL_APPLICATION_STATE } from './store/application-state';

@NgModule({
  declarations: [
    AppComponent,
    ThreadSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({}, INITIAL_APPLICATION_STATE)
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
