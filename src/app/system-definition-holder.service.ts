import { Injectable } from '@angular/core';
import {SystemDefinition} from './types/system-definition';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemDefinitionHolderService {

  systemDefinition = new SystemDefinition();


  constructor(private httpClient: HttpClient) { }

  public getSystemDefinition(): SystemDefinition {
    return this.systemDefinition;
  }

  public setSystemDefinition(systemDefinition: SystemDefinition) {
    this.systemDefinition = systemDefinition;
  }

  public sentJson(): Observable<any> {
    localStorage.setItem('json', JSON.stringify(this.systemDefinition));
    return this.httpClient.post(environment.baseServiceUrl + '/generator/generate', this.systemDefinition);
  }
}
