import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-home-block1',
  templateUrl: './home-block1.component.html',
  styleUrls: ['./home-block1.component.scss'],
})
export class HomeBlock1Component {
  items: any = [];
  constructor(private itemsService: ItemsService, private router: Router) {}

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemsService
      .getItems()
      .subscribe((items) => this.createItems(items.info));
  }

  createItems(items: any) {
    const idArr = this.generateArray(8, items.count);

    idArr.forEach((id) => {
      this.itemsService
        .getCharacter(id)
        .subscribe((item) => this.items.push(item));
    });
  }

  generateArray(length: any, max: any) {
    return [...new Array(length)].map(() => Math.round(Math.random() * (max - 1) + 1));
  }

  detail(characterId: number): void {    
    this.router.navigate(['items', characterId]);
  }
}
