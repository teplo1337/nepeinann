import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBlockComponent } from './small-block.component';

describe('SmallBlockComponent', () => {
  let component: SmallBlockComponent;
  let fixture: ComponentFixture<SmallBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallBlockComponent]
    });
    fixture = TestBed.createComponent(SmallBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
