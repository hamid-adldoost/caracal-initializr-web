import {EntityFieldDefinition} from './entity-field-definition';

export class EntityDefinition {

  name = '';
  farsiName = '';
  label = '';
  entityFieldDefinitionList: EntityFieldDefinition[];
  hasForm = true;
  enableValidation = true;


  constructor() {
    this.entityFieldDefinitionList = [];
    this.entityFieldDefinitionList.push(new EntityFieldDefinition());
  }
}
