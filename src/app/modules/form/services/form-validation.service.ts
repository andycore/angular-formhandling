import {Injectable} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {filter, map, Observable, of} from "rxjs";

/**
 * Form Validation Service. Get all errors for a form or a specific control.
 * @export FormValidationService class to get all errors for a form or a specific control.
 * @class FormValidationService
 * @example this.formValidationService.getErrorMessages(this.formGroup);
 * @example this.formValidationService.getControlErrors(this.formGroup.get('name'));
 * @example this.formValidationService.getControlErrors(this.formGroup.get('name').get('firstName'));
 */
@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  /**
   * Get all errors for a form
   * @param form
   * @example this.formValidationService.getErrorMessages(this.formGroup);
   */
  public getErrorMessages(form: FormGroup): {[key:string]: string[]} {
    const messages: {[key:string]: string[]} = {};

    Object.keys(form.controls).forEach(key => {
      const ctrl = form.get(key);
      if (ctrl instanceof AbstractControl) {
        const controlErrors = ctrl.errors;
        if (controlErrors != null) {
          messages[key] = [];
          Object.keys(controlErrors).forEach(keyError => {
            messages[key].push(this.getErrorMessage(keyError, controlErrors[keyError]));
          });
        }
      }
    });
    return messages;
  }

  /**
   * Get all errors for a specific control (only sync validation)
   * @param control
   * @example this.formValidationService.getControlErrors(this.formGroup.get('name'));
   */
  public async getControlErrors(control: AbstractControl | null): Promise<string[]> {
    const messages: string[] = [];
    if (control && control.errors != null) {
      Object.keys(control.errors).forEach(keyError => {
        if (control.errors && control.errors.hasOwnProperty(keyError)) {
          messages.push(this.getErrorMessage(keyError, control.errors[keyError]));
        }
      });
    }
    return messages;
  }


  /**
   * Get all errors for a specific control with async validation
   * @param control
   * @example this.formValidationService.exampleObserveErrors$(this.formGroup.get('name')).subscribe((errors) => console.log(errors));
   */
  public exampleObserveErrors$(control?: AbstractControl | null): Observable<{
    validator: string,
    state: any,
    message: string
  }[]> {
    if (control) {
      return control?.statusChanges.pipe(
        filter(status => status === 'INVALID' || status === 'PENDING'),
        map((status) => {
          const errors: { validator: string, state: any, message: string }[] = [];

          if (status === 'PENDING') {
            errors.push({validator: 'status', state: status, message: 'status'});
          }
          this.getControlErrors(control).then((messages) => {
            messages.forEach((message) => {
              errors.push({validator: 'message', state: message, message: message});
            });
          });

          return errors;
        })
      );
    } else {
      return of([]);
    }
  }


  /**
   * Get error message for specific error identifier
   * @param keyError
   * @param value
   * @private
   */
  private getErrorMessage(keyError: string, value: any): string {
    switch (keyError) {
      case 'delayedError':
        return 'Exemplarisch asynchroner Fehler';
      case 'required':
        return 'Dieses Feld ist erforderlich';
      case 'phoneValidator':
        return 'Dieses Feld erfordert eine Telefonnummer im Format +49 000 0000000000';
      case 'minLength':
        return `Mind. ${value.requiredLength} Zeichen`;
      case 'maxLength':
        return `Max. ${value.requiredLength} Zeichen`;
      case 'pattern':
        return 'Format falsch';
      case 'trimmedNotEmpty':
        return 'Bitte etwas auswählen';
      default:
        return `Validation error: ${JSON.stringify(value)}`;
    }
  }
}
