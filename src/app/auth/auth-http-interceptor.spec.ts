import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthHttpInterceptorComponent } from './auth-http-interceptor';

describe('AuthHttpInterceptorComponent', () => {
  let component: AuthHttpInterceptorComponent;
  let fixture: ComponentFixture<AuthHttpInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthHttpInterceptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthHttpInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
