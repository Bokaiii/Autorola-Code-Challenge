import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarModalComponent } from './new-car-modal.component';

describe('NewCarModalComponent', () => {
  let component: NewCarModalComponent;
  let fixture: ComponentFixture<NewCarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCarModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
