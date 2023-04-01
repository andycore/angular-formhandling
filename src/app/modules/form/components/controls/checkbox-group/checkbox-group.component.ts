import {Component, Input} from '@angular/core';
import {FormCheckboxGroup, FormControls} from "../../../models/form-config.model";
import {MasterControlComponent} from "../../master-control.component";
import {AbstractControl, FormArray, FormControl} from "@angular/forms";

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css']
})
export class CheckboxGroupComponent extends MasterControlComponent {
  @Input() override controlConfig: FormControls = {} as FormCheckboxGroup;

  /**
   * Build FormArray with values from controlConfig from the checked checkboxes
   * @param event
   */
  onChange(event: any) {
    const checkArray: FormArray = this.frmGroup.get(this.controlConfig.name) as FormArray;
    if (event.target.checked) {
      checkArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: AbstractControl) => {
        if (item.value == event.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

}
