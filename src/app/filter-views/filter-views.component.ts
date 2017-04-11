import { Component, OnInit } from '@angular/core';
import { forEach } from 'lodash';
import { FilterService } from '../filter.service';

@Component({
  selector: 'dd-filter-views',
  templateUrl: './filter-views.component.html',
  styleUrls: ['./filter-views.component.css']
})
export class FilterViewsComponent implements OnInit {

  public selectedRegionFilter: string;

  constructor(public filterService: FilterService) { }

  ngOnInit() {
    this.filterService.selectedRegion$
      .subscribe((selectedFilter) => this.selectedRegionFilter = selectedFilter);
  }

  regionFilterChanged() {
    this.filterService.updateSelectedRegionFilter(this.selectedRegionFilter);
  }

}
