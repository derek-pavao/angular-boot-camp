import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoService } from './video.service';
import { FilterService } from './filter.service';
import { FilterViewsComponent } from './filter-views/filter-views.component';
import { ViewsBreakdownComponent } from './views-breakdown/views-breakdown.component';
import { AddVideoModule } from './add-video/add-video.module';



@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    DashboardComponent,
    HeaderComponent,
    VideoListItemComponent,
    VideoPlayerComponent,
    FilterViewsComponent,
    ViewsBreakdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AddVideoModule
  ],
  providers: [VideoService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
