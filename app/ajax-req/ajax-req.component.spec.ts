import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxReqComponent } from './ajax-req.component';

describe('AjaxReqComponent', () => {
  let component: AjaxReqComponent;
  let fixture: ComponentFixture<AjaxReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
