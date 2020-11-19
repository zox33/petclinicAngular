import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVetComponent } from './edit-vet.component';

describe('EditVetComponent', () => {
  let component: EditVetComponent;
  let fixture: ComponentFixture<EditVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
