import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialNavBarComponent } from './material-nav-bar.component';

describe('MaterialNavBarComponent', () => {
  let component: MaterialNavBarComponent;
  let fixture: ComponentFixture<MaterialNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
