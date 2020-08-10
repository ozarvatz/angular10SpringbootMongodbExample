import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTblComponent } from './smart-tbl.component';

describe('SmartTblComponent', () => {
  let component: SmartTblComponent;
  let fixture: ComponentFixture<SmartTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
