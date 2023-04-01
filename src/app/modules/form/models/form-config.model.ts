// Form Configuration
import {AsyncValidatorFn, ValidatorFn} from "@angular/forms";

export type FormControls = FormInput | FormSelect | FormCheckboxGroup;

export interface FormConfigModel {
  [key: string]: Array<FormControls>;
}

// Base Interface for all form controls
interface FormControlConfig {
  id: string,
  name: string,
  type: FormControlType,
  label?: string,
  placeholder?: string
  value?: string | null,
  readonly?: boolean,
  required?: boolean,
  validatiors?: ValidatorFn[],
  validatiorsAsync?: AsyncValidatorFn[],
  description?: string
}


// Form Control Interfaces for Input Elements
export interface FormInput extends FormControlConfig {
}

// Form Control Interfaces for Select Elements
export interface FormSelect extends FormControlConfig {
  options: FormOptionsModel[]
}

// Form Control Interfaces for Checkbox Group Elements
export interface FormCheckboxGroup extends FormControlConfig {
  options: FormOptionsModel[]
}

// Form Control Interfaces for Radio Group Elements and Dropdown lists
export interface FormOptionsModel {
  value: string | null,
  label: string,
  checked?: boolean
}

// Enum for all form control types
export enum FormControlType {
  INPUT = 'input',
  PASSWORD = 'password',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  DROPDOWN = 'dropdown',
  TEXTAREA = 'textarea',
  RADIO = 'radio',
  CHECKBOX_GROUP = 'checkbox-group',
  DATE = 'date',
  TIME = 'time',
  DATETIME = 'datetime',
  DATETIME_LOCAL = 'datetime-local',
  NUMBER = 'number',
  RANGE = 'range',
  COLOR = 'color',
  EMAIL = 'email',
  SEARCH = 'search',
  TEL = 'tel',
  URL = 'url',
  WEEK = 'week',
  MONTH = 'month',
  FILE = 'file',
  HIDDEN = 'hidden',
  IMAGE = 'image',
  RESET = 'reset',
  SUBMIT = 'submit',
}
