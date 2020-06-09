import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpsaveComponent } from './spsave.component';

describe('SpsaveComponent', () => {
  let component: SpsaveComponent;
  let fixture: ComponentFixture<SpsaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpsaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpsaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
