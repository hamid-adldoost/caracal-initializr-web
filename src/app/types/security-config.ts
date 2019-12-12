
export class SecurityConfig {
  jwtKey: String ;
  tokenExpiration: number;
  provider: String ;


  constructor() {
    this.jwtKey = 'aasdas5d445asd45asd5as';
    this.tokenExpiration = 1800;
    this.provider = 'jwt';
  }
}
