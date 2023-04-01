import {Component, Input, OnInit} from '@angular/core';
import {MasterControlComponent} from "../../master-control.component";
import {FormControls, FormRadioGroup} from "../../../models/form-config.model";

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent extends MasterControlComponent implements OnInit {
  @Input() override controlConfig: FormControls = {} as FormRadioGroup;
}
