import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdocoesPageComponent } from './adocoes-page.component';

describe('AdocoesPageComponent', () => {
  let component: AdocoesPageComponent;
  let fixture: ComponentFixture<AdocoesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdocoesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdocoesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
