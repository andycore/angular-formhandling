import {Component, Input} from '@angular/core';
import {FormControls, FormControlType} from "../../models/form-config.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: []
})
export class FormComponent {
  @Input() config: FormControls[] = [];
  public typeEnum = FormControlType;
}
