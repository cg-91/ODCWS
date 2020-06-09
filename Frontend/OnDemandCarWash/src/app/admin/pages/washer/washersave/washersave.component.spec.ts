import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashersaveComponent } from './washersave.component';

describe('WashersaveComponent', () => {
  let component: WashersaveComponent;
  let fixture: ComponentFixture<WashersaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashersaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashersaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
