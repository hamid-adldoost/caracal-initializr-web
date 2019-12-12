import {Pair} from './pair';

export class QueryOptions {

  options: Pair[];


  getOptionsQueryString(): string {

    let queryString = '';

    if (!this.options) {
      return '';
    }

    this.options.forEach(i => {
      queryString += i.key + '=' + i.value + '&';
    });
    return queryString;
  }

}
