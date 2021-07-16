import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhosinComponent } from './whosin.component';

describe('WhosinComponent', () => {
  let component: WhosinComponent;
  let fixture: ComponentFixture<WhosinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhosinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhosinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
