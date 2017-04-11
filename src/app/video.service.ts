import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

const videoList = [
  {
    "title": "Angular Observable Data Flow",
    "author": "Kyle Cordes",
    "id": "JPuqluYYa-o",
    "viewDetails": [
      {
        "age": 17,
        "region": "North America",
        "date": "2016-03-23"
      }, {
        "age": 27,
        "region": "North America",
        "date": "2016-03-23"
      }, {
        "age": 37,
        "region": "North America",
        "date": "2016-03-23"
      }, {
        "age": 47,
        "region": "Europe",
        "date": "2016-03-24"
      }, {
        "age": 37,
        "region": "North America",
        "date": "2016-03-24"
      }, {
        "age": 17,
        "region": "North America",
        "date": "2016-03-25"
      }
    ]
  },
  {
    "title": "Angular Live Coding",
    "author": "Kyle Cordes",
    "id": "CkK1BT6mMAw",
    "viewDetails": [
      {
        "age": 36,
        "region": "North America",
        "date": "2016-06-23"
      }, {
        "age": 30,
        "region": "North America",
        "date": "2016-06-23"
      }, {
        "age": 54,
        "region": "North America",
        "date": "2016-07-23"
      }, {
        "age": 43,
        "region": "Europe",
        "date": "2016-0-24"
      }, {
        "age": 32,
        "region": "North America",
        "date": "2016-08-24"
      }, {
        "age": 32,
        "region": "North America",
        "date": "2016-08-25"
      }
    ]
  },
  {
    "title": "Managing State in Angular",
    "author": "Kyle Cordes",
    "id": "eBLTz8QRg4Q",
    "viewDetails": [
      {
        "age": 17,
        "region": "North America",
        "date": "2016-03-23"
      }, {
        "age": 27,
        "region": "North America",
        "date": "2016-03-23"
      }, {
        "age": 37,
        "region": "North America",
        "date": "2016-03-23"
      }, {
        "age": 47,
        "region": "Europe",
        "date": "2016-03-24"
      }, {
        "age": 37,
        "region": "North America",
        "date": "2016-03-24"
      }, {
        "age": 17,
        "region": "North America",
        "date": "2016-03-25"
      }
    ]
  },
  {
    "title": "Modl Buildr",
    "author": "Paul Spears",
    "id": "4ENpTiHKyi4",
    "viewDetails": [
      {
        "age": 36,
        "region": "North America",
        "date": "2016-06-23"
      }, {
        "age": 30,
        "region": "North America",
        "date": "2016-06-23"
      }, {
        "age": 54,
        "region": "North America",
        "date": "2016-07-23"
      }, {
        "age": 43,
        "region": "Europe",
        "date": "2016-0-24"
      }, {
        "age": 32,
        "region": "North America",
        "date": "2016-08-24"
      }, {
        "age": 32,
        "region": "North America",
        "date": "2016-08-25"
      }
    ]
  },
  {
    "title": "ngConf 2015",
    "author": "Oasis Digital Solutions Inc.",
    "id": "NQOCQq6PLQg",
    "viewDetails": [
      {
        "age": 17,
        "region": "North America",
        "date": "2016-03-23"
      }, {
        "age": 27,
        "region": "North America",
        "date": "2016-03-23"
      }, {
        "age": 37,
        "region": "North America",
        "date": "2016-03-23"
      }, {
        "age": 47,
        "region": "Europe",
        "date": "2016-03-24"
      }, {
        "age": 37,
        "region": "North America",
        "date": "2016-03-24"
      }, {
        "age": 17,
        "region": "North America",
        "date": "2016-03-25"
      }
    ]
  }
];

@Injectable()
export class VideoService {

  public get videoList$(): Observable<any> {
    return this.videoListSubject.asObservable();
  }

  public get selectedVideo$(): Observable<any> {
    return this.selectedVideoSubject;
  }

  private selectedVideoSubject: BehaviorSubject<any>;

  private videoListSubject: BehaviorSubject<any>;

  constructor() {
    this.videoListSubject = new BehaviorSubject(null);
    this.selectedVideoSubject = new BehaviorSubject(null);
  }

  public selectVideo(video: any): void {
    this.selectedVideoSubject.next(video);
  }

  public getVideoList(): void {
    this.videoListSubject.next(videoList);
    if (this.selectedVideoSubject.getValue() === null) {
      this.selectedVideoSubject.next(videoList[0]);
    }
  }

}
