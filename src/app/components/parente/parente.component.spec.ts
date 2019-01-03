import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenteComponent } from './parente.component';

describe('ParenteComponent', () => {
  let component: ParenteComponent;
  let fixture: ComponentFixture<ParenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
