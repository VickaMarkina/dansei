import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { GOODS } from '../goods/data.goods';
import { GoodsService } from '../goods/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  goods = GOODS;

  constructor(private goodsService: GoodsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getGoods();
  }

  getGoods(): void {
    this.goodsService.getGoods()
      .subscribe(goods => this.goods = goods.slice(0, 4));
  }


  addToCart(product: any, event: any) {
    this.cartService.addToCart(product);

    const e = event;
    e.target.disabled = true;
    e.target.innerHTML = 'Товар добавлен в корзину';

    setTimeout(() => {return e.target.disabled = false, e.target.innerHTML = 'Купить'; 
    },2000)
  }
}
