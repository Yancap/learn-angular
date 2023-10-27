import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
  pure: false
})
export class CamelCasePipe implements PipeTransform {

  private capitalize(value: string){
    return value[0].toUpperCase() + value.substring(1).toLowerCase();
  }
  transform(value: string, ...args: unknown[]): unknown {
    const stringSplitted = value.split(' ');
    let stringFormatted = "";

    for (let word of stringSplitted) {
      stringFormatted += this.capitalize(word) + " ";
    }
    return stringFormatted;
  }

}
