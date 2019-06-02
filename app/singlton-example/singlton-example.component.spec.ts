import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingltonExampleComponent } from './singlton-example.component';

describe('SingltonExampleComponent', () => {
  let component: SingltonExampleComponent;
  let fixture: ComponentFixture<SingltonExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingltonExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingltonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
