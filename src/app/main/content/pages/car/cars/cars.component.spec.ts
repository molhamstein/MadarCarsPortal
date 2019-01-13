import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { locationsComponent } from './locations.component';

describe('locationsComponent', () => {
  let component: locationsComponent;
  let fixture: ComponentFixture<locationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ locationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(locationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
