import {Component, Input} from '@angular/core';
import {MasterControlComponent} from "../../master-control.component";
import {FormControls, FormSelect} from "../../../models/form-config.model";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent extends MasterControlComponent {
  @Input() override controlConfig: FormControls = {} as FormSelect;

}
