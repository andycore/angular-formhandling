import {AfterViewInit, Component} from '@angular/core';
import {FormService} from "../../modules/form/services/form.service";
import {FormConfigModel, FormControlType} from "../../modules/form/models/form-config.model";
import {Validators} from "@angular/forms";
import {
  delayedErrorValidator,
} from "../../modules/form/validators/async/delayed-error.validator";

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {

  public formConfig: FormConfigModel = {
    leftSide: [
      {
        id: 'validation1',
        name: 'validation1',
        type: FormControlType.INPUT,
        validatiors: [Validators.required],
        validatiorsAsync: [],
        description: 'Feld mit Sync Validator'
      }
    ],
    rightSide: [
      {
        id: 'validation2',
        name: 'validation2',
        type: FormControlType.INPUT,
        validatiors: [],
        validatiorsAsync: [delayedErrorValidator()],
        description: 'Feld mit Async Validator'
      }

    ],
  }

  constructor(public formService: FormService) {
    this.formService.createFormGroup(this.formConfig);
  }
}
