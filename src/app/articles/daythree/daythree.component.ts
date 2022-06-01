import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daythree',
  templateUrl: './daythree.component.html',
  styleUrls: ['./daythree.component.scss']
})
export class DaythreeComponent implements OnInit {

  charExpert() {
    //80% chance to return true
    var math = Math.random() < 0.2;
    if (math === true) {
      //pass
      window.location.replace('/articles/816613be-161b-4f62-8f17-f1cfa1685ac2')

    } else {
      //fails
      window.location.replace('/articles/02a11d5e-2318-49e4-bb6d-cb6dc7fbb93b')

    }
      return
    }

  constructor() { }

  ngOnInit(): void {
  }

}
