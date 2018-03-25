import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WatchComponent } from './watch/watch.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'watch/:url', component: WatchComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WatchComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
