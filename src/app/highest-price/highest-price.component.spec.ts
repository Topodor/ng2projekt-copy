import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvalitetComponent } from './kvalitet.component';

describe('KvalitetComponent', () => {
  let component: KvalitetComponent;
  let fixture: ComponentFixture<KvalitetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvalitetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvalitetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
