import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent implements OnInit {
  alertClass = 'alert-danger';

  propiedades = {
    danger: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
