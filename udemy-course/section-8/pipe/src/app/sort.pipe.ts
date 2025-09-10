import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: number[]) {
    const sorted = [...value];
    sorted.sort((a, b) => a - b);
    return sorted;
  }
}
