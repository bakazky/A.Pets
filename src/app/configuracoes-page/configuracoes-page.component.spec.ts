import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesPageComponent } from './configuracoes-page.component';

describe('ConfiguracoesPageComponent', () => {
  let component: ConfiguracoesPageComponent;
  let fixture: ComponentFixture<ConfiguracoesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfiguracoesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracoesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
