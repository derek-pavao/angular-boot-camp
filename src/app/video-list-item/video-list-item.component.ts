import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { VideoService } from '../video.service';

@Component({
  selector: 'dd-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent implements OnInit {

  @Input()
  video;

  isSelected$: Observable<boolean>;

  constructor(private videoService: VideoService) { }

  @HostListener('click')
  selectVideo() {
    this.videoService.selectVideo(this.video);
  }

  ngOnInit() {
    this.isSelected$ = this.videoService
      .selectedVideo$
      .filter((video) => video !== null)
      .map((video) => video.id === this.video.id);
  }

}
