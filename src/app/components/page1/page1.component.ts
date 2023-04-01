import {Component, OnInit} from '@angular/core';
import {formConfig} from "../../form.config";
import {FormService} from "../../modules/form/services/form.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  public formConfig = formConfig;
  public group: FormGroup = new FormGroup({});

  constructor(public formService: FormService) {
  }

  ngOnInit() {
    // Init Form Config
    this.group = this.formService.createFormGroup(this.formConfig);
  }
}
