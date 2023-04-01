import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {Page1Component} from './components/page1/page1.component';
import {FormModule} from "./modules/form/form.module";
import {FormService} from "./modules/form/services/form.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './components/header/header.component';
import {FormErrorComponent} from './components/form-error/form-error.component';
import {FormValidationComponent} from './components/form-validation/form-validation.component';
import {FormFeedbackComponent} from './components/form-feedback/form-feedback.component';
import {FormUpdateComponent} from './components/form-update/form-update.component';


export const routes: Routes = [
  {path: '', redirectTo: 'page1', pathMatch: 'full'},
  {path: 'page1', component: Page1Component, data: {title: 'Page 1'}},
  {path: 'form-error', component: FormErrorComponent, data: {title: 'Form Error'}},
  {path: 'form-validation', component: FormValidationComponent, data: {title: 'Form Validation'}},
  {path: 'form-feedback', component: FormFeedbackComponent, data: {title: 'Form Feedback'}},
  {path: 'form-update', component: FormUpdateComponent, data: {title: 'Form Update'}}
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    HeaderComponent,
    FormErrorComponent,
    FormValidationComponent,
    FormFeedbackComponent,
    FormUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    FormModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
