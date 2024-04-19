import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempMinmaxSearchComponent } from './temp-minmax-search.component';

describe('TempMinmaxSearchComponent', () => {
  let component: TempMinmaxSearchComponent;
  let fixture: ComponentFixture<TempMinmaxSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempMinmaxSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempMinmaxSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
