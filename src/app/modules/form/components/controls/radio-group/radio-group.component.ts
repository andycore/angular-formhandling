import {Component, Input} from '@angular/core';
import {MasterControlComponent} from "../../master-control.component";
import {FormCheckboxGroup, FormControls} from "../../../models/form-config.model";

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css']
})
export class RadioGroupComponent extends MasterControlComponent {
  @Input() override controlConfig: FormControls = {} as FormCheckboxGroup;
}
