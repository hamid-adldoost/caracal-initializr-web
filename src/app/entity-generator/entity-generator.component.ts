import { Component, OnInit } from '@angular/core';
import {EntityDefinition} from '../types/entity-definition';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SystemDefinitionHolderService} from '../system-definition-holder.service';
import {EntityFieldDefinition} from '../types/entity-field-definition';

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

  constructor(private systemDefinitionHolderService: SystemDefinitionHolderService) { }

  entityDefinitionList = [];

  ngOnInit() {
    this.addEntity();
  }

  addEntity() {
    this.entityDefinitionList.push(new EntityDefinition());
    console.log('entity definition list', this.entityDefinitionList);
  }

  removeEntity(event) {
    console.log('event', event);
    this.entityDefinitionList.splice(event.index, 1);
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
}
