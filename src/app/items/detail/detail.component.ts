import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  item: any;
  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
    this.getItem(id);
    }

  }

  getItem(id: string) {
    this.itemsService.getCharacter(id).subscribe((item) => (this.item = item));
  }
}
