import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficultyPipe'
})
export class DifficultyPipe implements PipeTransform {

  transform(array, filter): any {
    if (array != undefined && filter != undefined) {
      if (filter == "All") {
        return array;
      } else {
        console.log(array);
        return array.filter((item)=>item.difficulty == filter);
      }
    } else {
      return array;
    }      
  }
}
