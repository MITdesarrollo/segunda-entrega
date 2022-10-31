import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../alumnos/models/alumno';


@Pipe({
  name: 'nombreYapellido'
})
export class ApellidoPipe implements PipeTransform {
/* pipe personalizado */
  transform(value: Alumno): string{

    return `${value.nombre} ${value.apellido}` ;
  }
}
