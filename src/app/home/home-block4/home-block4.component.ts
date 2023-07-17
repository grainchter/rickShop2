import { Component } from '@angular/core';
import { QaSlideInterface } from 'src/app/slider/types/slide.interface';

@Component({
  selector: 'app-home-block4',
  templateUrl: './home-block4.component.html',
  styleUrls: ['./home-block4.component.scss'],
})
export class HomeBlock4Component {
  slides: QaSlideInterface[] = [
    {
      question: 'вопрос',
      answer: 'ответ1',
    },
    {
      question: 'вопрос',
      answer: 'ответ2',
    },
    {
      question: 'вопрос',
      answer: 'ответ3',
    },
    {
      question: 'вопрос',
      answer: 'ответ4',
    },
  ];
}
