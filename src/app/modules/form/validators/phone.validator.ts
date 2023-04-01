import { AbstractControl, ValidatorFn } from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const phoneRegex = /^\+\d{1,4}\s\d{1,4}\s\d{6,10}$/; // Regex für Telefonnummern mit internationalen Ländervorwahlen im Format +<Ländervorwahl> <Vorwahl> <Telefonnummer>
    const isValid = phoneRegex.test(control.value);
    return isValid ? null : { 'phoneValidator': true };
  };
}
