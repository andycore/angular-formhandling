import {Component, Input} from '@angular/core';
import {FormControlConfig} from "../../../models/form-config.model";

@Component({
  selector: 'app-input-group',
  template: `
      <ng-template #contentInput>
          <ng-content></ng-content>
      </ng-template>
      <ng-template #inputGroupElement>
          <div class="input-group">
              <!-- place input field first for the right site icon / text -->
              <ng-container *ngIf="config.inputGroup?.site==='right' || !config.inputGroup?.site">
                  <ng-container *ngTemplateOutlet="contentInput"></ng-container>
              </ng-container>
              <!-- Input Group content (icon, Text). Both possible! -->
              <label class="input-group-text" *ngIf="config.inputGroup">
                  <span *ngIf="config?.inputGroup?.text">{{config.inputGroup.text}}</span>
                  <i *ngIf="config.inputGroup?.icon" [ngClass]="config.inputGroup.icon" class="bi"></i>
              </label>
              <!-- place input field last for the left site icon / text -->
              <ng-container *ngIf="config.inputGroup?.site==='left'">
                  <ng-container *ngTemplateOutlet="contentInput"></ng-container>
              </ng-container>
          </div>
      </ng-template>
      <div class="form-group">
          <ng-container *ngTemplateOutlet="inputGroupElement"></ng-container>
      </div>
  `,
  styles: []
})
export class InputGroupComponent {
  @Input() config: FormControlConfig = {} as FormControlConfig;
}
