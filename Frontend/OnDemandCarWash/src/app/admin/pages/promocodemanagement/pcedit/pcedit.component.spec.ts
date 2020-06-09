import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PceditComponent } from './pcedit.component';

describe('PceditComponent', () => {
  let component: PceditComponent;
  let fixture: ComponentFixture<PceditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PceditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PceditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
