import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fvrtTxt'
})
export class FvrtTxtPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
