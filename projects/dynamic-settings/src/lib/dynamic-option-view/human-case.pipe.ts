import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanCase'
})
export class HumanCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value
      .replace(/(^|[_-])([a-z])/g, (a, b, c) => c.toUpperCase())
      .replace(/([a-z])([A-Z])/g, (a, b, c) => `${b} ${c}`);
  }
}
