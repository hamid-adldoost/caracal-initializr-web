import {FieldType} from './field-type';

export class EntityFieldDefinition {

  name = '';
  farsiName = '';
  fieldType: FieldType ;
  nullable = true ;
  length: number;
  visible = true;
  readOnly = false;
  unique = false;
  validationRegex: String ;
  gridColumns = 1;


  constructor() {
    this.fieldType = new FieldType();
  }
}
