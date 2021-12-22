import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { GoodsComponent } from './goods/goods.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { OwnComponent } from './own/own.component';

const routes: Routes = [
  {path: 'modal/:title', component: ModalComponent},
  {path: 'home', component: HomeComponent},
  {path: 'goods', component: GoodsComponent},
  {path: 'own', component: OwnComponent},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
