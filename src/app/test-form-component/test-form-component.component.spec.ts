import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormComponentComponent } from './test-form-component.component';

describe('TestFormComponentComponent', () => {
  let component: TestFormComponentComponent;
  let fixture: ComponentFixture<TestFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
