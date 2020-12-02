import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuDeliveryPage } from './menu-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: MenuDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuDeliveryPageRoutingModule {}
