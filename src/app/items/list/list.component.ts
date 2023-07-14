import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemsService } from 'src/app/services/items.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  items:any;
  currentItem:any;
  
  constructor(private itemsService: ItemsService, private router: Router) {
  
  }
  
  filterForm = new FormGroup({
    search: new FormControl(''),
    gender: new FormControl(''),
  });
  
  ngOnInit() {
    this.getItems();
  }
  
  getItems(): void {
    if (this.filterForm.value) {
      this.itemsService.getItems(this.filterForm.value)
      .subscribe(items => this.items = items);
    }
  }
  
  getItemsByUrl(url:string) {
    this.itemsService.getItemsByUrl(url)
    .subscribe(items => this.items = items);
  }
  
  getResults() {
    return this.items?.results;
  }
  
  modal(name:any) {
  this.currentItem = name
  }
  
  getPrevPage() {
    let info =  this.items?.info;
    return info.prev
  }
  
  getNextPage() {
    let info =  this.items?.info;
    console.log(info);
    
    return info.next
  }
  
  detail(characterId: number): void {    
    this.router.navigate(['items', characterId]);
  }
}
