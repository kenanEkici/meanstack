import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})
export class NamePipe implements PipeTransform {

  transform(array, name): any {
    if (array != undefined) {
      if (name != undefined){
        return array.filter((item)=>item.name.includes(name));
      } else {
        return array;
      }      
    }       
  }
}
