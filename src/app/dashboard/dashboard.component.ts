import { Component, OnInit } from '@angular/core';
import {DashboardService} from './dashboard.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {LazyLoadEvent} from 'primeng/api';
import {SystemDefinitionHolderService} from '../system-definition-holder.service';
import {QueryOptions} from '../general/query-options';
import * as moment from 'jalali-moment';
import {CommonService} from '../common.service';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  firstStatisticValue = 0;
  secondStatisticValue = 0;
  thirdStatisticValue = 0;
  forthStatisticValue = 0;

  firstIndex = 0;
  pageSize = 10;
  totalCount = 0;

  searchProject: {id: any, name: any, backendGenerationPath: any, frontendGenerationPath: any, generationDateFrom: any, generationDateTo: any, jsonMessage: any} = {id: null, name: null, backendGenerationPath: null, frontendGenerationPath: null, generationDateFrom: null, generationDateTo: null, jsonMessage: null};
  items = {data: [], count : 0};
  sortField: any;

  constructor(private dashboardService: DashboardService,
              private messageService: MessageService,
              private projectService: ProjectService,
              public commonService: CommonService,
              public systemDefinitionHolderService: SystemDefinitionHolderService) { }


  ngOnInit() {


  }

  loadItems(event: any) {
    if (!event) {
      event = {first : 0, rows : 20};
    }
    let query = new QueryOptions();
    query.options = [{key: 'firstIndex', value: event.first}, {key: 'pageSize', value: event.rows}];
    if (this.searchProject.id) {
      query.options.push({key: 'id', value: this.searchProject.id});
    }
    if (this.searchProject.name) {
      query.options.push({key: 'name', value: this.searchProject.name});
    }
    if (this.searchProject.backendGenerationPath) {
      query.options.push({key: 'backendGenerationPath', value: this.searchProject.backendGenerationPath});
    }
    if (this.searchProject.frontendGenerationPath) {
      query.options.push({key: 'frontendGenerationPath', value: this.searchProject.frontendGenerationPath});
    }
    if (this.searchProject.generationDateFrom) {
      query.options.push({
        key: 'generationDateFrom',
        value: moment.from(this.searchProject.generationDateFrom, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')
      });
    }
    if (this.searchProject.generationDateTo) {
      query.options.push({        key: 'generationDateTo',
        value: moment.from(this.searchProject.generationDateTo, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')
      });
    }
    if (this.searchProject.jsonMessage) {
      query.options.push({key: 'jsonMessage', value: this.searchProject.jsonMessage});
    }
    if(event.sortField) {
      this.sortField = {sortField: event.sortField, sortOrder: this.commonService.convertSortOrder(event.sortOrder)};
      query.options.push({key: 'sortField', value: this.sortField.sortField});
      query.options.push({key: 'sortOrder', value: this.sortField.sortOrder});
    }

    this.projectService.list(query, 'search').subscribe(res => {
      this.items = res;
    });
  }


  import(item) {
    this.systemDefinitionHolderService.systemDefinition = JSON.parse(item.jsonMessage);
    this.commonService.showInfoMessage('بارگذاری پروژه انجام شد');
    console.log(item.jsonMessage);
  }
}
