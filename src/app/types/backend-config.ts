import {MavenConfig} from './maven-config';
import {SecurityConfig} from './security-config';
import {DatabaseConnection} from './database-connection';
import {BackendGenerationConfig} from './backend-generation-config';

export class BackendConfig {
  contextPath: String ;
  backendPortNumber: number ;
  basePackage: String ;
  targetPath: String ;
  mavenConfig: MavenConfig ;
  securityConfig: SecurityConfig;
  databaseConnection: DatabaseConnection ;
  backendGenerationConfig: BackendGenerationConfig ;


  constructor() {
    this.contextPath = 'generation' + new Date().getTime();
    this.backendPortNumber = 8080;
    this.basePackage = 'com.adldoost.generation';
    this.targetPath = 'E:\\adldoost\\generation\\' + new Date().getTime();
    this.mavenConfig = new MavenConfig();
    this.securityConfig = new SecurityConfig();
    this.databaseConnection = new DatabaseConnection();
    this.backendGenerationConfig = new BackendGenerationConfig();
  }
}
