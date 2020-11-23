import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form.component/dynamic-form.component';
import { QuestionService } from './model/question.service';
import { NativeDinamicFormComponent } from './native-dinamic-form.component/native-dinamic-form.component';

@NgModule({
  declarations: [
    NativeDinamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
  ],
  exports: [
    NativeDinamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
  ],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule],
  providers: [QuestionService],
})
export class NativeDinamicFormModule {}
