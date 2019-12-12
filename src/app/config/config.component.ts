import { Component, OnInit } from '@angular/core';
import {BackendConfig} from '../types/backend-config';
import {DatabaseConnection} from '../types/database-connection';
import {MavenConfig} from '../types/maven-config';
import {SecurityConfig} from '../types/security-config';
import {FrontendConfig} from '../types/frontend-config';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SystemDefinitionHolderService} from '../system-definition-holder.service';
import {SystemDefinition} from '../types/system-definition';
import {MessageService} from 'primeng/api';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
  animations: [
    trigger('errorState', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('visible => hidden', animate('400ms ease-in')),
      transition('hidden => visible', animate('400ms ease-out'))
    ])
  ]
})
export class ConfigComponent implements OnInit {

  backendConfig = new BackendConfig();
  frontendConfig = new FrontendConfig();


  constructor(private systemDefinitionHolderService: SystemDefinitionHolderService,
              private commonService: CommonService) { }

  ngOnInit() {

    this.backendConfig = this.systemDefinitionHolderService.getSystemDefinition().backendConfig;
    this.frontendConfig = this.systemDefinitionHolderService.getSystemDefinition().frontendConfig;

    console.log('backend config', this.backendConfig);
    console.log('frontend config', this.frontendConfig);
  }

  save() {
    this.systemDefinitionHolderService.getSystemDefinition().backendConfig = this.backendConfig;
    this.systemDefinitionHolderService.getSystemDefinition().frontendConfig = this.frontendConfig;
    this.commonService.showInfoMessage('اطلاعات با موفقیت ثبت شد');
  }
}
