import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regulizeString'
})
export class RegulizeStringPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (!value)
      return '';
    if(value.length > 100) {
      return value.substr(0, 100) + '...';
    }
  }

}
