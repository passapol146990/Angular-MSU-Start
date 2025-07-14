import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRadios } from './select-radios';

describe('SelectRadios', () => {
  let component: SelectRadios;
  let fixture: ComponentFixture<SelectRadios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectRadios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectRadios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
