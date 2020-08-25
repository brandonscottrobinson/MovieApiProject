import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavsCardComponent } from './favs-card.component';

describe('FavsCardComponent', () => {
  let component: FavsCardComponent;
  let fixture: ComponentFixture<FavsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
