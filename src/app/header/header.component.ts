import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private cartService: CartService,) { 
    
  }
  
  ngOnInit(): void {
  }

  cartItems = this.cartService.items;
  
}
