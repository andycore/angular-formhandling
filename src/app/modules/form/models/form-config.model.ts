// Form Configuration
import {AsyncValidatorFn, ValidatorFn} from "@angular/forms";

export type FormControls = FormInput | FormSelect | FormCheckboxGroup;

export interface FormConfigModel {
  [key: string]: Array<FormControls>;
}

// Base Interface for all form controls
export interface FormControlConfig {
  id: string,
  name: string,
  type: FormControlType,
  label?: string,
  value?: any,
  placeholder?: string
  disabled?: boolean,
  required?: boolean,
  validatiors?: ValidatorFn[],
  validatiorsAsync?: AsyncValidatorFn[],
  description?: string,
  inputGroup?: inputGroupConfig,
}


// Form Control Interfaces for Input Elements
export interface FormInput extends FormControlConfig {
  value?: string | null,
}

// Form Control Interfaces for Select Elements
export interface FormSelect extends FormControlConfig {
  options: FormElementOptions[],
  value: string | null
}

// Form Control Interfaces for Checkbox Group Elements
export interface FormCheckboxGroup extends FormControlConfig {
  options: FormElementOptions[],
  value: string[]
}

export interface FormRadioGroup extends FormControlConfig {
  value: string | null,
  options: FormElementOptions[]
}

// Form Control Interfaces for Radio Group Elements and Dropdown lists
export interface FormElementOptions {
  value: string | null,
  label: string,
  checked?: boolean
}

// Define label and icon for input group
export interface inputGroupConfig {
  site: 'left' | 'right',
  text?: string,
  icon?: string,
}

// Enum for all form control types
export enum FormControlType {
  INPUT = 'input',
  PASSWORD = 'password',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  CHECKBOX_GROUP = 'checkbox-group',
  RADIO = 'radio',
  DROPDOWN = 'dropdown',
  TEXTAREA = 'textarea',
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
