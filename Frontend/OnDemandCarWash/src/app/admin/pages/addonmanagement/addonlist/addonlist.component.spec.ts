import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonlistComponent } from './addonlist.component';

describe('AddonlistComponent', () => {
  let component: AddonlistComponent;
  let fixture: ComponentFixture<AddonlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddonlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
