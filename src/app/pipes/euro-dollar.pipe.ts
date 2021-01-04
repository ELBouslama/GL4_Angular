import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroDollar',
})
export class EuroDollarPipe implements PipeTransform {
  transform(amount: number, ...args: number[]): number {
    if (args[0] === 0) {
      return amount / 0.83;
    }
    return amount * 0.83;
  }
}
