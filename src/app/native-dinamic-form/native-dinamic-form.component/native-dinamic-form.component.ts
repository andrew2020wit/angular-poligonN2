import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from '../model/question-base';
import { QuestionService } from '../model/question.service';

@Component({
  selector: 'app-native-dinamic-form',
  templateUrl: './native-dinamic-form.component.html',
  styleUrls: ['./native-dinamic-form.component.scss'],
})
export class NativeDinamicFormComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {}
}
