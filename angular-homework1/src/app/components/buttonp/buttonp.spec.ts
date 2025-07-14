import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttonp } from './buttonp';

describe('Buttonp', () => {
  let component: Buttonp;
  let fixture: ComponentFixture<Buttonp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buttonp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buttonp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
