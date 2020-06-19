import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logoUrl       = 'assets/reachout-logo.png';
  appleLogo     = 'assets/app_store.png';
  googleLogo    = 'assets/google_play.png';
  mobNumberPattern  = '^((\\+91-?)|0)?[0-9]{10}$';
  constructor() { }

  ngOnInit(): void {
  }

  loginSubmit(form: NgForm) {
    // console.log(form);
  }

}
