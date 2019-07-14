import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lastname',
  templateUrl: './lastname.component.html',
  styleUrls: ['./lastname.component.css']
})
export class LastnameComponent implements OnInit {

  firstname;
  lastname;

  constructor(private router: Router) { 
    this.firstname = localStorage.getItem("firstname");
  }

  ngOnInit() {
  }

  next(f){
    console.log(this.lastname);
    localStorage.setItem("lastname", this.lastname);
    this.router.navigate(['/email']);
  }
}
