import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dd-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent implements OnInit {

  @Input()
  video;

  @Input()
  isSelected = false;

  constructor() { }

  ngOnInit() {
  }

}
