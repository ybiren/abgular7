import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseImplementComponent } from './promise-implement.component';

describe('PromiseImplementComponent', () => {
  let component: PromiseImplementComponent;
  let fixture: ComponentFixture<PromiseImplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseImplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseImplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
