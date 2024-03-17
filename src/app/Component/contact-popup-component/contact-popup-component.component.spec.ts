import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPopupComponentComponent } from './contact-popup-component.component';

describe('ContactPopupComponentComponent', () => {
  let component: ContactPopupComponentComponent;
  let fixture: ComponentFixture<ContactPopupComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPopupComponentComponent]
    });
    fixture = TestBed.createComponent(ContactPopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
