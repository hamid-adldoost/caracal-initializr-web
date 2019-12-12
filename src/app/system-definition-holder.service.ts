import { Injectable } from '@angular/core';
import {SystemDefinition} from './types/system-definition';

@Injectable({
  providedIn: 'root'
})
export class SystemDefinitionHolderService {

  systemDefinition = new SystemDefinition();


  constructor() { }

  public getSystemDefinition(): SystemDefinition {
    return this.systemDefinition;
  }

  public setSystemDefinition(systemDefinition: SystemDefinition) {
    this.systemDefinition = systemDefinition;
  }
}
