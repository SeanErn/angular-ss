import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-daythree-fail',
  templateUrl: './daythree-fail.component.html',
  styleUrls: ['./daythree-fail.component.scss']
})
export class DaythreeFailComponent implements OnInit {


  charExpert() {
    //80% chance to return true
    var math = Math.random() < 0.2;
    if (math === true) {
  window.location.replace('/articles/')

    } else {
  //send sweet alert 2 message
    }
      return
    }
    

  constructor() { }

  ngOnInit(): void {
  }

}
