import {Component, Input} from '@angular/core';
import {FormCheckboxGroup, FormControls} from "../../../models/form-config.model";
import {MasterControlComponent} from "../../master-control.component";

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css']
})
export class CheckboxGroupComponent extends MasterControlComponent {
  @Input() override controlConfig: FormControls = {} as FormCheckboxGroup;

}
