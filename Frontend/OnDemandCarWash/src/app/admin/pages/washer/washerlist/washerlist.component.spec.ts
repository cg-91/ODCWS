import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherlistComponent } from './washerlist.component';

describe('WasherlistComponent', () => {
  let component: WasherlistComponent;
  let fixture: ComponentFixture<WasherlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WasherlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
