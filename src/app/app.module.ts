import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ThreadsService } from './services/threads/threads.service';
import { ThreadSectionComponent } from './components/thread-section/thread-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
