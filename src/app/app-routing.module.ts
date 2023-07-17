import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ItemsComponent } from './items/items.component';
import { DetailComponent } from './items/detail/detail.component';
import { ListComponent } from './items/list/list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    children: [
      {
        path: 'items',
        component: ListComponent,
      },
      {
        path: 'items/:id',
        component: DetailComponent,
      },
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
