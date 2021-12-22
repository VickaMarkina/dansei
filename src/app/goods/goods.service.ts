import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GOODS } from './data.goods';
import { Goods } from './goods';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor() { }

  getGoods(): Observable<Goods[]> {
    const goods = of(GOODS);
    return goods;
  }

  getGood(title: string): Observable<Goods> {
    const good = GOODS.find(t => t.title === title)!;
    return of(good);
  }
}
