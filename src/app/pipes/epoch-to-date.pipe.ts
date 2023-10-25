import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Transforms an epoch time value to a formated Date
 * @param value The given epoch time
 */
@Pipe({
    name: 'datetime',
    pure: true
})
export class DatePipe implements PipeTransform {

    transform(value: number): string {
        return moment.unix(value).utc(true).format('DD MMM YYYY').toString();
    }
}