import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoneditComponent } from './addonedit.component';

describe('AddoneditComponent', () => {
  let component: AddoneditComponent;
  let fixture: ComponentFixture<AddoneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
