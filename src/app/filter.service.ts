import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { forEach, reduce } from 'lodash';
import 'rxjs/add/operator/map';

@Injectable()
export class FilterService {

  public get regionFilters(): Array<string> {
    return Object.keys(this.regionMap);
  };
  public get dateRangeFilters(): Array<string> {
    return Object.keys(this.dateRangeMap);
  };
  public get ageGroupsFilters(): Array<string> {
    return Object.keys(this.ageGroupsFilters);
  };

  public get region$(): Observable<any> {
    return this.regionSubject.asObservable();
  }

  public get selectedRegion$(): Observable<string> {
    return this.region$
      .map((regionMap) => {
        let ret;
        forEach(regionMap, (value, key) => {
          if (value === true) {
            ret = key;
            return false;
          }
        });
        return ret;
      });
  }

  public get dateRange$(): Observable<any> {
    return this.dateRangeSubject.asObservable();
  }

  public get ageGroup$(): Observable<any> {
    return this.ageGroupsSubject.asObservable();
  }

  public get selectedAgeGroups$(): Observable<Array<string>> {
    return this.ageGroup$
      .map((ageGroups) => {
        return reduce(ageGroups, (acc, value, key) => {
          if (value === true) {
            acc.push(key);
          }
          return acc;
        }, []);
      });
  }

  private regionSubject: BehaviorSubject<any>;
  private dateRangeSubject: BehaviorSubject<any>;
  private ageGroupsSubject: BehaviorSubject<any>;

  private regionMap;
  private dateRangeMap;
  private ageGroupsMap;

  constructor() {
    this.regionMap = {
      'North America': false,
      'Europe': false,
      'Asia': false,
      'All': true
    };

    this.dateRangeMap = {
      from: new Date('1995-01-01'),
      to: new Date('2017-11-04')
    };

    this.ageGroupsMap = {
      'Under 18': true,
      '18 - 40': true,
      '40 - 60': true,
      'Over 60': true
    };

    this.regionSubject = new BehaviorSubject(this.regionMap);
    this.dateRangeSubject = new BehaviorSubject(this.dateRangeMap);
    this.ageGroupsSubject = new BehaviorSubject(this.ageGroupsMap);
   }

  public updateSelectedRegionFilter(filterName: string) {
    if (!filterName) {
      return;
    }

    this.regionMap = reduce(this.regionMap, (acc, value, key) => {
      acc[key] = (key === filterName) ? true : false;

      return acc;
    }, {});
    console.log('this.regionMap', this.regionMap);
    this.regionSubject.next(this.regionMap);
  }
}
