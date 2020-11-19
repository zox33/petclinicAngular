import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVetComponent } from './add-vet.component';

describe('AddVetComponent', () => {
  let component: AddVetComponent;
  let fixture: ComponentFixture<AddVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
