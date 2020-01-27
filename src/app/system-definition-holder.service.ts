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

  public sendJson(json: SystemDefinition): Observable<any> {
    localStorage.setItem('system-definition', JSON.stringify(json));
    return this.httpClient.post(environment.baseServiceUrl + '/generator/generate', json);
  }

  public saveJson() {
    localStorage.setItem('system-definition', JSON.stringify(this.systemDefinition));
  }
}
