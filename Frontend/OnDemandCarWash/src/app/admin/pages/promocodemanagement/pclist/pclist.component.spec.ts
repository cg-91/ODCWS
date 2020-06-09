import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PclistComponent } from './pclist.component';

describe('PclistComponent', () => {
  let component: PclistComponent;
  let fixture: ComponentFixture<PclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
