import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';

  ngOnInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
    });
  }
}
