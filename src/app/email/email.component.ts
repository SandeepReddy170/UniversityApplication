import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  firstname;
  lastname;
  email;

  constructor(private router: Router) { 
    this.lastname = localStorage.getItem("lastname");
    this.firstname = localStorage.getItem("firstname");
  }

  ngOnInit() {
  }

  next(f){
    console.log(this.email);
    localStorage.setItem("email", this.email);
    this.router.navigate(['/review']);
  }

}
