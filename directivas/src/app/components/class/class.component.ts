import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent implements OnInit {
  alertClass = 'alert-danger';
  loading:boolean = false;

  propiedades = {
    danger: false
  };

  constructor() { }

  ngOnInit(): void {
  }
  ejecutar(){
    this.loading = true;

    setTimeout(() => this.loading = false, 3000 );
  }
}
