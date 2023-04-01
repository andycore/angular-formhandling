import {Injectable} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {
  FormCheckboxGroup,
  FormConfigModel, FormControls,
  FormControlType,
  FormInput, FormRadioGroup,
  FormSelect
} from "../models/form-config.model";
import {FormValidationService} from "./form-validation.service";
import {Observable} from "rxjs";


/**
 * Form Service
 * @description This service is responsible for creating the form group and the form controls
 * @export FormService class
 * @class FormService
 * @example this.formService.createFormGroup(this.formConfig);
 * @example this.formService.formGroup.valueChanges.subscribe((value) => console.log(value));
 * @example this.formService.formGroup.controls['text1'].valueChanges.subscribe((value) => console.log(value));
 * @example this.formService.formGroup.controls['text1'].setValue('Hello World');
 * @example this.formService.formGroup.controls['text1'].reset();
 * @example this.formService.formGroup.controls['text1'].markAsTouched();
 */
@Injectable({
  providedIn: 'root'
})
export class FormService {
  public formGroup: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private frmValidationService: FormValidationService) {
  }

  /**
   * Build Form Group
   * @param config
   * @example this.formService.createFormGroup(this.formConfig);
   */
  public createFormGroup(config: FormConfigModel): FormGroup {
    this.formGroup = this.fb.group({});
    for (const key in config) {
      if (config.hasOwnProperty(key)) {
        const controls = config[key];
        for (const control of controls) {
          const ctrl = control as FormControls;
          switch (control.type) {
            case FormControlType.INPUT:
              this.formGroup.addControl(ctrl.name, this.createInputControl(control as FormInput));
              break;
            case FormControlType.SELECT:
              this.formGroup.addControl(ctrl.name, this.createSelectControl(control as FormSelect));
              break;
            case FormControlType.CHECKBOX_GROUP:
              this.formGroup.addControl(ctrl.name, this.createCheckboxGroupControl(control as FormCheckboxGroup));
              break;
            case FormControlType.RADIO:
              this.formGroup.addControl(ctrl.name, this.createRadioGroupControl(control as FormRadioGroup));
              break;
            default:
              break;
          }
        }
      }
    }
    return this.formGroup;
  }

  /**
   * Create input control
   * @param config
   * @private
   * @example this.formService.createInputControl(this.formConfig.text1);
   */
  private createInputControl(config: FormInput) {
    return new FormControl(config.value || '', config.validatiors, config.validatiorsAsync);
  }

  /**
   * Create select control
   * @param config
   * @private
   * @example this.formService.createSelectControl(this.formConfig.select1);
   */
  private createSelectControl(config: FormSelect) {
    const selected = config.options.find(option => option.checked);
    return new FormControl(selected ? selected.value : '' || '', config.validatiors, config.validatiorsAsync);
  }

  /**
   * Create checkbox groups
   * @param config
   * @private
   * @example this.formService.createCheckboxGroupControl(this.formConfig.checkboxGroup1);
   */
  private createCheckboxGroupControl(config: FormCheckboxGroup) {
    const controlArray: FormControl[] = [];
    config.options.forEach(option => {
      if (option.checked)
        controlArray.push(new FormControl(option.value));
    });
    return new FormArray(controlArray);
  }

  /**
   * Create Radio-Button group
   * @param config
   * @private
   */

  private createRadioGroupControl(config: FormRadioGroup) {
    return new FormControl(config.value || '', config.validatiors, config.validatiorsAsync);
  }

  /**
   * Submit form
   */
  public submit() {
    this.updateValueAndValidity();
    this.formGroup.markAsTouched();
    Object.values(this.formGroup.controls).forEach(control => {
      control.markAsTouched();
      control.markAsDirty();
      control.updateValueAndValidity();
    });
  }


  /**
   * Return error messages for specific FormControl
   * @param controlName
   * @example this.formService.getErrorMessages('text1').then((messages) => console.log(messages));
   * @example await this.formService.getErrorMessages('text1');
   */
  public async getErrorMessages(controlName: string): Promise<string[]> {
    return this.frmValidationService.getControlErrors(this.formGroup.get(controlName));
  }

  public getErrorMessagesObserve$(controlName: string): Observable<{
    validator: string,
    state: any,
    message: string
  }[]> {
    return this.frmValidationService.exampleObserveErrors$(this.formGroup.get(controlName));
  }


  /**
   * return error messages for all form controls as Array
   * @example this.formService.getFormErrorMessages();
   */
  public getFormErrorMessages(): { [key: string]: string[] } {
    return this.frmValidationService.getErrorMessages(this.formGroup);
  }

  /**
   * Update Value and Validation
   * @example this.formService.updateValueAndValidity();
   */
  public updateValueAndValidity() {
    this.formGroup.updateValueAndValidity({emitEvent: true});
  }

}
