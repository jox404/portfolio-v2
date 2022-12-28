import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMidiaCardComponent } from './social-midia-card.component';

describe('SocialMidiaCardComponent', () => {
  let component: SocialMidiaCardComponent;
  let fixture: ComponentFixture<SocialMidiaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMidiaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMidiaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
