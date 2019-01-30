import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { addLocationComponent } from './addLocation.component';

describe('addLocationComponent', () => {
  let component: addLocationComponent;
  let fixture: ComponentFixture<addLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ addLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(addLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
