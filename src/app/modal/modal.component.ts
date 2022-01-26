import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Goods } from '../goods/goods';
import { GoodsService } from '../goods/goods.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  good!: Goods ;

  constructor( 
    private goodsService: GoodsService,
    private route: ActivatedRoute, 
    private location: Location, 
    private cartService: CartService,) { }

  ngOnInit(): void {
    this.getGood();
  }

  getGood() {
    const title = String(this.route.snapshot.paramMap.get('title'));
    this.goodsService.getGood(title)
    .subscribe(good => this.good = good);
    return this.good
  }

  addToCart(good: any, event: any) {
    this.cartService.addToCart(good);

    const e = event;
    e.target.disabled = true;
    e.target.innerHTML = 'Товар добавлен в корзину';

    setTimeout(() => {return e.target.disabled = false, e.target.innerHTML = 'Купить'; 
    },2000)
  }

  goBack(): void {
    this.location.back();
  }


}
