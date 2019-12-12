import { Component, OnInit } from '@angular/core';
import {DashboardService} from './dashboard.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {LazyLoadEvent} from 'primeng/api';

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

  constructor(private dashboardService: DashboardService,
              private messageService: MessageService) { }


  ngOnInit() {

      this.getFirstStatisticValue();
      this.getSecondStatisticValue();
      this.getThirdStatisticValue();
      this.getForthStatisticsValue();
  }

  getFirstStatisticValue(): void {
    // this.dashboardService.getAnswersheetCount().subscribe(res => {
    //   this.firstStatisticValue = res;
    // }, error => {
    //   this.messageService.add({severity: 'error', summary: error.error.message});
    // });
  }

    getSecondStatisticValue(): void {

      // this.dashboardService.getSecondStatisticValue().subscribe(res => {
      //   this.secondStatisticValue = res;
      // }, error => {
      //   this.messageService.add({severity: 'error', summary: error.error.message});
      // });
    }

    getThirdStatisticValue(): void {

      // this.dashboardService.getAnswersheetCountForLast24Hours().subscribe(res => {
      //   this.thirdStatisticValue = res;
      // }, error => {
      //   this.messageService.add({severity: 'error', summary: error.error.message});
      // });
    }

    getForthStatisticsValue(): void {
      // this.dashboardService.getForthStatisticsValue().subscribe(res => {
      //   this.forthStatisticValue = res;
      // }, error => {
      //   this.messageService.add({severity: 'error', summary: error.error.message});
      // });
    }

}
