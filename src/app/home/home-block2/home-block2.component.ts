import { Component } from '@angular/core';

@Component({
  selector: 'app-home-block2',
  templateUrl: './home-block2.component.html',
  styleUrls: ['./home-block2.component.scss'],
})
export class HomeBlock2Component {
  items: any = [
    {
      img: '/assets/home-block2/1.png',
      description: 'скидки',
    },
    {
      img: '/assets/home-block2/2.png',
      description: 'весь товар сертифицирован',
    },
    {
      img: '/assets/home-block2/3.png',
      description: 'возможность обмена и возврата',
    },
    {
      img: '/assets/home-block2/4.png',
      description: 'бесплатная доставка',
    },
  ];
}
