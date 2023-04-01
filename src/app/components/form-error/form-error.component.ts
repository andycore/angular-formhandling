import {Component} from '@angular/core';
import {FormService} from "../../modules/form/services/form.service";
import {FormConfigModel, FormControlType} from "../../modules/form/models/form-config.model";
import {minLengthValidator} from "../../modules/form/validators/min-length.validator";
import {Validators} from "@angular/forms";
import {phoneValidator} from "../../modules/form/validators/phone.validator";
import {trimmedNotEmptyValidator} from "../../modules/form/validators/trimmed-not-empty.validator";

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent {
  public formConfig: FormConfigModel = {
    section1: [
      {
        id: 'text1',
        name: 'text1',
        placeholder: 'Placeholder',
        type: FormControlType.INPUT,
        validatiors: [Validators.required, minLengthValidator(3)],
        description: 'Dieses Feld erfordert mindestens 3 Zeichen',
      },
      {
        id: 'telephone',
        name: 'telephone',
        placeholder: 'Telefon',
        type: FormControlType.INPUT,
        validatiors: [Validators.required, phoneValidator()],
        description: 'Deine Telefonnummer',
      },
      {
        id: 'select',
        name: 'dropdown',
        description: 'Auswahl von irgendwas',
        type: FormControlType.SELECT,
        validatiors: [trimmedNotEmptyValidator()],
        value: null,
        options: [
          {value: '', label: 'Bitte wählen'},
          {value: '1', label: 'Option 1'},
          {value: '2', label: 'Option 2'},
        ]
      }
    ]
  }

  constructor(public formService: FormService) {
    this.formService.createFormGroup(this.formConfig);
  }

}
