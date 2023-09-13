import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePropertyComponent } from './reactive-property.component';

describe('ReactivePropertyComponent', () => {
  let component: ReactivePropertyComponent;
  let fixture: ComponentFixture<ReactivePropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactivePropertyComponent]
    });
    fixture = TestBed.createComponent(ReactivePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
