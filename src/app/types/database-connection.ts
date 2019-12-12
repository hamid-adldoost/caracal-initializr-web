
export class DatabaseConnection {

  datasourceUrl: String ;
  datasourceUsername: String ;
  datasourcePassword: String ;
  schemaName: String ;


  constructor() {
    this.datasourceUrl = 'jdbc:mysql://localhost:3306/generated?useUnicode=yes&characterEncoding=UTF8';
    this.datasourceUsername = 'root';
    this.datasourcePassword = 'password';
    this.schemaName = 'generated';

  }
}
