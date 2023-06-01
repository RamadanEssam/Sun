import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjComponent } from './proj.component';

describe('ProjComponent', () => {
  let component: ProjComponent;
  let fixture: ComponentFixture<ProjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjComponent]
    });
    fixture = TestBed.createComponent(ProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
