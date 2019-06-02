import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativePromiseComponent } from './native-promise.component';

describe('NativePromiseComponent', () => {
  let component: NativePromiseComponent;
  let fixture: ComponentFixture<NativePromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativePromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativePromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
