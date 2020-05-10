import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmekComponent } from './filmek.component';

describe('FilmekComponent', () => {
  let component: FilmekComponent;
  let fixture: ComponentFixture<FilmekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
