import { Component } from '@angular/core';
import { SlideInterface } from 'src/app/slider/types/slide.interface';
@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
})
export class HomeBannerComponent {
  slides: SlideInterface[] = [
    {
      url: '/assets/banner/1.png',
      title: 'Rick Sanchez',
      id: 1,
      species: 'human',
    },
    {
      url: '/assets/banner/2.png',
      title: 'Morty Smith',
      id: 2,
      species: 'human',
    },
    {
      url: '/assets/banner/3.png',
      title: 'Summer Smith',
      id: 3,
      species: 'human',
    },
    {
      url: '/assets/banner/4.png',
      title: 'Beth Smith',
      id: 4,
      species: 'human',
    },
  ];
}
