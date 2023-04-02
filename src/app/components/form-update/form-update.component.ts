import {Component} from '@angular/core';
import {FormService} from "../../modules/form/services/form.service";
import {FormConfigModel, FormControlType} from "../../modules/form/models/form-config.model";

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent {
  public configJson: string = '';
  public formConfig: FormConfigModel = {
    form: [
      {
        id: 'name',
        name: 'name',
        type: FormControlType.INPUT,
        label: 'Name',
        value: 'John Doe',
        placeholder: 'Enter your name',
        disabled: true,
      },
      {
        type: FormControlType.SELECT,
        name: 'selectfield',
        id: 'selectfield',
        value: 'select1',
        label: 'Select something',
        options: [
          {value: '', label: 'Please select something'},
          {value: 'select1', label: 'Select 1'},
          {value: 'select2', label: 'Select 2'},
          {value: 'select3', label: 'Select 3'},
        ],
        disabled: true,
      },
      {
        id: 'checkbox',
        name: 'checkbox',
        type: FormControlType.CHECKBOX,
        label: 'Checkbox',
        value: null,
        disabled: true,
      },
      {
        id: 'radio',
        name: 'radio',
        type: FormControlType.RADIO,
        label: 'Group of Radiobuttons',
        value: 'radio2',
        options: [
          {value: 'radio1', label: 'Radio 1'},
          {value: 'radio2', label: 'Radio 2'},
          {value: 'radio3', label: 'Radio 3'},
        ],
        disabled: true,
      },
      {
        id: 'checkboxgroup',
        name: 'checkboxgroup',
        type: FormControlType.CHECKBOX_GROUP,
        label: 'Group of Checkboxes',
        value: ['checkbox1', 'checkbox3'],
        options: [
          {value: 'checkbox1', label: 'Checkbox 1'},
          {value: 'checkbox2', label: 'Checkbox 2'},
          {value: 'checkbox3', label: 'Checkbox 3'},
        ],
        disabled: true,
      },
    ]
  };

  constructor(public frmService: FormService) {
    frmService.createFormGroup(this.formConfig);
    this.configJson = JSON.stringify(this.frmService.formGroup.getRawValue(), null, 2);
  }

  public onConfigChange(event: any) {
    try {
      this.frmService.formGroup.patchValue(JSON.parse(event));
    } catch (e) {
      // Wenn der JSON-String ungültig ist, das formConfig-Objekt auf null setzen
      console.warn('JSON ERROR: ', e);
    }
  }
}
