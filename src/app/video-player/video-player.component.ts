import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { Subscription } from 'rxjs/Subscription';
import {DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'dd-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  selectedVideo: any;
  selectedVideoUrl: SafeResourceUrl;

  private selectedVideoSubscription: Subscription;

  constructor(private videoService: VideoService,
              private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.selectedVideoSubscription = this.videoService.selectedVideo$
      .subscribe((video) => {
        if (video !== null) {
          this.selectedVideo = video;
          this.selectedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.id}`);
        }
      });
  }

}
