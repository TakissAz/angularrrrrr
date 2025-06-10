import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsSectionComponent } from './tools-section.component';

describe('ToolsSectionComponent', () => {
  let component: ToolsSectionComponent;
  let fixture: ComponentFixture<ToolsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsSectionComponent]
    });
    fixture = TestBed.createComponent(ToolsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
