import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { VideoService } from './video.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    DashboardComponent,
    HeaderComponent,
    VideoListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
