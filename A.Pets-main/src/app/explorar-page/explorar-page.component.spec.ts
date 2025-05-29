import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarPageComponent } from './explorar-page.component';

describe('ExplorarPageComponent', () => {
  let component: ExplorarPageComponent;
  let fixture: ComponentFixture<ExplorarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplorarPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
