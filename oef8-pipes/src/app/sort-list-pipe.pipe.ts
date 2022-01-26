import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortListPipe',
  pure: false
})
export class SortListPipePipe implements PipeTransform {

  transform(value: any[]){
       return value.sort((a, b) => a.status.localeCompare(b.status));
  }

}
