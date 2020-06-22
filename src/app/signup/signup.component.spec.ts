import { FormsModule } from '@angular/forms';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';

export const blankUser = {
                            firstName       : '',
                            lastName        : '',
                            emailId         : '',
                            companyName     : '',
                            password        : '',
                            confirmPassword : '',
                            phoneNumber     : '',
                            terms           : ''
                        };
export const validUser  = {
                            firstName       : 'Nikhil',
                            lastName        : 'EV',
                            emailId         : 'ev@gmail.com',
                            companyName     : 'Fingent',
                            password        : '123456',
                            confirmPassword : '123456',
                            phoneNumber     : '9447404588',
                            terms           : '1'
                        };


describe('SignupComponent', () => {
    let component: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations : [ SignupComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignupComponent);
        component   =   fixture.componentInstance;
        fixture.detectChanges();
    });

    it('it should create', () => {
        expect(component).toBeTruthy();
    });

    it('it should be initialise form as invalid form', () => {
        setTimeout(() => {
            component.regForm.setValue(blankUser);
            expect(component.regForm.invalid).toBeTruthy();
        }, 200);
    });

    it('it should be initialise form as valid form', () => {
        setTimeout(() => {
            component.regForm.setValue(validUser);
            expect(component.regForm.invalid).toBeTruthy();
        }, 200);
    });

    it('should be initialise form invalid email', () => {
        setTimeout(() => {
            const user      = validUser;
            user.emailId    = 'eeddd.dd';
            component.regForm.setValue(user);
            expect(component.regForm.valid).toBeTruthy();
        }, 200);
    });

    it('should be invalid without firstname', () => {
        setTimeout(() => {
            const user      = validUser;
            user.firstName  = '';
            component.regForm.setValue(user);
            expect(component.regForm.invalid).toBeTruthy();
        }, 500);
    });

    it('should be valid without last', () => {
        setTimeout(() => {
            const user      = validUser;
            user.lastName   = '';
            component.regForm.setValue(user);
            expect(component.regForm.invalid).toBeFalsy();
        }, 500);
    });

    it('should be invalid without email', () => {
        setTimeout(() => {
            const user      = validUser;
            user.emailId    = '';
            component.regForm.setValue(user);
            expect(component.regForm.invalid).toBeTruthy();
        }, 500);
    });

    it('should be invalid without companyName', () => {
        setTimeout(() => {
            const user      = validUser;
            user.companyName    = '';
            component.regForm.setValue(user);
            expect(component.regForm.invalid).toBeTruthy();
        }, 500);
    });
    it('should be invalid without password', () => {
        setTimeout(() => {
            const user      = validUser;
            user.password    = '';
            component.regForm.setValue(user);
            expect(component.regForm.invalid).toBeTruthy();
        }, 500);
    });
    it('should be invalid without confirmPassword', () => {
        setTimeout(() => {
            const user      = validUser;
            user.confirmPassword    = '';
            component.regForm.setValue(user);
            expect(component.regForm.invalid).toBeTruthy();
        }, 500);
    });
    it('should be invalid without phoneNumber', () => {
        setTimeout(() => {
            const user          = validUser;
            user.phoneNumber    = '';
            component.regForm.setValue(user);
            expect(component.regForm.invalid).toBeTruthy();
        }, 500);
    });
    it('should be invalid without terms', () => {
        setTimeout(() => {
            const user      = validUser;
            user.terms      = '';
            component.regForm.setValue(user);
            expect(component.regForm.invalid).toBeTruthy();
        }, 500);
    });

    it('should be invalid on password mismatch', () => {
        setTimeout(() => {
            const user          = validUser;
            user.confirmPassword= '123';
            component.regForm.setValue(user);
            expect(component.regForm.invalid).toBeTruthy();
        }, 500);
    });

    it('should true on onSubmit()', () => {
        setTimeout(() => {
            component.regForm.setValue(validUser);
            expect(component.regForm.submitted).toBeTruthy();
        }, 200);
    });

});
