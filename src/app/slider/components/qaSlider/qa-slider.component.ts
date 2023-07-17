import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  interval,
  Observable,
  startWith,
  Subject,
  switchMap,
  timer,
} from 'rxjs';
import { QaSlideInterface, SlideInterface } from '../../types/slide.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'qa-slider',
  templateUrl: './qa-slider.component.html',
  styleUrls: ['./qa-slider.component.scss'],
})
export class QaSliderComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  @Input() slides: QaSlideInterface[] = [];

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentQuestion() {
    return this.slides[this.currentIndex].question;
  }

  getCurrentAnswer() {
    return this.slides[this.currentIndex].answer;
  }

  getNextQuestion() {
    return this.slides[this.currentIndex] ===
      this.slides[this.slides.length - 1]
      ? this.slides[0].question
      : this.slides[this.currentIndex + 1].question;
  }

  getNextAnswer() {
    return this.slides[this.currentIndex] ===
      this.slides[this.slides.length - 1]
      ? this.slides[0].answer
      : this.slides[this.currentIndex + 1].answer;
  }

  detail(characterId: number): void {
    this.router.navigate(['items', characterId]);
  }
}
