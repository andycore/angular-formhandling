import {Component, Input} from '@angular/core';
import {MasterControlComponent} from "../../master-control.component";
import {FormControls, FormInput} from "../../../models/form-config.model";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends MasterControlComponent {
  @Input() override controlConfig: FormControls = {} as FormInput;
}
