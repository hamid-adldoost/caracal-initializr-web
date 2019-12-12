import {FieldType} from './field-type';

export class EntityFieldDefinition {

  name = '';
  farsiName = '';
  fieldType: FieldType ;
  nullable: Boolean ;
  length: number;
  visible = true;
  readOnly = false;
  unique = false;
  validationRegex: String ;

}
