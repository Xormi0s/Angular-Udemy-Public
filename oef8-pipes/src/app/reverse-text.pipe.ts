import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseText'
})
export class ReverseTextPipe implements PipeTransform {

  transform(value: any): unknown {
    return value.split('').reverse().join('');
  }

}
