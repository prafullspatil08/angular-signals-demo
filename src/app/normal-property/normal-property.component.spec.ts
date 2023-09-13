import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalPropertyComponent } from './normal-property.component';

describe('NormalPropertyComponent', () => {
  let component: NormalPropertyComponent;
  let fixture: ComponentFixture<NormalPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalPropertyComponent]
    });
    fixture = TestBed.createComponent(NormalPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
