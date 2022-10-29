import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanoTexto'
})
export class BooleanoTextoPipe implements PipeTransform {

  transform(value: boolean, ...args: string[]): string {
    return value ? args[0] : args[1]
  }

}
