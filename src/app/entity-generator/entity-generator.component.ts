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

  ngOnInit() {
    this.entityDefinitionList = this.systemDefinitionHolderService.getSystemDefinition().entityDefinitionList;
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
    this.systemDefinitionHolderService.getSystemDefinition().entityDefinitionList = this.entityDefinitionList;
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
    const savingSysDef = JSON.parse(JSON.stringify(this.systemDefinitionHolderService.getSystemDefinition()));
    savingSysDef.entityDefinitionList.forEach(d => {
      d.entityFieldDefinitionList.forEach(f => {
        if (f.fieldType.type && f.fieldType.type.value) {
          // f.fieldType.options = JSON.stringify(f.fieldType.options);
          f.fieldType.type = f.fieldType.type.value;
        } else {
          // f.fieldType.type = null;
        }
        console.log('fieeeeeeld type', f.fieldType);
      });
    });
    this.systemDefinitionHolderService.sentJson(savingSysDef).subscribe(res => {
      this.commonService.showSubmitMessage();
    });
  }

  reload() {
    this.ngOnInit();
    const sysDef: SystemDefinition = JSON.parse(localStorage.getItem('json'));
    sysDef.entityDefinitionList.forEach(e => {
      e.entityFieldDefinitionList.forEach(f => {
        const c = new Choice();
        c.label = f.fieldType.type;
        c.value = f.fieldType.type;
        f.fieldType.type = c;
      });
    });
    this.systemDefinitionHolderService.setSystemDefinition(sysDef);
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
