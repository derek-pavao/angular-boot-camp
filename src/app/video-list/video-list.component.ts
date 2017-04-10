import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dd-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input()
  videoList: any;

  @Output()
  videoSelected = new EventEmitter<any>();

  selectedVideoItemIndex: number;

  constructor() { }

  ngOnInit() {

  }

  videoItemClicked(index, video) {
    this.selectedVideoItemIndex = index;
    this.videoSelected.emit(video);
  }

}
