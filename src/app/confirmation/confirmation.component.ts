import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  confirmation;

  firstname;
  lastname;
  email;

  constructor(
    private router: Router,
    private http: Http) {
    this.confirmation = localStorage.getItem("confirmation");
    this.firstname = localStorage.getItem("firstname");
   }

  ngOnInit() {
    this.http.post('http://localhost:8080/SpringMVCWithRest/review.action',{"firstname":this.firstname, "lastname":"mamidala", "email":"srk.mamidala@gmail.com"})
    .subscribe(response => {
      console.log(response.json());
    });
  }

}
