import {AbstractControl, ValidatorFn} from "@angular/forms";

/**
 * Minimum length Validator. Check if the value has the minimum length.
 * @param minLength
 */
export function minLengthValidator(minLength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value.trim();

    if (value === null || value === undefined || value.length < minLength) {
      return {'minLength': {requiredLength: minLength, actualLength: value ? value.length : 0}};
    }

    return null;
  };
}
