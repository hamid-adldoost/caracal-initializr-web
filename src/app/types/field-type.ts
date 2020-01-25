import {SelectItem} from 'primeng/api';
import {Choice} from './choice';

export class FieldType {

  type: any; // DropDown, RadioButton, String, Date, ...
  referenceUrl = '';
  defaultValue = '';
  options: any;
  optionLabel: String ;
  optionValue: String ;
  colspan = 2 ;
  password = false;
  metaType = new Choice(); //currency, iran-mobile, ir-national-code,

}
