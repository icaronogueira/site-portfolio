import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowingCursorComponent } from './glowing-cursor.component';

describe('GlowingCursorComponent', () => {
  let component: GlowingCursorComponent;
  let fixture: ComponentFixture<GlowingCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlowingCursorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlowingCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
