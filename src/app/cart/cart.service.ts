import { Injectable } from '@angular/core';
import { Goods } from '../goods/goods';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Goods[] = [];

  constructor() { }

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items.length = 0;
  }
}
