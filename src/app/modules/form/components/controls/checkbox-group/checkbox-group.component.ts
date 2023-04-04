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
   * Check if checkbox is checked
   * @param value
   */
  public isChecked(value: string | undefined | null): boolean {
    return (this.controlConfig.value as string[]).includes(value as string);
  }

  /**
   * Build FormArray with values from controlConfig of checked checkboxes
   * @param event
   */
  public onChange(event: any) {
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
