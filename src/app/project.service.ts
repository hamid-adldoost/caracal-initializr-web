import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseServiceService} from './general/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseServiceService {

      constructor(httpClient: HttpClient) {

        super(httpClient, 'project');
      }

}
