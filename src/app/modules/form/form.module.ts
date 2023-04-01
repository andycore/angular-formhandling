import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from './components/controls/input/input.component';
import {FormComponent} from './components/form/form.component';
import {DropdownComponent} from './components/controls/dropdown/dropdown.component';
import {CheckboxGroupComponent} from './components/controls/checkbox-group/checkbox-group.component';
import {RadioGroupComponent} from './components/controls/radio-group/radio-group.component';
import {ErrorComponent} from './components/form/error/error.component';


@NgModule({
  declarations: [
    InputComponent,
    FormComponent,
    DropdownComponent,
    CheckboxGroupComponent,
    RadioGroupComponent,
    ErrorComponent
  ],
  exports: [
    InputComponent,
    FormComponent,
    DropdownComponent,
    CheckboxGroupComponent,
    RadioGroupComponent,
    ErrorComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class FormModule {
}
