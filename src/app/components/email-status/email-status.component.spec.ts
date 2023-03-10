import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailStatusComponent } from './email-status.component';

describe('EmailStatusComponent', () => {
  let component: EmailStatusComponent;
  let fixture: ComponentFixture<EmailStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
