import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoarPageComponent } from './doar-page.component';

describe('DoarPageComponent', () => {
  let component: DoarPageComponent;
  let fixture: ComponentFixture<DoarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoarPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
