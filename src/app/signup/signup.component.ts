import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  logoUrl           = 'assets/reachout-logo.png';
  mobNumberPattern  = '^((\\+91-?)|0)?[0-9]{10}$';
  @ViewChild('regForm') regForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
