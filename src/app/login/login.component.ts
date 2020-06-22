import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logoUrl = 'assets/reachout-logo.png';
  appleLogo = 'assets/app_store.png';
  googleLogo = 'assets/google_play.png';
  mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  @ViewChild('loginForm') loginForm: NgForm;

  constructor() {}

  ngOnInit(): void {}

  loginSubmit() {
    // console.log(form);
  }
}
