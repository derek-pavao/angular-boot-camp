import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FilterService } from '../filter.service';

@Component({
  selector: 'dd-views-breakdown',
  templateUrl: './views-breakdown.component.html',
  styleUrls: ['./views-breakdown.component.css']
})
export class ViewsBreakdownComponent implements OnInit {

  public selectedRegionFilter$: Observable<string>;
  public selectedAgeFilters$: Observable<Array<string>>;
  public dateRangeFilter;

  constructor(private filterService: FilterService) { }

  ngOnInit() {

    this.selectedRegionFilter$ = this.filterService.selectedRegion$;
    this.selectedAgeFilters$ = this.filterService.selectedAgeGroups$;
    this.filterService.dateRange$
      .subscribe((dateRange) => this.dateRangeFilter = dateRange);
  }

}
