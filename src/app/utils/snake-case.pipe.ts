import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeCase'
})
export class SnakeCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let str = '';
    for (var i=0; i<=value.length; i++) {
      if(value[i] && value[i].toUpperCase() == value[i]) {
        str += '-' + value[i].toLowerCase();
      } else {
        str += value[i];
      }
    }
    return str;
  }

}
