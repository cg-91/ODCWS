import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeditComponent } from './spedit.component';

describe('SpeditComponent', () => {
  let component: SpeditComponent;
  let fixture: ComponentFixture<SpeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
