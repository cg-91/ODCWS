import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcsaveComponent } from './pcsave.component';

describe('PcsaveComponent', () => {
  let component: PcsaveComponent;
  let fixture: ComponentFixture<PcsaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcsaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcsaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
