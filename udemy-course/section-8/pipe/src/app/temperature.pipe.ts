import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  pure: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, inputType?: 'cel' | 'far'): string {
    let val: number;
    let outputTemp: number;
    let symbol: '°C' | '°F' | null = null;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    if (inputType === 'cel') {
      outputTemp = val * (9 / 5) + 32;
      symbol = '°F';
    } else if (inputType === 'far') {
      outputTemp = (val - 32) * (5 / 9);
      symbol = '°C';
    } else {
      outputTemp = val;
      symbol = null;
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}
