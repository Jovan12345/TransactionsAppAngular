import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToDiners'
})
export class UsdToDinersPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) protected localeId: string) { }

  transform(value: number): number {
    if (this.localeId === 'sr') {
      return value * 98;
    } else {
      return value
    }
  }

}
