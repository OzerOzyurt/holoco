import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderowlComponent } from './sliderowl.component';

describe('SliderowlComponent', () => {
  let component: SliderowlComponent;
  let fixture: ComponentFixture<SliderowlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderowlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderowlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
