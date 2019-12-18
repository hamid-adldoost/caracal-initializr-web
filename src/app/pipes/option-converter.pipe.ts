import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optionConverter'
})
export class OptionConverterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    const option = args[0];
    console.log('option', option);

    for(let p of option) {
      if (p.value == value) {
        return p.label;
      }
    }
    return null;
  }

}
