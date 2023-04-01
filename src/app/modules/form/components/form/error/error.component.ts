import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormService} from "../../../services/form.service";
import {FormControls} from "../../../models/form-config.model";
import {from, map, Observable, of, switchAll} from "rxjs";
import {AbstractControl} from "@angular/forms";

/**
 * Error Component. Display error messages for a given control by control config.
 * @example <app-error [controlConfig]="controlConfig"></app-error>
 */
@Component({
  selector: 'app-error',
  template: `
    <div *ngFor="let e of errors$ | async" class="text-danger">
        <span *ngIf="e.validator==='status' && e.state==='PENDING'">
          <span class="spinner-border text-danger" role="status">
            <span class="sr-only"></span>
          </span> validate...
        </span>
      <span *ngIf="e.validator==='message'">{{e.message}}</span>
    </div>`,
  styles: ['.spinner-border { width: 1rem; height: 1rem; }']
})
export class ErrorComponent implements OnInit {
  /**
   * Current Form Control configuration
   */
  @Input() controlConfig: FormControls = {} as FormControls;
  /**
   * Observable of error messages.
   * Subscribe to this observable to get error messages for every Control who is touched and dirty.
   */
  public errors$: Observable<{ validator: string; state: any; message: string; }[]> | undefined = undefined;


  constructor(public formService: FormService) {
  }

  /**
   * Subscribe to error messages observable
   */
  ngOnInit() {
    if (this.controlConfig && this.controlConfig.name) {
      this.errors$ = this.formService.getErrorMessagesObserve$(this.controlConfig.name);
    }
  }

}
