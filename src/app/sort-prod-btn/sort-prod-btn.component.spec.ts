import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortProdBtnComponent } from './sort-prod-btn.component';

describe('SortProdBtnComponent', () => {
  let component: SortProdBtnComponent;
  let fixture: ComponentFixture<SortProdBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortProdBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortProdBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
