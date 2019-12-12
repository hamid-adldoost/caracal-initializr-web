
export class FrontendConfig {

  projectName: String ;
  projectFarsiName: String ;
  targetPath: String ;


  constructor() {
    this.projectName = 'generated-front';
    this.projectFarsiName = 'پروژه تولید شده';
    this.targetPath = 'E:\\adldoost\\generated\\' + new Date().getTime();
  }
}
