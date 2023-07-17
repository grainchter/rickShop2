import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QaSliderComponent } from './qaSlider/qa-slider.component';


@NgModule({
  imports: [CommonModule],
  exports: [QaSliderComponent],
  declarations: [QaSliderComponent],
})
export class QaSliderModule {}