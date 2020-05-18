import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phone' })
export class PhonePipe implements PipeTransform {
    transform(phone: string): string {
        return phone.substring(0, 2) + " " + phone.substring(2, 4) + " " + phone.substring(4, 6) + " " + phone.substring(6, 8) + " " + phone.substring(8, 10)
    }
}