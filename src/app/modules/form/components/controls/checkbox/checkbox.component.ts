import {Component, Input} from '@angular/core';
import {MasterControlComponent} from "../../master-control.component";
import {FormControls} from "../../../models/form-config.model";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent extends MasterControlComponent {
  @Input() override controlConfig: FormControls = {} as FormControls;
}
