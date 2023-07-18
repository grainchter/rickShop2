import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemsService } from 'src/app/services/items.service';

import { Router } from '@angular/router';
import { catchError, of, throwError } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  items: any;
  currentItem: any;

  status = ['Alive', 'Dead', 'unknown'];

  gender = ['Female', 'Male', 'Genderless', 'unknown'];

  species = [
    'Alien',
    'Animal',
    'Human',
    'Humanoid',
    'Mytholog',
    'Poppybutthole',
    'Robot',
    'unknown',
  ];

  constructor(private itemsService: ItemsService, private router: Router) {}

  filterForm = new FormGroup({
    search: new FormControl(''),
    gender: new FormControl(''),
    species: new FormControl(''),
    status: new FormControl(''),
  });

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    if (this.filterForm.value) {
      const http$ = this.itemsService.getItems(this.filterForm.value);

      http$
        .pipe(catchError((err) => of([])))
        .subscribe((items) => (this.items = items));
    }
  }

  getItemsByUrl(url: string) {
    this.itemsService
      .getItemsByUrl(url)
      .subscribe((items) => (this.items = items));
  }

  getResults() {
    return this.items?.results;
  }

  modal(name: any) {
    this.currentItem = name;
  }

  getPrevPage() {
    let info = this.items?.info;
    
    return info ? info.prev : null;
  }

  getNextPage() {
    let info = this.items?.info;

    return info ? info.next : null;
  }

  clearFilter() {
    this.filterForm.reset();
    this.getItems()
  }

  detail(characterId: number): void {
    this.router.navigate(['items', characterId]);
  }
}
