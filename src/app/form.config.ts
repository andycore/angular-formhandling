import {
  FormCheckboxGroup,
  FormConfigModel,
  FormControlType,
  FormInput,
  FormSelect
} from "./modules/form/models/form-config.model";


export const formConfig: FormConfigModel = {
  group1: [
    {
      id: 'text1',
      name: 'text1',
      value: 'Tolle Wurst',
      type: FormControlType.INPUT,
      label: 'Text 1',
      description: 'This is a example description',
    } as FormInput,
    {
      id: 'text2',
      name: 'text2',
      type: FormControlType.INPUT,
      label: 'Text 2',
      placeholder: 'Placeholder',
    } as FormInput,
    {
      id: 'select1',
      name: 'select1',
      type: FormControlType.SELECT,
      options: [
        {value: 'options value 1', label: 'Text Label 1', checked: true},
        {value: 'options value 2', label: 'Text Label 2'},
        {value: 'options value 3', label: 'Text Label 3'},
      ],
      description: 'This is a example description for Select elements',
    } as FormSelect,
    {
      id: 'checkboxGroup',
      name: 'checkboxGroup',
      type: FormControlType.CHECKBOX_GROUP,
      options: [
        {value: 'option1', label: 'Option 1', checked: true},
        {value: 'option2', label: 'Option 2'},
        {value: 'option3', label: 'Option 3'}
      ],
      description: 'This is a example description for Checkbox elements',
    } as FormCheckboxGroup,
  ],
  group2: [
    {
      id: 'text3',
      name: 'text3',
      type: FormControlType.INPUT,
      label: 'Text 3 (group 2)',
    } as FormInput,
    {
      id: 'radioGroup',
      name: 'radioButtons',
      type: FormControlType.RADIO,
      value: 'option2',
      options: [
        {value: 'option1', label: 'Option 1'},
        {value: 'option2', label: 'Option 2', checked: true},
        {value: 'option3', label: 'Option 3'}
      ],
    } as FormCheckboxGroup,
  ]
}