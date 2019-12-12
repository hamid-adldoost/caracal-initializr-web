
import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {MessageService} from 'primeng/components/common/messageservice';
import {LoginService} from './login.service';
import {AuthService} from '../http-interceptor/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(private loginService: LoginService,
              private router: Router,
              private messageService: MessageService,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  submit() {
    this.loginService.login(this.username, this.password).subscribe(res => {
      console.log(res);
      // this.authService.setToken(res.token);
      this.router.navigateByUrl('/inner/dashboard');
    }, error => {
      console.log('error', error);
      this.messageService.add({severity: 'error', summary: error.error.message});
    });
  }
}
