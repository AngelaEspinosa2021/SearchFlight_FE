import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe } from '@angular/common';


@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  transform(value: string): any {
     return new Date(parseInt(value.substr(6)));    
  }

}
