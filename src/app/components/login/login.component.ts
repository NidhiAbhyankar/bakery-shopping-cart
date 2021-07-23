import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor() {}

  ngOnInit(): void {}
  login() {
    console.log(this.model);
  }

  loginData = {
    username: this.model.controls.username.value,
    password: this.model.controls.password.value,
  };
}
