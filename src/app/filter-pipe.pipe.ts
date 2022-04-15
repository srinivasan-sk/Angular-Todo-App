import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(taskList:string[],textSearch: string ): any[] {
    if (!taskList) return [];
    if(!textSearch) return taskList;

    textSearch = textSearch.toLocaleLowerCase();

    return taskList.filter((task: string) => {
return task.toLocaleLowerCase().includes(textSearch);
    })
  }

}
