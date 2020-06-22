import { FormsModule } from '@angular/forms';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
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

    it('#it should create 111', () => {
        expect(component).toBeTruthy();
    });

});
