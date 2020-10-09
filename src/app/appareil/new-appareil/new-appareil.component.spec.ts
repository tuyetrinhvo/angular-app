import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppareilComponent } from './new-appareil.component';

describe('NewAppareilComponent', () => {
  let component: NewAppareilComponent;
  let fixture: ComponentFixture<NewAppareilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAppareilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
