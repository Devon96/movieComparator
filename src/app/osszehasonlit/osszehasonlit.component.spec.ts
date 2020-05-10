import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsszehasonlitComponent } from './osszehasonlit.component';

describe('OsszehasonlitComponent', () => {
  let component: OsszehasonlitComponent;
  let fixture: ComponentFixture<OsszehasonlitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsszehasonlitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsszehasonlitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
