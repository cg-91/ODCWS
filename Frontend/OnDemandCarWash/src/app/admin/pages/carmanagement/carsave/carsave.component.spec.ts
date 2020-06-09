import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsaveComponent } from './carsave.component';

describe('CarsaveComponent', () => {
  let component: CarsaveComponent;
  let fixture: ComponentFixture<CarsaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
