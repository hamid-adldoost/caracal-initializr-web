import { Component, OnInit } from '@angular/core';
import {EntityDefinition} from '../types/entity-definition';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SystemDefinitionHolderService} from '../system-definition-holder.service';
import {EntityFieldDefinition} from '../types/entity-field-definition';
import {Choice} from '../types/choice';
import {CommonService} from '../common.service';
import {SelectItem} from 'primeng/api';
import {SystemDefinition} from '../types/system-definition';

@Component({
  selector: 'app-entity-generator',
  templateUrl: './entity-generator.component.html',
  styleUrls: ['./entity-generator.component.css'],
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
export class EntityGeneratorComponent implements OnInit {

  constructor(private systemDefinitionHolderService: SystemDefinitionHolderService,
              public commonService: CommonService) { }

  entityDefinitionList = [];
  options = [];
  choice = new Choice();

  fieldTypeList: SelectItem[] = [
    {label: 'String', value: 'String'},
    {label: 'Integer', value: 'Integer'},
    {label: 'Long', value: 'Long'},
    {label: 'Float', value: 'Float'},
    {label: 'Double', value: 'Double'},
    {label: 'Date', value: 'Date'},
    {label: 'DropDown', value: 'DropDown'},
    {label: 'RadioButton', value: 'RadioButton'}
  ];

  metaTypeList: SelectItem[] = [
    {label: 'انتخاب کنید', value: null},
    {label: 'CURRENCY', value: 'CURRENCY'},
    {label: 'INTEGER', value: 'INTEGER'},
    {label: 'IR_MOBILE', value: 'IR_MOBILE'},
    {label: 'IR_NATIONAL_CODE', value: 'IR_NATIONAL_CODE'},
    {label: 'AUTOCOMPLETE', value: 'AUTOCOMPLETE'},
    {label: 'POPUP_TABLE', value: 'POPUP_TABLE'}
  ];

  ngOnInit() {
    this.entityDefinitionList = this.systemDefinitionHolderService.systemDefinition.entityDefinitionList;
    if (!this.entityDefinitionList || this.entityDefinitionList.length == 0) {
      this.entityDefinitionList = [];
      this.addEntity();
    }
  }

  addEntity() {
    this.entityDefinitionList.push(new EntityDefinition());
    console.log('entity definition list', this.entityDefinitionList);
    this.refreshEntityTypes();
  }

  removeEntity(event) {
    console.log('event', event);
    this.entityDefinitionList.splice(event.index, 1);
    this.refreshEntityTypes();
  }

  save() {
    this.systemDefinitionHolderService.systemDefinition.entityDefinitionList = this.entityDefinitionList;
    this.systemDefinitionHolderService.saveJson();
    this.commonService.showInfoMessage('اطلاعات در مرورگر ذخیره شد');
  }

  addField(item: EntityDefinition) {
    item.entityFieldDefinitionList.push(new EntityFieldDefinition());
  }

  removeField(item: any, event: any) {
    item.entityFieldDefinitionList.splice(event.index, 1);
  }

  addChoice(field: EntityFieldDefinition) {
    if (!field.fieldType.options) {
      field.fieldType.options = [];
    }
    field.fieldType.options.push(this.choice);
    console.log('field options', field.fieldType.options);
    this.choice = new Choice();
  }

  fieldTypeChanged(field: EntityFieldDefinition) {
    console.log('field type', field.fieldType);
  }

  removeOption(field: EntityFieldDefinition, k: number) {
    field.fieldType.options.splice(k, 1);
  }

  send() {
    const savingSysDef = JSON.parse(JSON.stringify(this.systemDefinitionHolderService.systemDefinition));
    this.systemDefinitionHolderService.sendJson(savingSysDef).subscribe(res => {
      this.commonService.showInfoMessage('پروژه با موفقیت تولید شد');
    });
  }

  reload() {
    this.ngOnInit();
    const systemDefString = localStorage.getItem('system-definition');
    if (!systemDefString) {
      this.commonService.showErrorPureMessage('اطلاعات یافت نشد');
      return;
    }
    const sysDef: SystemDefinition = JSON.parse(systemDefString);
    sysDef.entityDefinitionList.forEach(e => {
      e.entityFieldDefinitionList.forEach(f => {
        const c = new Choice();
        c.label = f.fieldType.type;
        c.value = f.fieldType.type;
        f.fieldType.type = c;

        // const c2 = new Choice();
        // c2.label = f.fieldType.type;
        // c2.value = f.fieldType.type;
        // f.fieldType.metaType = c2;
      });
    });
    this.systemDefinitionHolderService.systemDefinition = sysDef;
    this.commonService.showInfoMessage('بازیابی اطلاعات انجام شد');
  }

  refreshEntityTypes() {
    this.fieldTypeList = [
      {label: 'String', value: 'String'},
      {label: 'Integer', value: 'Integer'},
      {label: 'Long', value: 'Long'},
      {label: 'Float', value: 'Float'},
      {label: 'Double', value: 'Double'},
      {label: 'Date', value: 'Date'},
      {label: 'DropDown', value: 'DropDown'},
      {label: 'RadioButton', value: 'RadioButton'}
    ];

    this.entityDefinitionList.forEach(e => {
      if (e.name) {
        this.fieldTypeList.push({label: e.name, value: e.name});
      }
    });
  }
}
