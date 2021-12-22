import { Component, OnInit } from '@angular/core';
import { Goods } from '../goods/goods';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  items!: any;
  
  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }
  
  ngOnInit(): void {
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
  }

  delete(itemTitle: string): void {
    let index = this.items.findIndex((x: any) => x.title == itemTitle);
    this.items.splice(index, 1); 
  }
}
