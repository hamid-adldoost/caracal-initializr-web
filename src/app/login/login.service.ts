
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class LoginService {

    baseUrl: String = '/api/auth';

    public token: String;

    constructor(private httpClient: HttpClient, private router: Router) {

    }

  public login(username: string, password: string): Observable<any> {

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);


    return this.httpClient.post(environment.baseServiceUrl + '/auth/login',
      formData
    );

  }

}
