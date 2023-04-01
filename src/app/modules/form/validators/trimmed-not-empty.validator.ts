import {AbstractControl, ValidatorFn} from '@angular/forms';

export function trimmedNotEmptyValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value.trim().length === 0) {
      return {'trimmedNotEmpty': true};
    }
    return null;
  };
}
