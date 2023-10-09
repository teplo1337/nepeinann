import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidBlockComponent } from './mid-block.component';

describe('MidBlockComponent', () => {
  let component: MidBlockComponent;
  let fixture: ComponentFixture<MidBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MidBlockComponent]
    });
    fixture = TestBed.createComponent(MidBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
