import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { VideoService } from '../video.service';

@Component({
  selector: 'dd-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videoList$: Observable<any>;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoList$ = this.videoService.videoList$;
    this.videoService.getVideoList();
  }
}
