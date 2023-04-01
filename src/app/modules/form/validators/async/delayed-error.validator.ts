import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';


/**
 * example for an async validator that returns a negative feedback after a random delay between 2 and 3 seconds
 */
export function delayedErrorValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
    return of({delayedError: {value: true}}).pipe(delay(2000 + Math.random() * 1000)); // delay between 2 and 3 seconds
  };
}

