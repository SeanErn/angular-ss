import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tutorial2',
  templateUrl: './tutorial2.component.html',
  styleUrls: ['./tutorial2.component.scss']
})
export class Tutorial2Component implements OnInit {
  
  charEasy() {
  //80% chance to return true
  var math = Math.random() < 0.8;
  if (math === true) {
//send sweet alert 2 message
Swal.fire({
  title: "wooo. So amazing",
  text: "You have a 80% chance to get this message",
  icon: 'success',
  confirmButtonColor: '#198754',
  confirmButtonText: 'I understand'
})
  } else {
//send sweet alert 2 message
Swal.fire({
  title: "How did you manage that?!",
  text: "You have a 20% chance to get this message",
  icon: 'error',
  confirmButtonColor: '#198754',
  confirmButtonText: 'I understand'
})
  }
    return
  }

  charMed() {
    //80% chance to return true
    var math = Math.random() < 0.6;
    if (math === true) {
  //send sweet alert 2 message
  Swal.fire({
    title: "Thats some luck you got there",
    text: "You have a 60% chance to get this message",
    icon: 'success',
    confirmButtonColor: '#FFC107',
    confirmButtonText: 'I understand'
  })
    } else {
  //send sweet alert 2 message
  Swal.fire({
    title: "shouldn't have expected anything much different",
    text: "You have a 40% chance to get this message",
    confirmButtonColor: '#FFC107',
    icon: 'error',
    confirmButtonText: 'I understand'
  })
    }
      return
    }

    charHard() {
      //80% chance to return true
      var math = Math.random() < 0.4;
      if (math === true) {
    //send sweet alert 2 message
    Swal.fire({
      title: "The odds are in your favor today",
      text: "You have a 40% chance to get this message",
      confirmButtonColor: '#FD7E14',
      icon: 'success',
      confirmButtonText: 'I understand'
    })
      } else {
    //send sweet alert 2 message
    Swal.fire({
      title: "RIP",
      text: "You have a 60% chance to get this message",
      confirmButtonColor: '#FD7E14',
      icon: 'error',
      confirmButtonText: 'I understand'
    })
      }
        return
      }

      //EXPERT
      charExpert() {
        //80% chance to return true
        var math = Math.random() < 0.2;
        if (math === true) {
      //send sweet alert 2 message
      Swal.fire({
        title: "By some sheer luck, you suceeded?",
        text: "You have a 20% chance to get this message",
        icon: 'success',
        confirmButtonColor: '#DC3545',
        confirmButtonText: 'I understand'
      })
        } else {
      //send sweet alert 2 message
      Swal.fire({
        title: "You failed",
        text: "You have a 80% chance to get this message",
        icon: 'error',
        confirmButtonColor: '#DC3545',
        confirmButtonText: 'I understand'
      })
        }
          return
        }

  constructor() { }

  ngOnInit(): void {
  }

}