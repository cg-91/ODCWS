import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonsaveComponent } from './addonsave.component';

describe('AddonsaveComponent', () => {
  let component: AddonsaveComponent;
  let fixture: ComponentFixture<AddonsaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddonsaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonsaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
