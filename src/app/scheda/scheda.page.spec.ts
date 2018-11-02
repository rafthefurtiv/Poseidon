import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaPage } from './scheda.page';

describe('SchedaPage', () => {
  let component: SchedaPage;
  let fixture: ComponentFixture<SchedaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
