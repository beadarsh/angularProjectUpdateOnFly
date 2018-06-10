import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOnFlyGithubComponent } from './update-on-fly-github.component';

describe('UpdateOnFlyGithubComponent', () => {
  let component: UpdateOnFlyGithubComponent;
  let fixture: ComponentFixture<UpdateOnFlyGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOnFlyGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOnFlyGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
