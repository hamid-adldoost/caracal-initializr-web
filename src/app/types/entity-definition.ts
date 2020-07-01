import {EntityFieldDefinition} from './entity-field-definition';
import {FieldType} from './field-type';
import {Choice} from './choice';

export class EntityDefinition {

  header = '';
  name = '';
  farsiName = '';
  label = '';
  entityFieldDefinitionList: EntityFieldDefinition[];
  hasForm = true;
  enableValidation = true;
  hasAttachment = true;
  gridColumns = '1';
  isAuditable = true;


  constructor() {
    this.entityFieldDefinitionList = [];
    const field = new EntityFieldDefinition();
    field.fieldType = new FieldType();
    field.fieldType.type = new Choice();
    field.fieldType.type.label = 'Long';
    field.fieldType.type.value = 'Long';
    field.farsiName = 'شناسه';
    field.name = 'id';
    field.visible = false;
    this.entityFieldDefinitionList.push(field);
  }
}
