import { animate, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-own',
  templateUrl: './own.component.html',
  styleUrls: ['./own.component.scss'],
  animations: [
    trigger('animateUp', [
      state('exist', style({
        opacity: 0, transform: 'translateY(50px)'
      })),
      state('became', style({
        opacity: 1, transform: 'none'
      })),
      transition('exist => became', [
        animate('1s')
      ]),
    ])
  ]
})
export class OwnComponent implements OnInit {
  isExpanded:boolean = false
  state: string = 'exist'

  constructor() { }

  ngOnInit(): void {
    this.expand()
  }
   expand() {
    setTimeout(()=> {
     this.isExpanded = !this.isExpanded;
     this.state = this.isExpanded ? 'became' : 'exist'
    }, 1000)
   }

  addForm(event: any) {
    const e = event;
    e.target.disabled = true;
    e.target.innerHTML = 'Форма отправлена. Скоро мы свяжемся с Вами.';

    setTimeout(() => {return e.target.disabled = false, e.target.innerHTML = 'Отправить'; 
    },2000)
  }

}
