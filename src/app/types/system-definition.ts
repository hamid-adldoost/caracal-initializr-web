import {BackendConfig} from './backend-config';
import {EntityDefinition} from './entity-definition';
import {FrontendConfig} from './frontend-config';

export class SystemDefinition {

  entityDefinitionList: EntityDefinition[];
  backendConfig: BackendConfig;
  frontendConfig: FrontendConfig ;
  generateBackend: Boolean ;
  generateFrontend: Boolean ;


  constructor() {
    this.backendConfig = new BackendConfig();
    this.frontendConfig = new FrontendConfig();
    this.entityDefinitionList = [];
    this.generateBackend = true;
    this.generateFrontend = true;
  }
}
