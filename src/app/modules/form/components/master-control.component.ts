import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {
  FormCheckboxGroup,
  FormControls,
  FormElementOptions,
  FormSelect,
} from "../models/form-config.model";
import {FormService} from "../services/form.service";
import {AbstractControl, FormGroup} from "@angular/forms";
import {Subject, Subscription, takeUntil} from "rxjs";

/**
 * *******************************************************************
 * master control component. Don´t implement this component directly!
 * *******************************************************************
 */
@Component({
  selector: 'app-master-control',
  template: '',
  styleUrls: []
})
export abstract class MasterControlComponent implements OnDestroy, OnInit, AfterViewInit {
  /**
   * Current Form Control configuration
   */
  @Input() controlConfig: FormControls = {} as FormControls;
  /**
   * Emit if control is valid or invalid.
   */
  @Output() isValid: EventEmitter<boolean> = new EventEmitter<boolean>(true);
  /**
   * Emit Control value.
   */
  @Output() value: EventEmitter<any> = new EventEmitter<any>(true);
  /**
   * current FormGroup
   */
  public frmGroup: FormGroup;
  /**
   * Current Form Control
   */
  public currentControl: AbstractControl | undefined;
  private subscription$: Subject<Subscription> = new Subject<Subscription>();

  constructor(protected formService: FormService) {
    this.frmGroup = formService.formGroup;
  }

  /**
   * Lifecycle hook, called when component is destroyed
   */
  public ngOnDestroy() {
    this.subscription$.complete();
  }

  /**
   * Lifecycle hook, called when component is initialized
   */
  public ngOnInit() {
    if (this.controlConfig && this.frmGroup) {
      this.currentControl = this.frmGroup.controls[this.controlConfig.name];
    }
  }

  /**
   * Lifecycle hook, called when component is initialized
   */
  public ngAfterViewInit() {
    if (this.currentControl) {
      this.currentControl
        .valueChanges
        .pipe(takeUntil(this.subscription$))
        .subscribe(() => {
          this.checkControlIsValid();
          this.value.emit(this.currentControl?.value);
        });
    }
  }

  /**
   * Return options for specific control, if options available.
   * Accessible from all other Components who want zu extend from this class.
   */
  public getOptions(): FormElementOptions[] {
    if (this.controlConfig.hasOwnProperty('options')) {
      return (this.controlConfig as FormSelect | FormCheckboxGroup).options;
    }
    return [];
  }

  /**
   * Check if control is valid or invalid
   * @private
   */
  private checkControlIsValid() {
    this.isValid.emit(this.frmGroup.controls[this.controlConfig.name].valid);
  }

}

