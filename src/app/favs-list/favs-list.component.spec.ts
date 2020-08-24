import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavsListComponent } from './favs-list.component';

describe('FavsListComponent', () => {
  let component: FavsListComponent;
  let fixture: ComponentFixture<FavsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
