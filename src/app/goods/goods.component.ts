import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { GOODS } from './data.goods';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  goods = GOODS;

  constructor(private cartService: CartService,) { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

}
