import {Choice} from './choice';

export class FieldType {

  type = '' ; // DropDown, RadioButton, String, Date, ...
  referenceUrl = '';
  defaultValue = '';
  options: Choice[];
  optionLabel: String ;
  optionValue: String ;
  colspan = 2 ;
  password = false;

}
