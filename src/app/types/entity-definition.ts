import {EntityFieldDefinition} from './entity-field-definition';
import {FieldType} from './field-type';
import {Choice} from './choice';

export class EntityDefinition {

  name = '';
  farsiName = '';
  label = '';
  entityFieldDefinitionList: EntityFieldDefinition[];
  hasForm = true;
  enableValidation = true;
  hasAttachment = true;


  constructor() {
    this.entityFieldDefinitionList = [];
    const field = new EntityFieldDefinition();
    field.fieldType = new FieldType();
    field.fieldType.type = new Choice();
    field.fieldType.type.label = 'Long';
    field.fieldType.type.value = 'Long';
    field.farsiName = 'شناسه';
    field.name = 'id';
    this.entityFieldDefinitionList.push(field);
  }
}
