import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimationDialogueComponent } from './confimation-dialogue.component';

describe('ConfimationDialogueComponent', () => {
  let component: ConfimationDialogueComponent;
  let fixture: ComponentFixture<ConfimationDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfimationDialogueComponent]
    });
    fixture = TestBed.createComponent(ConfimationDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
