import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from './components/controls/input/input.component';
import {FormComponent} from './components/form/form.component';
import {DropdownComponent} from './components/controls/dropdown/dropdown.component';
import {CheckboxGroupComponent} from './components/controls/checkbox-group/checkbox-group.component';
import {RadioComponent} from './components/controls/radio-group/radio.component';
import {ErrorComponent} from './components/form/error/error.component';
import {CheckboxComponent} from './components/controls/checkbox/checkbox.component';
import {InputGroupComponent} from './components/form/input-group/input-group.component';


@NgModule({
  declarations: [
    InputComponent,
    FormComponent,
    DropdownComponent,
    CheckboxGroupComponent,
    RadioComponent,
    ErrorComponent,
    CheckboxComponent,
    InputGroupComponent
  ],
  exports: [
    InputComponent,
    FormComponent,
    DropdownComponent,
    CheckboxGroupComponent,
    RadioComponent,
    ErrorComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class FormModule {
}
