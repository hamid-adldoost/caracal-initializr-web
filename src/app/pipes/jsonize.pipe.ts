import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonize'
})
export class JsonizePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return JSON.parse(value);
  }

}
