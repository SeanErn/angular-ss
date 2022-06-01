import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlist-deployment-spy',
  templateUrl: './enlist-deployment-spy.component.html',
  styleUrls: ['./enlist-deployment-spy.component.scss']
})
export class EnlistDeploymentSpyComponent implements OnInit {

  charHard() {
    //80% chance to return true
    var math = Math.random() < 0.4;
    if (math === true) {
      window.location.replace('/articles/e86f50c4-f692-4081-bf00-4f15656ea76f')
    } else {
      window.location.replace('/articles/3820970a-2be0-4e6a-a7f3-f5f6a235bd36')
    }
      return
    }
  constructor() { }

  ngOnInit(): void {
  }

}
