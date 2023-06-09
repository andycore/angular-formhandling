import {Component} from '@angular/core';
import {FormService} from "../../modules/form/services/form.service";
import {
  FormCheckboxGroup,
  FormConfigModel,
  FormControlType, FormRadioGroup,
} from "../../modules/form/models/form-config.model";

@Component({
  selector: 'app-form-feedback',
  templateUrl: './form-feedback.component.html',
  styleUrls: ['./form-feedback.component.css']
})
export class FormFeedbackComponent {

  public formConfig: FormConfigModel = {
    leftSide: [
      {id: 'vorname', name: 'vorname', type: FormControlType.INPUT, placeholder: 'Vorname'},
      {id: 'nachname', name: 'nachname', type: FormControlType.INPUT, placeholder: 'Nachname'},
      {
        id: 'radio',
        name: 'radiobutton',
        type: FormControlType.RADIO,
        value: 'radio2',
        options: [
          {value: 'radio1', label: 'Radio 1'},
          {value: 'radio2', label: 'Radio 2'},
        ]
      } as FormRadioGroup
    ],
    rightSide: [
      {id: 'etwas', name: 'etwas', type: FormControlType.INPUT, placeholder: 'Sonstiges'},
      {
        id: 'checkboxGroup',
        name: 'checkboxGroup',
        type: FormControlType.CHECKBOX_GROUP,
        value: ['option1', 'option2'],
        options: [
          {value: 'option1', label: 'Option 1'},
          {value: 'option2', label: 'Option 2'},
          {value: 'option3', label: 'Option 3'},
          {value: 'option4', label: 'Option 4'}
        ]
      } as FormCheckboxGroup,
    ],
    center: [
      {
        id: 'email', name: 'email', type: FormControlType.SELECT, placeholder: 'E-Mail',
        options: [
          {value: 'options value 1', label: 'Text Label 1', checked: true},
          {value: 'options value 2', label: 'Text Label 2'},
          {value: 'options value 3', label: 'Text Label 3'},
          {value: 'options value 4', label: 'Text Label 4'},
        ]
      }
    ]
  }

  constructor(public frmService: FormService) {
    this.frmService.createFormGroup(this.formConfig);
  }


}
