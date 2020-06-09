import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashereditComponent } from './washeredit.component';

describe('WashereditComponent', () => {
  let component: WashereditComponent;
  let fixture: ComponentFixture<WashereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
