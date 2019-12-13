import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringify'
})
export class StringifyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log('strify', value);
    console.log('strified',  JSON.stringify(value));
    return JSON.stringify(value);
  }

}
