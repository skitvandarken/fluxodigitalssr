import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregosComponent } from './empregos.component';

describe('EmpregosComponent', () => {
  let component: EmpregosComponent;
  let fixture: ComponentFixture<EmpregosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpregosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpregosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
