import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {MessageService} from 'primeng/components/common/messageservice';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  serviceUrl = `${environment.baseServiceUrl}/`;

  constructor(private httpClient: HttpClient,
              private messageService: MessageService) {

  }

  uploadFile(fileData: any): Observable<any> {

    const form = new FormData();
    form.append('file', fileData, fileData.name);
    return this.httpClient.post(this.serviceUrl + '/upload/file', form);

  }

  getCurrentPersianDate(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + '/persianMonth/current-date');
  }

  showErrorMessageByService(messageService: MessageService, error: any) {
    messageService.add({severity: 'error', summary: error.error.message});
  }

  showErrorMessage(error: any) {
    this.messageService.add({severity: 'error', summary: error.error.message});
  }

  showErrorPureMessage(error: string) {
    this.messageService.add({severity: 'error', summary: error});
  }

  showInfoMessage(info: string) {
    this.messageService.add({severity: 'info', summary: info});
  }

  showSubmitMessage() {
    this.messageService.add({severity: 'success', summary: 'با موفقیت ثبت شد'});
  }

  showDeleteMessage() {
    this.messageService.add({severity: 'success', summary: 'عملیات حذف انجام شد'});
  }


  prepareListToDropdown(input: any[], labelField: string): any[] {
    if (!input) {
      return [];
    }
    const result = [];
    const item = {label: 'انتخاب کنید', value: null};
    result.push(item);
    input.forEach(i => {
      let item = {label: i[labelField], value: i};
      result.push(item);
    });
    return result;
  }

  preparePureListToDropdown(input: any[]): any[] {
    if (!input) {
      return [];
    }
    const result = [];
    const item = {label: 'انتخاب کنید', value: null};
    result.push(item);
    input.forEach(i => {
      result.push(i);
    });
    return result;
  }

  addNullOptionToList(input: any[], labelField?: string, valueField?: string): any[] {
    if (!input) {
      return [];
    }
    const result = [];
    const item = {};
    if (labelField) {
      item[labelField] = 'انتخاب کنید';
    } else {
      item['label'] = 'انتخاب کنید';
    }
    if (valueField) {
      item[valueField] = null;
    } else {
      item['value'] = null;
    }
    result.push(item);
    // console.log('iterating input', input);
    input.forEach(i => {
      result.push(i);
    });
    return result;
  }


  preparePureListToDropdownWithNull(input: any[]): any[] {
    if (!input) {
      return [];
    }
    const result = [];
    const item = null;
    result.push(item);
    input.forEach(i => {
      result.push(i);
    });
    return result;
  }

  fixPersianNumbers = function (str) {
    let persianNumbers: RegExp[], arabicNumbers: RegExp[];
    persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

    if (typeof str === 'string') {
      for ( let i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
    }
    return str;
  };

  convertSortOrder(order: number): string {
    if (order === 1) {
      return 'asc';
    } else {
      return 'desc';
    }
  }

}
