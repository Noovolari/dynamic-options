import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicOptionViewComponent } from './dynamic-option-view.component';

describe('DynamicOptionViewComponent', () => {
  let component: DynamicOptionViewComponent;
  let fixture: ComponentFixture<DynamicOptionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicOptionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicOptionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
