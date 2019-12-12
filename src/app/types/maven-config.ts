
export class MavenConfig {
  projectName: String ;
  projectDescription: String ;
  mavenArtifactId: String ;
  mavenGroupId: String ;


  constructor() {
    this.projectName = 'generation-' + new Date().getTime();
    this.projectDescription = 'generated project';
    this.mavenArtifactId = this.projectName;
    this.mavenGroupId = 'com.adldoost.generated';
  }
}
