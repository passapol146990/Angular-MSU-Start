import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landmarks } from './landmarks';

describe('Landmarks', () => {
  let component: Landmarks;
  let fixture: ComponentFixture<Landmarks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landmarks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landmarks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
