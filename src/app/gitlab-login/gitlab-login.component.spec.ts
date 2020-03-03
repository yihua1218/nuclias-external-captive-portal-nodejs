import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitlabLoginComponent } from './gitlab-login.component';

describe('GitlabLoginComponent', () => {
  let component: GitlabLoginComponent;
  let fixture: ComponentFixture<GitlabLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitlabLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitlabLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
