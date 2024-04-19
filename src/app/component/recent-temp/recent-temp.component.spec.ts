import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTempComponent } from './recent-temp.component';

describe('RecentTempComponent', () => {
  let component: RecentTempComponent;
  let fixture: ComponentFixture<RecentTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentTempComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
