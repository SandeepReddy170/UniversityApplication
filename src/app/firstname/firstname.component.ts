import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstname',
  templateUrl: './firstname.component.html',
  styleUrls: ['./firstname.component.css']
})
export class FirstnameComponent implements OnInit {

  firstname;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  next(f){
    console.log(this.firstname);
    localStorage.setItem("firstname", this.firstname);
    this.router.navigate(['/lastname']);
  }

}
