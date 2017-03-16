import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestITestComponent } from './best-i-test.component';

describe('BestITestComponent', () => {
  let component: BestITestComponent;
  let fixture: ComponentFixture<BestITestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestITestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestITestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
