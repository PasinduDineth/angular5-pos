import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) {
  }

  ngOnInit() {
  }
  Login() {
    console.log('login clicked!');
    this.router.navigate(['home']);
  }
}
