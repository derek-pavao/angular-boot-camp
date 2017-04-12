import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  public get videoList$(): Observable<any> {
    return this.videoListSubject.asObservable();
  }

  public get selectedVideo$(): Observable<any> {
    return this.selectedVideoSubject.asObservable();
  }

  private selectedVideoSubject: BehaviorSubject<any>;

  private videoListSubject: BehaviorSubject<any>;

  private videoList: Array<any>;

  constructor(private http: Http) {
    this.videoListSubject = new BehaviorSubject(null);
    this.selectedVideoSubject = new BehaviorSubject(null);
  }

  public selectVideo(video: any): void {
    this.selectedVideoSubject.next(video);
  }

  public getVideoList(): void {

    this.http.get('api/videos')
      .map((res) => res.json())
      .subscribe((videoList) => {
        this.videoList = videoList;
        this.videoListSubject.next(videoList);

        if (this.selectedVideoSubject.getValue() === null) {
          this.selectedVideoSubject.next(videoList[0]);
        }
      });
  }

}
