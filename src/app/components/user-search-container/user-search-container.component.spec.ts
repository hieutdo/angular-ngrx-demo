import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchContainerComponent } from './user-search-container.component';

describe('UserSearchContainerComponent', () => {
  let component: UserSearchContainerComponent;
  let fixture: ComponentFixture<UserSearchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
