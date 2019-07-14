import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  firstname;
  lastname;
  email;

  constructor(private router: Router) {
    this.firstname = localStorage.getItem("firstname");
    this.lastname = localStorage.getItem("lastname");
    this.email = localStorage.getItem("email");
   }

  ngOnInit() {
  }

  next(){
    localStorage.setItem("confirmation","89979479");
    this.router.navigate(['/confirmation']);
  }

}
