import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

export const blankUser = {
  email: '',
  password: '',
};

export const validUser = {
  email : 'evnikhil@gmail.com',
  password : '123456'
};

export const invalidUser = {
  email : 'evnikhilgmail.com',
  password : '123456'
};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],

      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(component.loginForm.submitted).toBeFalsy();
    expect(component.loginForm).toBeDefined();
  });

  it('should be true when onSubmit()', () => {
    setTimeout(() => {
      component.loginForm.setValue(validUser);
      component.loginSubmit();
      expect(component.loginForm.submitted).toBeTruthy();
    }, 500);
  });

  it('should be invalid login form when the user is blank', () => {
    setTimeout(() => {
      component.loginForm.setValue(invalidUser);
      expect(component.loginForm.invalid).toBeTruthy();
    }, 500);
  });

  it('should be valid login form when the user data is correct', () => {
    setTimeout(() => {
      component.loginForm.setValue(invalidUser);
      expect(component.loginForm.valid).toBeTruthy();
    }, 500);
  });

});
