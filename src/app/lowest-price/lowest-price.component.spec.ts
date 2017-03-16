import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisvardComponent } from './prisvard.component';

describe('PrisvardComponent', () => {
  let component: PrisvardComponent;
  let fixture: ComponentFixture<PrisvardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrisvardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrisvardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
