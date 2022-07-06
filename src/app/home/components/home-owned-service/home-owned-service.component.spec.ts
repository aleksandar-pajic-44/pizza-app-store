import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOwnedServiceComponent } from './home-owned-service.component';

describe('HomeOwnedServiceComponent', () => {
  let component: HomeOwnedServiceComponent;
  let fixture: ComponentFixture<HomeOwnedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOwnedServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOwnedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
